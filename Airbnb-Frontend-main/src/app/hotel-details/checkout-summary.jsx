import { Form } from '@/components/ui/form'
import React from 'react'
import useConfirmCheckout from './hooks/use-confirm-checkout'
import DateSelectInput from '../features/search/date-select-input';
import OccupancyInput from '../features/search/occupancy-input';
import { Button } from '@/components/ui/button';

const CheckoutSummary = ({ selectedRoomsDetails }) => {

    const { form, handleUpdateDetailsFormSubmit, handleCheckoutConfirm } = useConfirmCheckout();
    return (
        <div className='space-y-3 sm:space-y-4 w-full'>
            <Form {...form}>
                <form className='space-y-3 sm:space-y-4' 
                onSubmit={form.handleSubmit(handleUpdateDetailsFormSubmit)}>
                    <DateSelectInput form={form}/>
                    <OccupancyInput form={form}/>

                    {form.formState.isDirty && 
                    (<Button
                        type="submit"
                        variant="outline"
                        size='lg'
                        className="w-full h-9 sm:h-10 md:h-11 text-sm sm:text-base"
                        aria-label="Apply Changes"
                    >
                      Apply Changes
                    </Button>)}
                </form>
            </Form>

            <div className='space-y-2 sm:space-y-3 p-3 sm:p-4 border rounded-md bg-muted/30'>
                <div className='flex items-center justify-between'>
                  <span className='text-xs sm:text-sm'>Your Savings</span>
                  <span className='text-xs sm:text-sm font-bold text-green-600'>{`₹${Math.round(selectedRoomsDetails.displayPrice - selectedRoomsDetails.totalPrice).toLocaleString()}`}</span>
                </div>
      
                <div className='flex items-center justify-between border-t pt-2 sm:pt-3'>
                  <span className='text-xs sm:text-sm font-medium'>Your Price</span>
                  <span className='text-sm sm:text-base md:text-lg font-bold'>{`₹${selectedRoomsDetails.totalPrice.toLocaleString()}`}</span>
                </div>
            </div>

            <Button
              onClick={handleCheckoutConfirm}
              className="w-full h-9 sm:h-10 md:h-11 lg:h-12 text-sm sm:text-base font-semibold"
              aria-label="Continue to Book"
            >
              Continue to Book
            </Button>
        </div>
    )
}

export default CheckoutSummary