import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React, { useState } from 'react'
import { FormControl, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icons';
import { cn } from '@/lib/utils'
import { DESTINATIONS } from '@/app/config/app.config';

const LocationInput = ({ form }) => {
  const city = form.watch('city');
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function citySelectHandler(e, index) {
    e.preventDefault();
    const selectedDestination = DESTINATIONS[index];
    form.setValue('city', selectedDestination?.city || '');
    setIsPopOverOpen(false);
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => prev + 1);
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          const selectedDestination = DESTINATIONS[selectedIndex];
          form.setValue("city", selectedDestination.city);
          setIsPopOverOpen(false);
        }
        break;
      default:
        break;
    }
  }

  return (
    <Popover open={isPopOverOpen} onOpenChange={setIsPopOverOpen}>
      <PopoverTrigger asChild>
        <div className={cn(
          "flex gap-1 sm:gap-2 items-center rounded bg-background h-9 sm:h-10",
          "px-2 sm:px-3 md:px-4 py-2",
          "w-full flex-1",
          "border border-gray-300 lg:border-0" // Border on mobile, remove on desktop
        )}>
          <Icon
            icon="bed"
            size="18"
            className="text-muted-foreground shrink-0 sm:size-[20px]"
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormControl>
                <Input
                  className="w-full h-full px-1 text-xs sm:text-sm border-0 focus-visible:ring-0 placeholder:text-foreground/70"
                  placeholder="Where to?"
                  {...field}
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                />
              </FormControl>
            )}
          />
          <div
            role="button"
            className={city ? "cursor-pointer" : "opacity-0 pointer-events-none"}
            onClick={(e) => {
              e.preventDefault();
              form.setValue('city', '');
            }}
            aria-label='Clear the city input'
          >
            <Icon 
              icon="close"
              size="16"
              className="text-muted-foreground shrink-0"
            />
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent 
        sideOffset="8"
        align="start"
        className={cn(
          "p-0 rounded-lg",
          isMobile ? "w-[calc(100vw-32px)] max-h-[50vh]" : "w-80 sm:w-96"
        )}
      >
        <div className="p-2 sm:p-3 border-b">
          <p className="text-xs sm:text-sm font-semibold">Popular destinations</p>
        </div>
        <div className="overflow-y-auto max-h-[45vh]">
          {DESTINATIONS.map((destination, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 cursor-pointer transition-colors text-xs sm:text-sm border-b
              ${selectedIndex === index ? "bg-accent" : "hover:bg-accent"}`}
              onClick={(e) => citySelectHandler(e, index)}
            >
              <Icon icon="location" size="16" className="shrink-0" />
              <div className="min-w-0">
                <p className="font-semibold truncate">{destination.city}</p>
                <p className="text-muted-foreground text-xs truncate">
                  {destination.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default LocationInput