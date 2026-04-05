import React from 'react'
import { useEditRoomForm } from './use-edit-room-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { HotelImage } from '@/components/ui/hotel-image';
import Icon from '@/components/ui/icons';
import { ButtonWithIcon } from '@/components/ui/button';
import TokenInput from '@/components/ui/token-input';
import { LoadingSpinner } from '@/components/ui/loader';

const EditRoomForm = () => {  
    
  const { form, pending, updateRoomHandler } = useEditRoomForm(); 
  
  
  if (!form) return <LoadingSpinner containerClassName="min-h-[calc(100vh-56px)]" />;
  
  return (  
    <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(updateRoomHandler)}
        className="space-y-4 sm:space-y-5 md:space-y-6 w-full max-w-[568px]">

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Room Type</FormLabel>
              <FormControl>
                <Input 
                  className="h-9 sm:h-10 text-sm sm:text-base" 
                  placeholder="e.g., Single, Double, Suite"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="basePrice"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Base Price</FormLabel>
              <FormControl>
                <Input 
                  className="h-9 sm:h-10 text-sm sm:text-base" 
                  type="number"
                  placeholder="e.g., 2500"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="capacity"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Capacity (Guests)</FormLabel>
              <FormControl>
                <Input 
                  className="h-9 sm:h-10 text-sm sm:text-base" 
                  type="number"
                  placeholder="e.g., 2"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="totalCount"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Total Rooms Available</FormLabel>
              <FormControl>
                <Input 
                  className="h-9 sm:h-10 text-sm sm:text-base" 
                  type="number"
                  placeholder="e.g., 10"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="photos"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Photos</FormLabel>
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 border rounded-md">
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    ref={field.ref}
                    className="hidden"
                    onChange={(e) => {
                      field.onChange([...field.value]);
                    }}
                  />
                </FormControl>
                {field.value?.map((photo) => (
                  <HotelImage key={photo} photo={photo} />
                ))}
                <FormLabel className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 border-2 border-dashed rounded-md cursor-pointer group hover:bg-secondary shrink-0">
                  <Icon
                    icon="addImage"
                    size="24"
                    className="text-muted-foreground group-hover:text-primary sm:size-[28px]"
                    strokeWidth={1.5}
                  />
                </FormLabel>
              </div>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amenities"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Room Amenities</FormLabel>
              <FormControl>
                <TokenInput 
                  className="text-sm sm:text-base" 
                  {...field} 
                  placeholder="e.g., WiFi, AC, TV, Mini Bar..." 
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <div className="pt-2 sm:pt-4">
          <ButtonWithIcon
            type="submit"
            icon="save"
            className="w-full sm:w-auto px-6 sm:px-8 h-9 sm:h-11 text-sm sm:text-base"
            disabled={pending}
            isLoading={pending}
          >
            Save Changes
          </ButtonWithIcon>
        </div>

        </form>

    </Form>
  )  
}

export default EditRoomForm