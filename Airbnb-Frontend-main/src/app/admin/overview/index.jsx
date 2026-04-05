import { useAdminContext } from '@/lib/provider/admin-context-provider'
import React from 'react'
import HotelMetaInfo from './hotel-meta-info';
import OverviewFilters from './overview-filter';
import InsightSection from './insight-section';
import { LoadingSpinner } from '@/components/ui/loader';

const Overview = () => {
  const{hotel,isLoading}=useAdminContext();

 if(isLoading) return 
    <LoadingSpinner containerClassName={"min-h-[calc(100vh-56px)]"}/>

  
  
  if(!hotel) return <p className="text-sm sm:text-base p-3 sm:p-4">No hotel data available</p>
  
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[1536px] mx-auto space-y-6 sm:space-y-8">
      <HotelMetaInfo
        name={hotel?.name}
        photo={hotel?.photos?.[0]}
        address={hotel?.contactInfo?.address}
        active={hotel?.active}
      />

      <section className='space-y-4 sm:space-y-6'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4'>
          <h2 className='text-base sm:text-lg md:text-xl font-semibold'>Overview</h2>
          <OverviewFilters />
        </div>
        <InsightSection />
      </section>
    </div>
  )
}

export default Overview