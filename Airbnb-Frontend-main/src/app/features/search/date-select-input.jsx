import { Calendar } from '@/components/ui/calendar'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import Icon from '@/components/ui/icons'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import dayjs from 'dayjs'
import React, { useState } from 'react'

const DateSelectInput = ({ form, className }) => {

  const [open, setOpen] = useState(false)
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Determine number of months based on screen size
  const numberOfMonths = windowWidth < 640 ? 1 : windowWidth < 1024 ? 1 : 2

  // Determine popover width and padding
  const getPopoverClass = () => {
    if (windowWidth < 640) {
      return "w-[calc(100vw-32px)] max-h-[70vh] p-0"
    } else if (windowWidth < 1024) {
      return "w-[calc(100vw-64px)] max-h-[70vh] p-0"
    } else {
      return "w-[640px] p-4"
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <FormField
        control={form.control}
        name="bookingDates"
        render={({ field }) => (
          <>
            <PopoverTrigger asChild>
              <FormItem className={cn(
                "px-2 sm:px-3 md:px-4 py-2 rounded bg-background h-full w-full",
                "sm:min-w-[250px] md:min-w-[300px] lg:flex-auto",
                "border border-gray-300 lg:border-0", // Add border for mobile, remove for desktop
                className
              )}>
                <FormControl>
                  <div role="button" className="flex items-center h-full gap-1 sm:gap-2 min-w-0">
                    <Icon
                      icon="calendar"
                      size="20"
                      className="text-muted-foreground shrink-0 sm:size-[24px]"
                    />
                    <div className="flex items-center flex-1 gap-1 sm:gap-2 min-w-0 overflow-hidden">
                      <p className="text-xs sm:text-sm truncate">
                        {field?.value?.from
                          ? dayjs(field.value.from).format('DD MMM')
                          : 'Check-in'}
                      </p>
                      <span aria-hidden className="text-xs sm:text-sm shrink-0">-</span>
                      <p className="text-xs sm:text-sm truncate">
                        {field?.value?.to
                          ? dayjs(field.value.to).format('DD MMM')
                          : 'Check-out'}
                      </p>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            </PopoverTrigger>

            <PopoverContent
              sideOffset="1"
              align="start"
              className={cn(
                "rounded-lg border bg-background shadow-lg",
                getPopoverClass()
              )}
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <div className={cn(
                "overflow-y-auto",
                windowWidth < 1024 ? "max-h-[65vh]" : "max-h-none"
              )}>
                <Calendar
                  required
                  mode="range"
                  min={2}
                  selected={field.value}
                  numberOfMonths={numberOfMonths}
                  className={cn(
                    "w-full",
                    windowWidth < 640 && "scale-75 origin-top-left",
                    windowWidth >= 640 && windowWidth < 1024 && "scale-90 origin-top-left",
                    windowWidth >= 1024 && "scale-100"
                  )}
                  fromMonth={new Date()}
                  disabled={(date) => dayjs().isAfter(dayjs(date), 'date')}
                  onSelect={(value) => {
                    field.onChange(value);
                    if (value?.from && value?.to) {
                      setOpen(false);
                    }
                  }}
                />
              </div>
            </PopoverContent>
          </>
        )}
      />
    </Popover>
  );
};

export default DateSelectInput