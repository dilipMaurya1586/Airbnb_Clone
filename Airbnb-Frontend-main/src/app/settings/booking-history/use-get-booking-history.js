import PATH_CONFIG from "@/app/config/path.config";
import useQuery from "@/lib/hooks/useQuery";
import { useEffect, useState } from "react";
import { data } from "react-router";

function useGetBookingHistory(){

    const{data,pending,error}=useQuery({
        url: PATH_CONFIG.USER.BOOKING_HISTORY
    });

    
    return{data,pending,error}
}

export default useGetBookingHistory;