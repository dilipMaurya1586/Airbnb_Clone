import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { topBookingTableHeader } from '@/app/config/admin.config';
import dayjs from 'dayjs';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { bookingStatusVariant } from '@/app/config/app.config';


const MoreDetailsDialog = ({ sheetOpen, setSheetOpen, booking }) => {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent className="w-full sm:max-w-[500px] overflow-auto">
        <SheetHeader>
          <SheetTitle className="text-lg sm:text-xl">Booking Details</SheetTitle>
          <SheetDescription className="sr-only">
            Complete breakdown of the booking.
          </SheetDescription>
        </SheetHeader>

        {/* User Info */}
        <div className="mt-4 sm:mt-6 border rounded-md">
          <h3 className="font-semibold p-3 sm:p-4 border-b text-sm sm:text-base">User Info</h3>
          <Table className="text-xs sm:text-sm">
            <TableBody>
              <TableRow>
                <TableCell className="font-medium w-32 sm:w-40">Name</TableCell>
                <TableCell>{booking?.user?.name || 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Email</TableCell>
                <TableCell className="break-all">{booking?.user?.email || 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Gender</TableCell>
                <TableCell>{booking?.user?.gender || 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Date of Birth</TableCell>
                <TableCell>
                  {booking?.user?.dateOfBirth
                    ? dayjs(booking.user.dateOfBirth).format('DD MMM YYYY')
                    : 'N/A'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Roles</TableCell>
                <TableCell>
                  {booking?.user?.roles?.join(', ') || 'N/A'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Booking Info */}
        <div className="mt-4 sm:mt-6 border rounded-md">
          <h3 className="font-semibold p-3 sm:p-4 border-b text-sm sm:text-base">Booking Info</h3>
          <Table className="text-xs sm:text-sm">
            <TableBody>
              <TableRow>
                <TableCell className="font-medium w-32 sm:w-40">Booking ID</TableCell>
                <TableCell className="break-all">{booking?.id || 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Room Type</TableCell>
                <TableCell>{booking?.roomType || 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rooms Count</TableCell>
                <TableCell>{booking?.roomsCount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Check-in Date</TableCell>
                <TableCell>
                  {dayjs(booking?.checkInDate).format('DD MMM YYYY')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Check-out Date</TableCell>
                <TableCell>
                  {dayjs(booking?.checkOutDate).format('DD MMM YYYY')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Status</TableCell>
                <TableCell>{booking?.bookingStatus}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Amount</TableCell>
                <TableCell>{booking?.amount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Created At</TableCell>
                <TableCell className="text-[11px] sm:text-xs">
                  {dayjs(booking?.createdAt).format('DD MMM YYYY, HH:mm')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Updated At</TableCell>
                <TableCell className="text-[11px] sm:text-xs">
                  {dayjs(booking?.updatedAt).format('DD MMM YYYY, HH:mm')}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Guests Info */}
        {booking?.guests?.length > 0 && (
          <div className="mt-4 sm:mt-6 border rounded-md">
            <h3 className="font-semibold p-3 sm:p-4 border-b text-sm sm:text-base">Guests</h3>
            <Table className="text-xs sm:text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm">Name</TableHead>
                  <TableHead className="text-xs sm:text-sm">Gender</TableHead>
                  <TableHead className="text-xs sm:text-sm">DOB</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {booking.guests.map((guest) => (
                  <TableRow key={guest.id}>
                    <TableCell>{guest.name}</TableCell>
                    <TableCell>{guest.gender}</TableCell>
                    <TableCell>
                      {dayjs(guest.dateOfBirth).format('DD MMM YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

const BookingsTable = ({bookings}) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetBooking, setSheetBooking] = useState(null);

  function handleSheetClick(booking) {
    setSheetBooking(booking);
    setSheetOpen(true);
  }

  return (
    <div className="overflow-x-auto border rounded-md">
      <Table className="text-xs sm:text-sm">
        <TableHeader className={'bg-muted/50'}>
          <TableRow>
            {topBookingTableHeader.map((header) => (
              <TableHead className={`${header.className} text-xs sm:text-sm`} key={header.id}>
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow
              key={booking.id}
              onClick={() => handleSheetClick(booking)}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell className="truncate">{booking.id}</TableCell>
              <TableCell className="truncate">{booking.user.name}</TableCell>
              <TableCell className="truncate">{booking.roomType}</TableCell>
              <TableCell>{booking.roomsCount}</TableCell>
              <TableCell className="whitespace-nowrap">
                {dayjs(booking.checkInDate).format('DD MMM')}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {dayjs(booking.checkOutDate).format('DD MMM')}
              </TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    'text-white px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs',
                    bookingStatusVariant[booking.bookingStatus]?.className
                  )}
                >
                  {bookingStatusVariant[booking.bookingStatus]?.text}
                </Badge>
              </TableCell>
              <TableCell className="font-mono whitespace-nowrap">{booking.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MoreDetailsDialog
        sheetOpen={sheetOpen}
        setSheetOpen={setSheetOpen}
        booking={sheetBooking}
      />
    </div>
  );
}

export default BookingsTable