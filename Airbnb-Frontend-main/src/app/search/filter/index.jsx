import React from 'react'
import StarFilter from './components/star-filter'
import PriceFilter from './components/price-filter'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import UseFilterForm from './hooks/use-filter-form'

const Filter = () => {
  const { form, clearAllFilters, filterChangeHandler } = UseFilterForm();
  
  return (
    <aside className="border border-border max-h-max rounded-md w-full sm:w-64 md:w-72 lg:w-80">
      <div className="flex items-center justify-between p-2 sm:p-3 border-b border-border">
        <h3 className="text-sm sm:text-base font-bold">Filter By:</h3>
        <Button
          onClick={clearAllFilters}
          variant="link"
          size="sm"
          className="h-auto p-0 text-xs underline-offset-1 hover:underline"
        >
          Clear All
        </Button>
      </div>

      <Form {...form}>
        <form onChange={filterChangeHandler}>
          <StarFilter form={form} />
          <PriceFilter form={form} />
        </form>
      </Form>
    </aside>
  )
}

export default Filter