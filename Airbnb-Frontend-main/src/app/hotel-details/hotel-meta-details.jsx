import Icon from '@/components/ui/icons'
import React from 'react'

const HotelMetaDetails = ({hotel, info}) => {
  return (
    <>
    <section className='space-y-3 sm:space-y-4'>
        <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex-1 space-y-1 sm:space-y-2'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>{hotel.name}</h1>
                <p className='text-xs sm:text-sm text-muted-foreground'>{`${hotel.contactInfo.address}, ${hotel.city}`}</p>
            </div>
            <div className='flex gap-2 shrink-0'>
              <div className='flex gap-2 items-center justify-center bg-brand px-2 py-1 rounded-t-sm text-white'>
                  <span className='text-sm sm:text-base font-bold'>4.8</span>
                  <Icon size='14' className="fill-white" icon="star"/>
              </div>
              <div className='bg-secondary rounded-b-sm px-2 py-1 flex items-center justify-center'>
                       <span className='text-[10px] sm:text-xs font-medium'>666 Ratings</span>
              </div>
            </div>
        </div>
        <div className='flex items-center gap-1.5 px-2 py-1 rounded bg-gray-100 w-fit font-semibold'>
            <Icon size="14" icon="gem"/>
            <span className='text-[10px] sm:text-xs'>Company-Serviced</span>
        </div>
        <div className='flex items-center gap-2 px-2'>
            <Icon icon="curve" className="-mt-4 stroke-gray-400 shrink-0"/>
            <p className='text-xs sm:text-sm'>5.0 Check-in rating &gt; Delightful experience</p>
        </div>
        <div className='flex gap-2 p-2 sm:p-3 text-orange-500 bg-orange-50 items-start border rounded-sm'>
            <Icon icon="heart" size="16" className="shrink-0 mt-0.5"/>
            <p className='text-xs sm:text-sm font-medium leading-snug'>Located Less than 5 km from Medanta Hospital | Located 3 kms from Omaxe Celebration Mall</p>
        </div>
    </section>

    <section className='space-y-3 sm:space-y-4 my-6 sm:my-8'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>Amenities</h2>
        <ul className='flex flex-wrap gap-2'>
            {hotel.amenities.map((item, index) => (
                <li key={index} className='flex gap-2 items-center text-xs sm:text-sm'>
                    <Icon icon="check" className="text-green-600 shrink-0"/>
                    <span className='font-medium text-muted-foreground'>{item}</span>
                </li>
            ))}
        </ul>
    </section>

    <section className='space-y-3 sm:space-y-4 my-6 sm:my-8'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>About This Property</h2>
        <p className='text-xs sm:text-sm leading-relaxed tracking-wide text-muted-foreground'>{info.description}</p>
    </section>
    </>
  )
}

export default HotelMetaDetails