import Icon from '@/components/ui/icons';
import React from 'react';
import useHotelNavigation from '../hooks/use-hotel-navigation';
import { Link } from 'react-router';

const hotelInfo = {
  description:
    'A boutique resort with an Indo-Portuguese architecture, the Ronil Goa offers lively holidays filled with recreational activities.',
  details: {
    type: 'Entire Homestay',
    bedrooms: 1,
    guests: 4,
    policies: ['Free Cancellation', 'Book with ₹0 Payment'],
  },
  rating: {
    score: 4.8,
    text: 'Excellent',
    reviews: 8,
  },
};

const HotelImages = ({ photos }) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  
  const imageHoverHandler = (imageIndex) => {
    setActiveImageIndex(imageIndex);
  };

  return (
    <div className="flex flex-col gap-1 w-full sm:w-48 md:w-60 shrink-0">
      <div className="w-full">
        <img
          height={100}
          width={240}
          className="rounded-sm h-24 sm:h-28 md:h-[138px] w-full object-cover"
          src={photos[activeImageIndex]}
          alt="Hotel main image"
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-4 gap-0.5 sm:gap-1 w-full">
        {photos.slice(1).map((image, index) => (
          <div 
            className="relative overflow-hidden rounded-sm aspect-video sm:aspect-auto" 
            key={index}
            onMouseEnter={() => imageHoverHandler(index + 1)}
          >
            <img
              height={50}
              width={60}
              className="h-full w-full object-cover"
              src={image}
              alt="Hotel thumbnail"
              loading="lazy"
            />
            {index === photos.length - 2 && (
              <span className="text-[10px] flex pointer-events-none items-center justify-center font-semibold text-white absolute inset-0 backdrop-blur-sm">
                View All
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const HotelCard = ({ name, photos, city, id, amenities, price }) => {
  const navigationUrl = useHotelNavigation(id);

  return (
    <Link className="inline-block w-full" to={navigationUrl}>
      <article className="flex flex-col sm:flex-row w-full transition-colors border rounded-lg hover:border-primary gap-2 sm:gap-0">
        
        {/* Images Section */}
        <div className="p-2 sm:p-4 w-full sm:w-auto">
          <HotelImages photos={photos} />
        </div>

        {/* Middle Section - Hotel Details */}
        <div className="flex-1 p-2 sm:p-4 space-y-2 sm:space-y-3 min-w-0">
          
          {/* Hotel Name & Rating */}
          <div className="space-y-0.5">
            <h2 className="text-base sm:text-lg md:text-xl font-bold line-clamp-1">
              {name}
              {new Array(3).fill(0).map((_, index) => (
                <Icon
                  key={index}
                  icon="star"
                  size="12"
                  className="inline mb-0.5 sm:mb-1 ml-0.5 text-yellow-500"
                />
              ))}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-primary">{city}</p>
          </div>

          {/* Hotel Type Details */}
          <div className="flex flex-wrap items-center gap-1 text-muted-foreground">
            <p className="text-xs sm:text-sm font-semibold">{hotelInfo.details.type}</p>
            <span className="hidden sm:inline">|</span>
            <p className="text-xs sm:text-sm">{`${hotelInfo.details.bedrooms} Bed`}</p>
            <span className="hidden sm:inline">|</span>
            <p className="text-xs sm:text-sm">{`${hotelInfo.details.guests} Guest${hotelInfo.details.guests > 1 ? 's' : ''}`}</p>
          </div>

          {/* Amenities */}
          <div>
            <ul className="space-y-0.5 sm:space-y-1">
              {amenities.slice(0, 2).map((policy, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1 text-xs sm:text-sm text-green-700"
                >
                  <Icon icon="check" size="14" className="sm:size-[16px] shrink-0" />
                  <span className="truncate">{policy}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="flex items-center gap-1 min-w-0">
            <p className="text-xs sm:text-sm line-clamp-1 text-muted-foreground">
              {hotelInfo.description}
            </p>
            <span className="flex items-center text-xs font-medium shrink-0 text-primary whitespace-nowrap">
              More
            </span>
          </div>
        </div>

        {/* Right Section - Price & Rating */}
        <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start w-full sm:w-auto p-2 sm:p-4 sm:border-l border-t sm:border-t-0 gap-3 sm:gap-0 shrink-0">
          
          {/* Rating */}
          <div>
            <div className="flex gap-1 items-center">
              <p className="text-xs sm:text-base font-bold text-brand">
                {hotelInfo.rating.text}
              </p>
              <span className="inline-block px-1.5 py-0.5 text-xs sm:text-sm font-bold text-white rounded bg-brand shrink-0">
                {hotelInfo.rating.score}
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-start sm:text-end">
              ({hotelInfo.rating.reviews} Ratings)
            </p>
          </div>

          {/* Price */}
          <div className="flex flex-col items-start sm:items-end justify-end sm:flex-1 gap-0.5">
            <p className="text-lg sm:text-2xl font-bold">{`₹${price.toLocaleString()}`}</p>
            <p className="text-xs text-muted-foreground">{`+ ₹0 taxes`}</p>
            <p className="text-xs text-muted-foreground">Per Night</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default React.memo(HotelCard);