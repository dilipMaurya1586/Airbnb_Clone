import { Button } from '@/components/ui/button'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative w-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] bg-black overflow-hidden'>
        <img 
          className='absolute inset-0 w-full h-full object-cover object-center' 
          src="./assets/hero-image-1440.jpeg" 
          alt="Booking Image of Hero Section"
        />
        <div className='relative z-10 container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 flex flex-col justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]'>
            <div className='space-y-2 sm:space-y-3 max-w-2xl'>
              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white'>
                Travel has never
                <br /> felt this cozy
              </h1>
              <p className='text-sm sm:text-base md:text-lg font-medium leading-snug text-white'>
                Book an entire place all for yourself
              </p>
              <Button className="mt-2 sm:mt-3 cursor-pointer px-4 sm:px-6 h-8 sm:h-10 text-sm font-semibold">
                Discover holiday rentals
              </Button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection