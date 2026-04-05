import React from 'react'
import { useParams } from 'react-router'
import useQuery from '@/lib/hooks/useQuery'
import { LoadingSpinner } from '@/components/ui/loader'
import ApiError from '@/components/api-error'
import InsightsChart from './Insights-chart'

const Insights = () => {
  const { hotelId } = useParams()
  const { data, pending, error } = useQuery({
    url: `/admin/hotels/${hotelId}/bookings`,
  })

  console.log('RAW DATA:', data)

  if (pending) return <LoadingSpinner containerClassName="min-h-[calc(100vh-56px)]" />
  if (error) return <ApiError errorMessage={error} className="h-[calc(100vh-200px)]" />

  const bookings = Array.isArray(data) ? data : []

  console.log('BOOKINGS ARRAY:', bookings)

  if (bookings.length === 0) {
    return (
      <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[1536px] mx-auto">
        <section className="space-y-1 sm:space-y-2 mb-6">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold">Insights</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">Analytics and trends for your hotel</p>
        </section>
        <div className="flex flex-col items-center justify-center gap-4 py-16 border rounded-md bg-muted/30">
          <p className="text-sm text-muted-foreground">No booking data available for insights</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[1536px] mx-auto space-y-6">
      <section className="space-y-1 sm:space-y-2">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold">Insights</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">Analytics and trends for your hotel</p>
      </section>
      <InsightsChart bookings={bookings} />
    </div>
  )
}

export default Insights