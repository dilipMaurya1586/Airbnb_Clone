import { STAR_FILTERS } from '@/app/config/app.config'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import React from 'react'

function StarFilter({ form }) {
  return (
    <div className="p-2 sm:p-3 border-t border-border">
      <div className="mb-2 sm:mb-3">
        <h4 className="text-xs sm:text-sm font-semibold">Star Category</h4>
      </div>
      <FormField
        control={form.control}
        name="starCategory"
        render={({ field }) => (
          <FormItem className="space-y-2">
            {STAR_FILTERS.map((star) => (
              <FormItem 
                key={star.id}
                className="flex items-center gap-2 space-y-0"
              >
                <FormControl>
                  <Checkbox
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    checked={(field.value || []).includes(star.value)}
                    onCheckedChange={(checked) => {
                      const currentValue = field.value || [];
                      const newValue = checked
                        ? [...currentValue, star.value]
                        : currentValue.filter((value) => value !== star.value);
                      field.onChange(newValue);
                    }}
                  />
                </FormControl>
                <FormLabel className="text-xs sm:text-sm font-normal text-foreground cursor-pointer">
                  {star.label}
                </FormLabel>
              </FormItem>
            ))}
          </FormItem>
        )}
      />
    </div>
  )
}

export default StarFilter