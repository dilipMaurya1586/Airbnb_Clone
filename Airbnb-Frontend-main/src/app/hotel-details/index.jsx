import React from 'react'
import PropertyViewCard from './property-view-card'
import HotelMetaDetails from './hotel-meta-details'
import HotelRoomPicker from './hotel-room-picker'
import HotelPolicy from './hotel-policy'
import HotelCheckoutCard from './hotel-checkout-card'
import { HOTEL_DATA, HOTEL_INFO } from './hotelDetailsData'
import useGetHotelInfo from './hooks/use-get-hotel-details'
import { LoadingSpinner } from '@/components/ui/loader'

const HotelDetails = () => {

    const {data: hotelData, pending, error} = useGetHotelInfo()

    const hotelInfo = HOTEL_INFO

    if(pending) return <LoadingSpinner containerClassName={"min-h-[calc(100vh-56px)]"}/>

    if(error) return <p className="text-sm sm:text-base p-4">Error: {error.message}</p>

  return (
    <div className='w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[1536px] mx-auto mt-4 sm:mt-6 mb-8 sm:mb-12'>
      <PropertyViewCard images={hotelData.hotel.photos}/>
      <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6'>
        <div className='flex-1 space-y-6 sm:space-y-8 w-full'>
          <HotelMetaDetails hotel={hotelData.hotel} info={hotelInfo}/>
          <HotelRoomPicker rooms={hotelData.rooms}/>
          <HotelPolicy policy={hotelInfo.hotelPolicy}/>
        </div>
        <aside className='w-full lg:w-80 lg:w-96 shrink-0 p-3 sm:p-4 border border-border shadow-md rounded-xl lg:sticky lg:top-6 lg:h-min'>
          <HotelCheckoutCard rooms={hotelData.rooms} cancellationPolicy={hotelInfo.cancellationPolicy}/>
        </aside>
      </div>
    </div>
  )
}

export default HotelDetails