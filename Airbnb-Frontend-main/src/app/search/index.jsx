import React from 'react';
import Filter from './filter';
import SortFilter from './filter/components/sort-filter';
import Hotels from './hotels';
import PaginationFilter from './filter/components/pagination-filter';
import useGetHotels from './hotels/hooks/use-get-hotels';
import { SEARCH_RESULT_PAGE_LIMIT } from '../config/app.config';
import { SearchLoadingNotice } from '@/components/server-notice';

const SearchPage = () => {
  const { data, pending, error, city } = useGetHotels();
  const hotels = data?.content || [];
  const totalEntries = data?.totalElements;

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 mt-4 sm:mt-6 mb-8 sm:mb-12">
      <div className="max-w-[1536px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">

          {/* Filter Sidebar */}
          <aside className="w-full lg:w-64 xl:w-72 shrink-0 order-2 lg:order-1">
            <Filter />
          </aside>

          {/* Main Content */}
          <section className="flex-1 order-1 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                <span className="block sm:inline">{city}:</span>
                <span className="text-sm sm:text-base md:text-lg text-muted-foreground ml-0 sm:ml-2">
                  {pending ? 'searching…' : `${totalEntries} properties found`}
                </span>
              </h1>
              <div className="w-full sm:w-auto">
                <SortFilter />
              </div>
            </div>

            {/* Server wake-up notice — only visible while loading */}
            <SearchLoadingNotice isLoading={pending} />

            {/* Hotels Grid/List */}
            <Hotels error={error} isLoading={pending} data={hotels} />

            {/* Pagination */}
            {hotels.length > 0 && (
              <div className="mt-6 sm:mt-8">
                <PaginationFilter
                  totalEntries={totalEntries}
                  limit={SEARCH_RESULT_PAGE_LIMIT}
                />
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;