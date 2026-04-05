import API_CONFIG from '@/app/config/api.config';
import { AlertDialogCancel, AlertDialogFooter } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import useMutation from '@/lib/hooks/useMutation';
import { useTravelerContext } from '@/lib/provider/traveler-context'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const GuestPicker = ({
    setIsGuestDialogOpen,
    bookingId,
    setBookingGuests,
    bookingGuests
}) => {

    const { travelers } = useTravelerContext();

    const form = useForm({
        defaultValues: {
            guests: bookingGuests?.map(item => item.id) || []
        }
    });

    const { mutate, pending } = useMutation(
        API_CONFIG.BOOKING.ADD_GUEST.URL(bookingId),
        API_CONFIG.BOOKING.ADD_GUEST.METHOD
    )

    const addGuestHandler = useCallback((data) => {

        if (pending) return;

        if (!data.guests || data.guests.length === 0) {
            toast("Please select at least one guest", {
                type: 'error'
            });
            return;
        }

        mutate(data.guests, {
            onSuccess: (response) => {
                setBookingGuests(response.data.guests);
                toast("Guest added Successfully", {
                    type: 'success'
                })
                setIsGuestDialogOpen(false);
            },
            onError: (error) => {
                toast(error?.message || "Failed to add guest", {
                    type: 'error'
                })
            }
        })
    }, [pending, mutate, setBookingGuests, setIsGuestDialogOpen]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(addGuestHandler)} className="space-y-4 sm:space-y-6">
                <FormField
                    control={form.control}
                    name="guests"
                    render={() => (
                        <FormItem className="space-y-2 sm:space-y-3">
                            {travelers?.map((traveller) => (
                                <FormField
                                    key={traveller.id}
                                    control={form.control}
                                    name="guests"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={traveller.id}
                                                className="flex flex-row items-center justify-between space-y-0 p-2 sm:p-3 rounded-md hover:bg-accent transition-colors"
                                            >
                                                <FormItem className="flex flex-row items-center gap-2 sm:gap-3 space-y-0 min-w-0">
                                                    <FormControl>
                                                        <Checkbox
                                                            className="w-4 h-4 sm:w-5 sm:h-5 border-muted-foreground data-[state=checked]:border-primary shrink-0"
                                                            checked={field.value?.includes(traveller.id) || false}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([
                                                                        ...(field.value || []),
                                                                        traveller.id,
                                                                    ])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== traveller.id
                                                                        )
                                                                    );
                                                            }}
                                                            disabled={pending}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="text-xs sm:text-sm font-medium cursor-pointer truncate">
                                                        {traveller.name}
                                                    </FormLabel>
                                                </FormItem>
                                            </FormItem>
                                        );
                                    }}
                                />
                            ))}
                            <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                    )}
                />
                <AlertDialogFooter className="flex-col-reverse gap-2 sm:flex-row sm:gap-3">
                    <AlertDialogCancel disabled={pending} className="h-9 sm:h-10 text-xs sm:text-sm">
                        Cancel
                    </AlertDialogCancel>

                    <Button
                        type="submit"
                        isLoading={pending}
                        disabled={pending}
                        aria-label="Confirm adding guest to list"
                        className="h-9 sm:h-10 text-xs sm:text-sm w-full sm:w-auto"
                    >
                        {pending ? 'Adding...' : 'Add To Guest List'}
                    </Button>
                </AlertDialogFooter>
            </form>
        </Form>
    );
}

export default GuestPicker