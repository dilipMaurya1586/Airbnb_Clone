import { ERROR_FALLBACK } from "@/app/config/app.config";
import useMutation from "@/lib/hooks/useMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import z from "zod";
import useQuery from "@/lib/hooks/useQuery";  // ✅ ADDED

const CreateRoomSchema = z.object({
  type: z.string().min(1, 'Room type is required'),
  basePrice: z.coerce.number().min(1, 'Base price is required'),
  photos: z.array(z.string()).nonempty('Photos are required'),
  amenities: z.array(z.string()).nonempty('Amenities are required'),
  totalCount: z.coerce.number().min(1, 'Total count is required'),
  capacity: z.coerce.number().min(1, 'Capacity is required'),
});

export function useEditRoomForm() {  // ✅ REMOVED room parameter
  
  const navigate = useNavigate();
  const { hotelId, roomId } = useParams();
  
  // ✅ ADDED: Fetch room data
  const { data: room, pending: isLoading } = useQuery({
    url: `/admin/hotels/${hotelId}/rooms/${roomId}`,
  });
  
  const { mutate, pending } = useMutation(
    `/admin/hotels/${hotelId}/rooms/${roomId}`, 
    'PUT'
  );

  const form = useForm({
    resolver: zodResolver(CreateRoomSchema),
    defaultValues: {
      type: '',
      basePrice: 0,
      photos: [],
      amenities: [],
      totalCount: 0,
      capacity: 0,
    },
  });

  // ✅ ADDED: Update form when room data loads
  useEffect(() => {
    if (room) {
      form.reset({
        type: room?.type || '',
        basePrice: room?.basePrice || 0,
        photos: room?.photos || [],
        amenities: room?.amenities || [],
        totalCount: room?.totalCount || 0,
        capacity: room?.capacity || 0,
      });
    }
  }, [room, form]);

  const updateRoomHandler = (data) => {
    const apiBody = {
      type: data.type,
      basePrice: data.basePrice,
      photos: data.photos,
      amenities: data.amenities,
      totalCount: data.totalCount,
      capacity: data.capacity,
    };

    mutate(apiBody, {
      onSuccess: () => {
        toast('Room details updated successfully', {
          type: 'success',
        });
        setTimeout(() => {
          navigate(`/admin/hotels/${hotelId}/rooms`);
        }, 500);
      },
      onError: (error) => {
        toast(error.message || ERROR_FALLBACK.TITLE, {
          description: ERROR_FALLBACK.DESCRIPTION,
          type: 'error',
        });
      },
    });
  };

  return { form, pending: pending || isLoading, updateRoomHandler };
}