import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogDescription } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icons';
import React, { useState } from 'react'
import AddNewTraveler from './add-new-travler-dialog';
import GuestPicker from './guest-picker';
import TravelerContextProvider from '@/lib/provider/traveler-context';

const AddGuestsDialog = ({ bookingId, setBookingGuests, bookingGuests }) => {
    const [isGuestDialogOpen, setIsGuestDialogOpen] = useState(false);

    return (
        <AlertDialog open={isGuestDialogOpen} onOpenChange={setIsGuestDialogOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    size="sm"
                    variant="link"
                    aria-label="Add Guests"
                    className="h-auto gap-1 p-0 text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80 hover:no-underline"
                >
                    <Icon icon="plus" size="16" className="sm:size-[18px]" />
                    <span>Add Guests</span>
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="w-[calc(100vw-32px)] sm:w-full max-w-sm sm:max-w-md max-h-[85vh] sm:max-h-none overflow-hidden flex flex-col">
                <AlertDialogDescription className="sr-only">
                    Add guests from your saved travelers list to the booking
                </AlertDialogDescription>

                <TravelerContextProvider>
                    <AlertDialogHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 shrink-0">
                        <AlertDialogTitle className="font-bold text-base sm:text-lg">
                            Add New Traveler
                        </AlertDialogTitle>
                        <AddNewTraveler />
                    </AlertDialogHeader>

                    {/* Scrollable Content Area */}
                    <div className="overflow-y-auto flex-1 pr-3 sm:pr-0">
                        <GuestPicker
                            setBookingGuests={setBookingGuests}
                            setIsGuestDialogOpen={setIsGuestDialogOpen}
                            bookingId={bookingId}
                            bookingGuests={bookingGuests || []}
                        />
                    </div>
                </TravelerContextProvider>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AddGuestsDialog