import { bookingStatusVariant, HOTEL_TIMINGS } from '@/app/config/app.config';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import Icon from '@/components/ui/icons';
import { cn, getDefaultProfile } from '@/lib/utils';

import dayjs from 'dayjs';

const BookingGuestList = ({ guests }) => {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <div
          className="flex items-center gap-1 cursor-pointer"
          role="button"
          aria-label="Guest List"
          tabIndex={0}
        >
          <p className="text-xs sm:text-sm font-medium">{guests.length}</p>
          <Icon icon="info" size="16" className="shrink-0 text-primary" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        align="center"
        side="left"
        className="w-[min(280px,var(--radix-popper-available-width)-20px)] sm:w-[min(350px,var(--radix-popper-available-width)-40px)] space-y-2 sm:space-y-3"
        role="tooltip"
        aria-live="polite"
      >
        <h3 className="text-sm sm:text-base font-semibold">Guest List</h3>
        <ul className="space-y-2 sm:space-y-3">
          {guests.map((guest, index) => (
            <li key={index} role="listitem">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                  <AvatarImage
                    loading="lazy"
                    src={getDefaultProfile(guest.name.charAt(0))}
                    width={36}
                    height={36}
                  />
                  <AvatarFallback>
                    {guest?.name && guest.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-medium truncate">{guest.name}</h3>
                  <p className="text-[10px] sm:text-xs capitalize text-muted-foreground truncate">
                    {guest.gender}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

const BookingCard = ({
  hotel,
  roomsCount,
  checkInDate,
  checkOutDate,
  bookingStatus,
  guests,
  amount,
  bookingId,
  id,
}) => {
  const isBookingConfirmed = bookingStatus === 'CONFIRMED';
  
  return (
    <article className="border rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="p-3 sm:p-4 space-y-1 sm:space-y-2 border-b">
        <div className="min-w-0">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold line-clamp-2">
            {hotel.name || 'Valentines Retreat- Near Candolim Beach'}
          </h2>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate">
            {`Booking ID - ${id}`}
          </p>
          <Icon icon="dot" size="14" className="text-muted-foreground shrink-0" />
          <Badge
            className={cn(
              'text-white px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs',
              bookingStatusVariant[bookingStatus]?.className
            )}
          >
            {bookingStatusVariant[bookingStatus]?.text}
          </Badge>
        </div>
      </div>

      {/* Check-in/Check-out & Details Section */}
      <div className="p-3 sm:p-4 border-b">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-3">
          {/* Check-in Column */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] sm:text-xs font-medium uppercase text-muted-foreground">
                Check in
              </span>
              <div>
                <p className="text-sm sm:text-base font-semibold" aria-label="Check-in time">
                  {HOTEL_TIMINGS.CHECKIN}
                </p>
                <p
                  className="text-xs sm:text-sm font-medium text-muted-foreground"
                  aria-label="Check-in date"
                >
                  {dayjs(checkInDate).format('ddd, DD MMM')}
                </p>
              </div>
            </div>
          </div>

          {/* Check-out Column */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] sm:text-xs font-medium uppercase text-muted-foreground">
                Check out
              </span>
              <div>
                <p className="text-sm sm:text-base font-semibold" aria-label="Check-out time">
                  {HOTEL_TIMINGS.CHECKOUT}
                </p>
                <p
                  className="text-xs sm:text-sm font-medium text-muted-foreground"
                  aria-label="Check-out date"
                >
                  {dayjs(checkOutDate).format('ddd, DD MMM')}
                </p>
              </div>
            </div>
          </div>

          {/* Rooms & Guests Info */}
          <div className="flex gap-4 sm:flex-col sm:gap-2">
            <div className="flex items-center gap-1.5">
              <Icon icon="room" size="18" className="shrink-0" />
              <p className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {`${roomsCount} ${roomsCount > 1 ? 'Rooms' : 'Room'}`}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon icon="travelers" size="18" className="shrink-0" />
              <BookingGuestList guests={guests} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Amount & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-b-[inherit] gap-3 sm:gap-4 px-3 sm:px-4 py-3 bg-blue-50 dark:bg-blue-950">
        <div className="w-full sm:w-auto">
          <p className="text-sm sm:text-base font-semibold">{`Paid - ₹${amount.toLocaleString()}`}</p>
        </div>
        {/* {isBookingConfirmed && <CancelBooking bookingId={id} />} */}
      </div>
    </article>
  );
};

export default BookingCard;