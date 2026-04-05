import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icons';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import React from 'react'
import Icons from '@/lib/icons';
import useGetSelectedRoomDetails from './hooks/use-selected-rooms';
import CheckoutSummary from './checkout-summary';

const CancellationPolicy = ({cancellationPolicy}) => {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <div className="flex gap-2 text-rose-600 items-center cursor-pointer">
          <span className='text-xs sm:text-sm font-medium'>Cancellation Policy</span>
          <Icon icon="info" size="16"/>
        </div>
      </HoverCardTrigger>
      <HoverCardContent align='center' side="left" className="w-[min(320px,var(--radix-popper-available-width)-20px)] sm:w-87.5 space-y-2 sm:space-y-3 border-border">
        <h3 className='text-sm sm:text-base font-semibold'>Cancellation Policy</h3>
        <ul className='pl-4 space-y-2 sm:space-y-3 list-disc'>
          {cancellationPolicy.map((policy, index) => (
            <li key={index} className='text-xs sm:text-sm leading-relaxed font-medium text-accent-foreground'>{policy}</li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
}

const HotelCheckoutCard = ({rooms, cancellationPolicy}) => {

  const selectedRoomsDetails = useGetSelectedRoomDetails(rooms)
  return (
    <div className='space-y-4 sm:space-y-6 w-full'>
      
      <div className='flex-1 flex gap-2 items-center'>
          <span className='text-base sm:text-lg font-bold'>{`₹${selectedRoomsDetails.totalPrice.toLocaleString()}`}</span>
          <span className='text-xs sm:text-sm text-muted-foreground line-through'>
            {`₹${selectedRoomsDetails.displayPrice.toLocaleString()}`}</span>
      </div>

      <CheckoutSummary selectedRoomsDetails={selectedRoomsDetails}/>

      <div className="flex gap-1 items-start">
        <Icon
          icon="zap"
          size="16"
          className="mt-0.5 sm:mt-0.75 shrink-0 fill-rose-600 text-rose-600"
        />
        <p className="text-xs sm:text-sm font-medium text-rose-600 leading-snug">
          1k+ people booked this OYO in last 6 months
        </p>
      </div>

      <CancellationPolicy cancellationPolicy={cancellationPolicy} />
        
    </div>
  )
}

export default HotelCheckoutCard