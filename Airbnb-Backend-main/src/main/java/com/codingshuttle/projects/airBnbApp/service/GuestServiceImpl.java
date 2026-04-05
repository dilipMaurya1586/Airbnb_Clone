package com.codingshuttle.projects.airBnbApp.service;

import com.codingshuttle.projects.airBnbApp.dto.GuestDto;
import com.codingshuttle.projects.airBnbApp.entity.Guest;
import com.codingshuttle.projects.airBnbApp.entity.User;
import com.codingshuttle.projects.airBnbApp.exception.ResourceNotFoundException;
import com.codingshuttle.projects.airBnbApp.exception.UnAuthorisedException;
import com.codingshuttle.projects.airBnbApp.repository.GuestRepository;
import com.codingshuttle.projects.airBnbApp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GuestServiceImpl implements GuestService {

    private final GuestRepository guestRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public GuestDto addNewGuest(GuestDto guestDto) {
        // Get the currently authenticated user
        User currentUser = getCurrentUser();

        // Convert DTO to Entity
        Guest guest = modelMapper.map(guestDto, Guest.class);

        // Set the user (THIS IS THE FIX!)
        guest.setUser(currentUser);

        // Save the guest
        Guest savedGuest = guestRepository.save(guest);

        // Return as DTO
        return modelMapper.map(savedGuest, GuestDto.class);
    }

    @Override
    public List<GuestDto> getAllGuests() {
        User currentUser = getCurrentUser();
        List<Guest> guests = guestRepository.findByUser(currentUser);
        return guests.stream()
                .map(guest -> modelMapper.map(guest, GuestDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public void updateGuest(Long guestId, GuestDto guestDto) {
        User currentUser = getCurrentUser();
        Guest guest = guestRepository.findById(guestId)
                .orElseThrow(() -> new ResourceNotFoundException("Guest not found"));

        // Verify ownership
        if (!guest.getUser().getId().equals(currentUser.getId())) {
            throw new UnAuthorisedException("You can only update your own guests");
        }

        guest.setName(guestDto.getName());
        guest.setGender(guestDto.getGender());
        guest.setDateOfBirth(guestDto.getDateOfBirth());
        guestRepository.save(guest);
    }

    @Override
    public void deleteGuest(Long guestId) {
        User currentUser = getCurrentUser();
        Guest guest = guestRepository.findById(guestId)
                .orElseThrow(() -> new ResourceNotFoundException("Guest not found"));

        // Verify ownership
        if (!guest.getUser().getId().equals(currentUser.getId())) {
            throw new UnAuthorisedException("You can only delete your own guests");
        }

        guestRepository.delete(guest);
    }

    private User getCurrentUser() {
        // Get the authenticated user from SecurityContext
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}