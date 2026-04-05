import React from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import LocationInput from './location-input';
import DateSelectInput from './date-select-input';
import OccupancyInput from './occupancy-input';
import { Button } from '@/components/ui/button';
import useSearchForm from './use-search-form';
import { cn } from '@/lib/utils'

const Search = () => {
   const { form, searchSubmitHandler } = useSearchForm();

   return (
      <section className='w-full px-3 sm:px-4 md:px-6'>
         <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(searchSubmitHandler)}
              className={cn(
                // Mobile: stacked with padding
                "flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg",
                "bg-white border border-gray-200 shadow-md",
                // Desktop: horizontal layout, full width bar
                "lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:border-0 lg:shadow-none lg:bg-transparent",
                "lg:justify-center"
              )}
            >
              {/* Desktop: Search Bar Container */}
              <div className={cn(
                "hidden lg:flex lg:items-center lg:gap-0 lg:bg-white lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-md lg:p-2 lg:w-full lg:max-w-5xl"
              )}>
                {/* Location Input */}
                <div className="flex-1 lg:border-r lg:border-gray-200">
                  <LocationInput form={form}/>
                </div>

                {/* Date Input */}
                <div className="flex-1 lg:border-r lg:border-gray-200">
                  <DateSelectInput form={form}/>
                </div>

                {/* Occupancy Input */}
                <div className="flex-1 lg:border-r lg:border-gray-200">
                  <OccupancyInput form={form}/>
                </div>

                {/* Search Button - Desktop only */}
                <Button 
                  type="submit" 
                  className="bg-white text-gray-700 border border-gray-300 rounded-sm hover:bg-[#f93f45] hover:text-white cursor-pointer font-bold text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10 lg:h-12 lg:px-8 lg:ml-4 transition-colors"
                >
                  Search
                </Button>
              </div>

              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden flex flex-col gap-2 w-full">
                <LocationInput form={form}/>
                <DateSelectInput form={form}/>
                <OccupancyInput form={form}/>
                <Button 
                  type="submit" 
                  className="bg-white text-gray-700 border border-gray-300 rounded-sm hover:bg-[#f93f45] hover:text-white cursor-pointer font-bold text-xs sm:text-sm px-2 sm:px-4 h-10 sm:h-11 w-full transition-colors"
                >
                  Search
                </Button>
              </div>
            </form>
         </Form>
      </section>
   )
}

export default Search