import { DURATION_FILTER_OPTIONS } from '@/app/config/admin.config';
import { Skeleton } from '@/components/ui/skeleton';
import useQuery from '@/lib/hooks/useQuery';

import dayjs from 'dayjs';
import { useParams, useSearchParams } from 'react-router';

const InsightNotAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-12 sm:py-16 px-4 border rounded-md">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.828 14.828 21 21" />
          <path d="M21 16v5h-5" />
          <path d="m21 3-9 9-4-4-6 6" />
          <path d="M21 8V3h-5" />
        </svg>
      </div>
      <p className="text-xs sm:text-sm font-medium text-center text-muted-foreground">
        No insights available at the moment.
      </p>
    </div>
  );
};

const InsightCard = ({ title, insightMetric, pending }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 border rounded-md">
      <h3 className="text-xs sm:text-sm font-medium">{title}</h3>
      <strong className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold">
        {pending ? <Skeleton className="w-20 h-8" /> : insightMetric}
      </strong>
    </div>
  );
};

const InsightSection = () => {
  const [searchParams] = useSearchParams();
  const { hotelId } = useParams();
  const { data, pending, error } = useQuery({
    url: `/admin/hotels/${hotelId}/reports`,
    options: {
      params: {
        startDate: dayjs()
          .subtract(
            searchParams.get('duration') ?? DURATION_FILTER_OPTIONS[1].value,
            'days'
          )
          .format('YYYY-MM-DD'),
      },
    },
  });
  if (error) {
    return <InsightNotAvailable />;
  }
  return (
    <section className="grid mt-6 sm:mt-8 gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <InsightCard
        title="Total Bookings"
        insightMetric={data?.bookingCount}
        pending={pending}
      />
      <InsightCard
        title="Total Revenue"
        insightMetric={data?.totalRevenue}
        pending={pending}
      />
      <InsightCard
        title="Avg Revenue Per Booking"
        insightMetric={data?.avgRevenue}
        pending={pending}
      />
    </section>
  );
};

export default InsightSection;