import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import Icon from '@/components/ui/icons'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'

const OccupancyInput = ({ form }) => {
  if (!form) return null;

  const rooms = form.watch('roomsCount')
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return(
    <Popover>
      <PopoverTrigger asChild>
        <div  
          className={cn(
            "flex items-center justify-between rounded bg-background gap-2",
            "px-2 sm:px-3 md:px-4 py-2",
            "h-9 sm:h-10",
            "w-full flex-1",
            "border border-gray-300 lg:border-0 cursor-pointer" // Border on mobile, remove on desktop
          )}
          role="button"
        >
          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
            <Icon 
              icon="user"
              size="18"
              className="text-muted-foreground shrink-0 sm:size-[20px]"
            />
            <p className="text-xs sm:text-sm truncate">{rooms} room{rooms !== 1 ? 's' : ''}</p>
          </div>
          <Icon
            icon="dropdown"
            size="16"
            className="text-muted-foreground shrink-0"
          />
        </div>
      </PopoverTrigger>

      <PopoverContent  
        sideOffset="8"
        align='start'
        className={cn(
          "p-3 sm:p-4",
          isMobile ? "w-[calc(100vw-32px)]" : "w-72 md:w-80"
        )}
      >
        <FormField
          control={form.control}
          name="roomsCount"
          render={({ field }) => (
            <div>
              <FormItem className="flex items-center justify-between gap-3">
                <FormLabel className="text-xs sm:text-sm">Rooms</FormLabel>
                <FormControl>
                  <div className='border rounded border-foreground/50 flex items-center h-8 sm:h-10 gap-1'>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-7 sm:size-9 text-primary hover:text-primary p-0 hover:bg-accent"
                      onClick={(e) => {
                        e.preventDefault();
                        if (field.value > 1) {
                          field.onChange(field.value - 1);
                        }
                      }}
                    >
                      <Icon icon="minus" size="16" />
                    </Button>
                    <span className="text-xs sm:text-sm font-semibold min-w-6 text-center">{field.value}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-7 sm:size-9 text-primary hover:text-primary p-0 hover:bg-accent"
                      onClick={(e) => {
                        e.preventDefault();
                        field.onChange(field.value + 1);
                      }}
                    >
                      <Icon icon="plus" size="16" />
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            </div>
          )}
        />
      </PopoverContent>
    </Popover>
  )
}

export default OccupancyInput