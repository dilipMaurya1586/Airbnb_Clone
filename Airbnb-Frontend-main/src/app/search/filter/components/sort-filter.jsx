import { SEARCH_FILTER_LABEL_KEY, SEARCH_FILTERS } from '@/app/config/app.config'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select'
import React from 'react'

const SortFilter = () => {
  return (
    <div className="w-full sm:w-auto">
      <Select>
        <SelectTrigger className="gap-2 rounded-full border border-border h-9 sm:h-10 text-xs sm:text-sm w-full sm:w-auto">
          <SelectValue placeholder="Select sort filter">
            <span className="truncate">{SEARCH_FILTER_LABEL_KEY[0]}</span>
          </SelectValue>
        </SelectTrigger>

        <SelectContent className="w-[calc(100vw-32px)] sm:w-auto">
          {SEARCH_FILTERS.map((filter, index) => (
            <SelectItem key={index} value={filter.value} className="text-xs sm:text-sm">
              {filter.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SortFilter