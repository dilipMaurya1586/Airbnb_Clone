import React, { useMemo } from 'react'
import dayjs from 'dayjs'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts'
import {
  Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card'

const STATUS_COLORS = {
  CONFIRMED: '#22c55e',
  PAYMENTS_PENDING: '#f59e0b',
  CANCELLED: '#ef4444',
  COMPLETED: '#3b82f6',
}

const InsightsChart = ({ bookings=[] }) => {

  // 1. Revenue by check-in date (time-based)
  const revenueByDate = useMemo(() => {
    const map = {}
    bookings.forEach((b) => {
      const date = dayjs(b.checkInDate).format('DD MMM')
      map[date] = (map[date] || 0) + (b.amount || 0)
    })
    return Object.entries(map).map(([date, revenue]) => ({ date, revenue }))
  }, [bookings])

  // 2. Booking status breakdown (categorical)
  const statusData = useMemo(() => {
    const map = {}
    bookings.forEach((b) => {
      map[b.bookingStatus] = (map[b.bookingStatus] || 0) + 1
    })
    return Object.entries(map).map(([status, count]) => ({ status, count }))
  }, [bookings])

  // 3. Stat cards
  const stats = useMemo(() => {
    const totalRevenue = bookings.reduce((sum, b) => sum + (b.amount || 0), 0)
    const pending = bookings.filter((b) => b.bookingStatus === 'PAYMENTS_PENDING')
    const pendingAmount = pending.reduce((sum, b) => sum + (b.amount || 0), 0)

    // Most booked room type
    const roomMap = {}
    bookings.forEach((b) => {
      roomMap[b.roomType] = (roomMap[b.roomType] || 0) + 1
    })
    const topRoom = Object.entries(roomMap).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

    // Highest revenue date
    const dateMap = {}
    bookings.forEach((b) => {
      const date = dayjs(b.checkInDate).format('DD MMM YYYY')
      dateMap[date] = (dateMap[date] || 0) + (b.amount || 0)
    })
    const topDate = Object.entries(dateMap).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

    return { totalRevenue, pendingAmount, topRoom, topDate }
  }, [bookings])

  return (
    <div className="space-y-6">

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold font-mono">₹{stats.totalRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold font-mono text-amber-500">₹{stats.pendingAmount.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Most Booked Room</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold truncate">{stats.topRoom}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Highest Revenue Date</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">{stats.topDate}</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm sm:text-base">Revenue by Check-in Date</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueByDate}>
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(val) => `₹${val.toLocaleString()}`} />
              <Bar dataKey="revenue" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Booking Status Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm sm:text-base">Booking Status Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ status, percent }) =>
                  `${status} ${(percent * 100).toFixed(0)}%`
                }
              >
                {statusData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={STATUS_COLORS[entry.status] || '#8b5cf6'}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

    </div>
  )
}

export default InsightsChart