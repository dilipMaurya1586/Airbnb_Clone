import BackNavigation from '@/components/back-navigate'
import React from 'react'
import { useParams } from 'react-router'
import { LoadingSpinner } from '@/components/ui/loader';
import EditRoomForm from './edit-room-form';

const EditRoom = () => {
  const{hotelId}=useParams();

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[1536px] mx-auto space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <BackNavigation  
          text='Back to room' 
          href={`/admin/hotels/${hotelId}/rooms`}
        />

        <div className="flex flex-col gap-1 sm:gap-2">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold">Room Information</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Modify room information and review it
          </p>
        </div>
      </div>

      <EditRoomForm />
       
    </div>
  )
}

export default EditRoom