import BackNavigation from '@/components/back-navigate'
import React from 'react'
import { useParams } from 'react-router'
import EditHotelForm from './edit-hotel-form';
import { useAdminContext } from '@/lib/provider/admin-context-provider';
import { LoadingSpinner } from '@/components/ui/loader';

const EditHotel = () => {
  const{hotelId}=useParams();
 

  const {hotel, isLoading} = useAdminContext();

  if (isLoading) {
    return <LoadingSpinner containerClassName="min-h-[calc(100vh-56px)]" />;
  }

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[1536px] mx-auto space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <BackNavigation  text='Back to hotel' 
        href={`/admin/hotels/${hotelId}/overview`}/>

        <div className="flex flex-col gap-1 sm:gap-2">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold">Hotel Information</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Modify hotel information and review it
          </p>
        </div>
      </div>

      <EditHotelForm data={hotel}/>
       
    </div>
  )
}

export default EditHotel