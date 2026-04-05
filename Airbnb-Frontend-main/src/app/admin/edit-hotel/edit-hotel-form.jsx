import React from 'react'
import { useEditHotelForm } from './use-edit-hotel-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { HotelImage } from '@/components/ui/hotel-image';
import Icon from '@/components/ui/icons';
import { ButtonWithIcon } from '@/components/ui/button';
import TokenInput from '@/components/ui/token-input';


const EditHotelForm = ({data}) => {
    

      const { form, pending, updateHotelHandler } = useEditHotelForm(data);
  return (
    <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(updateHotelHandler)}
        className="space-y-4 sm:space-y-5 md:space-y-6 w-full max-w-[568px]">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Hotel Name</FormLabel>
              <FormControl>
                <Input className="h-9 sm:h-10 text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">City</FormLabel>
              <FormControl>
                <Input className="h-9 sm:h-10 text-sm sm:text-base" {...field} />
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
              <FormLabel className="text-sm sm:text-base">Amenities</FormLabel>
              <FormControl>
                <TokenInput className="text-sm sm:text-base" {...field} placeholder="Type amenities here..." />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Hotel Address</FormLabel>
              <FormControl>
                <Input className="h-9 sm:h-10 text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Location</FormLabel>
              <FormControl>
                <Input className="h-9 sm:h-10 text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Contact Number</FormLabel>
              <FormControl>
                <Input
                  className="h-9 sm:h-10 text-sm sm:text-base"
                  {...field}
                  onChange={(e) =>
                    field.onChange(e.target.value.replace(/[^0-9+]/, ''))
                  }
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Email</FormLabel>
              <FormControl>
                <Input className="h-9 sm:h-10 text-sm sm:text-base" {...field} />
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

export default EditHotelForm