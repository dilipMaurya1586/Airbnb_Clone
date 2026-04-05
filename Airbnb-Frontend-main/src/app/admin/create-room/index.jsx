import BackNavigation from '@/components/back-navigate'
import React from 'react'
import { useParams } from 'react-router'
import CreateRoomForm from './create-room-form';

const CreateRoom = () => {
    const{hotelId}=useParams();
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-6 sm:space-y-8">
         <BackNavigation href={`/admin/hotels/${hotelId}/rooms`} text='Back to rooms'/>
      <div className="flex flex-col gap-1 sm:gap-2">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold">Create Room</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Fill room information to create new room
        </p>
      </div>
      <CreateRoomForm/>
    </div>
  )
}

export default CreateRoom