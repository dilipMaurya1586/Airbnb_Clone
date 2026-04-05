import React from 'react'
import { TRENDING_DESTINATION } from '../config/app.config'
import { getAssetPath } from '@/lib/utils'

const TrendingDestination = () => {
  return (
    <div className='w-full px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 max-w-[1536px] mx-auto'>
        <div className="mb-6 sm:mb-8 space-y-1 sm:space-y-2">
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>Trending Destination</h2>
            <p className='text-xs sm:text-sm md:text-base text-muted-foreground'>Most Popular choices for travellers from India</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4'>
            {TRENDING_DESTINATION.map((des, index) => (
                <div 
                  key={index}
                  className={`h-32 sm:h-48 md:h-56 lg:h-67.5 rounded-lg overflow-hidden relative group cursor-pointer transition-transform hover:scale-105 ${des.className}`}
                >
                    <img 
                      className='object-cover size-full rounded-lg' 
                      src={getAssetPath(des.image)} 
                      alt={des.title}
                      loading="lazy"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg'>
                        <div className='absolute bottom-0 left-0 right-0 p-2 sm:p-3'>
                            <h3 className='text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white line-clamp-2'>{des.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default TrendingDestination