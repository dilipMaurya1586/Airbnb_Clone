import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router'
import { SEARCH_PARAMS_KEYS } from '../config/app.config'

const Room = ({id, type, amenities, price, isSelected, photos}) => {

  const [searchParmas, setSearchParmas] = useSearchParams();
  const roomSelectgedHandler = () => {
    searchParmas.set(SEARCH_PARAMS_KEYS.SELECTED_ROOM, id);
    setSearchParmas(searchParmas, {replace: true});
  }

  return(
    <article>
      {isSelected && (
        <div className='flex items-center gap-1 px-3 sm:px-5 py-1 rounded-t-lg bg-brand'>
          <Icon icon="star" className="fill-amber-500 stroke-transparent" size="12"/>
          <p className='text-[10px] sm:text-xs font-bold text-white uppercase'>Selected category</p>
        </div>
      )}
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 border border-border p-3 sm:p-4'> 
        <div className='flex-1 space-y-3 sm:space-y-4 min-w-0'>
          <div className='flex gap-2 items-center'>
            <h3 className='text-base sm:text-lg font-semibold truncate'>{type}</h3>
            {isSelected && <Icon size="20" icon="circleCheck" className="fill-green-600 text-white shrink-0 sm:size-[26px]" />}
          </div>
          <div>
            <ul className='flex flex-wrap gap-2'>
              {amenities.map((item, index) => (
                  <li key={index} className='flex gap-1 sm:gap-2 items-center text-xs sm:text-sm'>
                      <Icon icon="check" size="16" className="text-green-600 shrink-0"/>
                      <span className='font-medium text-muted-foreground'>{item}</span>
                  </li>
              ))}
          </ul>
          </div>
        </div>
        <div className='w-full sm:w-40 md:w-45 h-32 sm:h-40 shrink-0'>
          <img
            src={photos[0]}
            alt={photos[0]}
            className='object-cover size-full rounded-lg sm:rounded-xl'
          />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 border-x border-b p-3 sm:p-4 rounded-b-lg'>
        <div className='flex-1 flex gap-2 items-center'>
          <span className='text-base sm:text-lg font-bold'>{`₹${price.toLocaleString()}`}</span>
          <span className='text-xs sm:text-sm text-muted-foreground line-through'>{`₹${(price*1.5).toLocaleString()}`}</span>
        </div>
        <Button 
          disabled={isSelected} 
          onClick={roomSelectgedHandler}
          variant='outline'
          size='lg'
          className={`cursor-pointer h-9 sm:h-10 md:h-12 text-xs sm:text-sm font-semibold gap-1 w-full sm:w-40 md:w-45 disabled:opacity-80 uppercase ${
            !isSelected && 'hover:text-destructive text-destructive'
          }`}
        >
          {isSelected && (
            <Icon icon="circleCheck" size="16" className="fill-green-600 text-white"/>
          )}
          {isSelected ? 'Selected': 'Select'}
        </Button>
      </div>
    </article>
  )
}

const HotelRoomPicker = ({rooms}) => {

  const [searchParmas, setSearchParmas] = useSearchParams();
  const selectedRoomId = Number(searchParmas.get(SEARCH_PARAMS_KEYS.SELECTED_ROOM));

  useEffect(() => {
    if(!rooms.find(item => item.id === selectedRoomId)){
      searchParmas.set(SEARCH_PARAMS_KEYS.SELECTED_ROOM, rooms[0].id);
      setSearchParmas(searchParmas, {replace: true});
    }
  }, [])

  return (
    <section className='space-y-3 sm:space-y-4'>
      <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>Choose your Room</h2>
      <div className='space-y-3 sm:space-y-4'>
        {rooms.map((room) => 
        <Room {...room} key={room.id} isSelected={selectedRoomId === room.id}/>)}
      </div>
    </section>
  )
}

export default HotelRoomPicker