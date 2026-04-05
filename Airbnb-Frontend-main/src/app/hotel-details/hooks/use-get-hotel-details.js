
import API_CONFIG from '@/app/config/api.config';
import { SEARCH_PARAMS_KEYS, SEARCH_RESULT_PAGE_LIMIT } from '@/app/config/app.config';

import useQuery from '@/lib/hooks/useQuery';

import { useParams, useSearchParams } from 'react-router';

function useGetHotelInfo() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  

  const { data, pending, error } = useQuery({
    url: API_CONFIG.HOTEL.HOTEL_INFO.URL(id),
    options: {
      params: {
        city: searchParams.get(SEARCH_PARAMS_KEYS.LOCATION),
        startDate: searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN),
        endDate: searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT),
        roomsCount: searchParams.get(SEARCH_PARAMS_KEYS.ROOMS),
        page: (searchParams.get(SEARCH_PARAMS_KEYS.PAGE) || 1) - 1,
        size: SEARCH_RESULT_PAGE_LIMIT,
      },
    },
  });
  return { data, pending, error };
}

export default useGetHotelInfo;
