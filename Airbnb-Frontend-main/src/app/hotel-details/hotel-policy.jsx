import { Separator } from '@/components/ui/separator'
import React from 'react'

const HotelPolicy = ({policy}) => {
  return (
   <section className='space-y-3 sm:space-y-4'>
    <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>Hotel Policy</h2>
    <div className='space-y-4'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mx-0 sm:mx-5'>
        <div className='flex-1'>
          <span className='text-xs sm:text-sm font-medium'>Check-in</span>
          <div className="mt-2 sm:mt-3 relative px-3 sm:px-4 py-1 border border-border before:absolute before:size-4 
            before:rotate-44 before:bg-background before:-top-2 before:left-2 before:border-t before:border-l before:border-border">
            <p className='text-base sm:text-lg font-semibold'>{policy.checkIn}</p>
          </div>
        </div>

        <div className='flex-1'>
          <span className='text-xs sm:text-sm font-medium'>Check-out</span>
          <div className="mt-2 sm:mt-3 relative px-3 sm:px-4 py-1 border border-border before:absolute before:size-4 
            before:rotate-44 before:bg-background before:-top-2 before:left-2 before:border-t before:border-l before:border-border">
            <p className='text-base sm:text-lg font-semibold'>{policy.checkout}</p>
          </div>
        </div>

      </div>
      <ul className='list-disc list-inside space-y-1 sm:space-y-2'>
        {policy.rules.map((rule, index) => (
            <li key={index} className='text-xs sm:text-sm text-muted-foreground leading-snug'>{rule}</li>
        ))}
      </ul>
    </div>
   </section>
  )
}

export default HotelPolicy