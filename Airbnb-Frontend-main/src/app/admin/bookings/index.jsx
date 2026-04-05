import ApiError from '@/components/api-error';
import { LoadingSpinner } from '@/components/ui/loader';
import useQuery from '@/lib/hooks/useQuery';
import React from 'react';
import { useParams } from 'react-router';

import BookingsTable from './booking-table';


const Bookings = () => {
  const { hotelId } = useParams();
  const { data, pending, error } = useQuery({
    url: `/admin/hotels/${hotelId}/bookings`,
  });

  if (pending)
    return <LoadingSpinner containerClassName="min-h-[calc(100vh-56px)]" />;

  if (error)
    return <ApiError errorMessage={error} className="h-[calc(100vh-200px)]" />;

  // Empty state - no bookings
  if (!data || data.length === 0) {
    return (
      <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[1536px] mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        <section className="space-y-1 sm:space-y-2">
  <h1 className="text-base sm:text-lg md:text-xl font-semibold">Bookings</h1>
  <p className='text-xs sm:text-sm  font-semibold'>
    Click on any booking to get details of booking
  </p>
</section>

        {/* No Bookings Message */}
        <section className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-12 sm:py-16 md:py-20 border rounded-md bg-muted/30">
          <div className="text-center space-y-2 sm:space-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-muted-foreground opacity-50"
            >
              <path d="M6 9h12M6 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2M6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H9V5Z" />
            </svg>
            <div>
              <h2 className="text-base sm:text-lg font-semibold">No Bookings Yet</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                You don't have any bookings at the moment
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Show table if bookings exist
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[1536px] mx-auto space-y-4 sm:space-y-6 md:space-y-8">
      <section className="space-y-1 sm:space-y-2">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold">Bookings</h1>
        <p className='text-xs sm:text-sm text-muted-foreground'>View all your Bookings</p>
      </section>
      <section className="w-full overflow-x-auto">
        <BookingsTable bookings={data || []} />
      </section>
    </div>
  );
};

export default Bookings;