import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const PropertyViewCard = ({images}) => {
  return (
    <section>
        <Carousel 
          className="w-full overflow-hidden rounded-lg"
          opts={{
              breakpoints: {
                  '(min-width: 1024px)': { slidesToScroll: 2},
              },
          }}
        >
            <CarouselContent className="-ml-0.5">
                {images.map((image, index) => (
                    <CarouselItem key={index} className='lg:basis-1/2 pl-0.5'>
                        <img 
                          className='w-full h-40 sm:h-56 md:h-80 lg:h-96 object-cover rounded-lg'
                          src={image} 
                          alt={`Property image ${index + 1}`}
                          loading="lazy"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 sm:left-2 shadow-lg"/>
            <CarouselNext className="right-1 sm:right-2 shadow-lg"/>
        </Carousel>
    </section>
  )
}

export default PropertyViewCard