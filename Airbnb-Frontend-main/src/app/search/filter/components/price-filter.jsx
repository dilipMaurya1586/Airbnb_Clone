import { PRICE_FILTERS } from '@/app/config/app.config';
import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import React from 'react';

const PriceFilter = ({ form }) => {
  return (
    <div className="p-2 sm:p-3 border-t border-border">
      <div className="mb-2 sm:mb-3">
        <h4 className="text-xs sm:text-sm font-semibold">Price per night</h4>
      </div>
      <FormField
        control={form.control}
        name="priceRange"
        render={({ field }) => (
          <FormItem className="space-y-2">
            {PRICE_FILTERS.map((price) => (
              <FormItem
                key={price.id}
                className="flex items-center gap-2 space-y-0"
              >
                <FormControl>
                  <Checkbox
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    checked={(field.value || []).includes(price.value)}
                    onCheckedChange={(checked) => {
                      const currentValue = field.value || [];
                      const newValue = checked
                        ? [...currentValue, price.value]
                        : currentValue.filter((value) => value !== price.value);
                      field.onChange(newValue);
                    }}
                  />
                </FormControl>
                <FormLabel className="text-xs sm:text-sm font-normal text-foreground cursor-pointer">
                  {price.label}
                </FormLabel>
              </FormItem>
            ))}
          </FormItem>
        )}
      />
    </div>
  );
};

export default React.memo(PriceFilter);