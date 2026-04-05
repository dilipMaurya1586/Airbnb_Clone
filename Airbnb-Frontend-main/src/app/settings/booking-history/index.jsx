import React from 'react'
import { Separator } from '@/components/ui/separator'
import useGetBookingHistory from './use-get-booking-history'
import BookingCard from './booking-card'
import ApiError from '@/components/api-error'
import { LoadingSpinner } from '@/components/ui/loader'

const BookingHistory = () => {

    const{data,error,pending}=useGetBookingHistory(); 

    if(error)  return <ApiError
  errorMessage={error} 
  className="h-[calc(100vh-240px)]"
  />

    if(pending) return <LoadingSpinner containerClassName={"min-h-[calc(100vh-56px)]"}/>
    
  return (
    <section className="w-full px-3 sm:px-4 md:px-0">
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">My Booking History</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          View, update, or cancel your bookings with ease.
        </p>
      </div>
      <Separator className="mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-5 md:mb-6" />
    
      
      {data && data.length > 0 ? (
        <div className='space-y-3 sm:space-y-4'>
          {data.map((booking)=>(
            <BookingCard key={booking.id} {...booking}/>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 sm:py-16">
          <p className="text-lg sm:text-xl font-semibold text-muted-foreground">
            No Booking History
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            You haven't made any bookings yet. Start exploring and book your next stay!
          </p>
        </div>
      )}
    </section> 
  )
}

export default BookingHistory