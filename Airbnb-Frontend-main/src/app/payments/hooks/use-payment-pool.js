import API_CONFIG from "@/app/config/api.config";
import { BOOKING_STATUS } from "@/app/config/payment.config";
import axiosInstance from "@/lib/axios-instance";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

function usePoolPaymentStatus() {
    const { bookingId } = useParams();
    const MAX_RETRIES = 30;
    const POLLING_DELAY = 5000;

    const [maxRetries, setMaxRetries] = useState(MAX_RETRIES);
    const [paymentStatus, setPaymentStatus] = useState(BOOKING_STATUS.PROCESSING);
    
    const isFinalStatus = useRef(false);

    async function getPaymentStatus() {
        if (isFinalStatus.current) return;
        
        try {
            const { data } = await axiosInstance.get(
                API_CONFIG.BOOKING.STATUS_BOOKING.URL(bookingId)
            );

            if ([
                BOOKING_STATUS.CONFIRMED,
                BOOKING_STATUS.CANCELLED,
                BOOKING_STATUS.EXPIRED,
            ].includes(data.bookingStatus)) {
                isFinalStatus.current = true;
                setMaxRetries(0);
                setPaymentStatus(data.bookingStatus);
                return;
            }

            setPaymentStatus(BOOKING_STATUS.PROCESSING);
            setMaxRetries((prev) => prev - 1);
        } catch (err) {
            console.log('error occurred: ', err);
            setMaxRetries((prev) => prev - 1);
        }
    }

    useEffect(() => {
        if (maxRetries <= 0 && !isFinalStatus.current) {
            setPaymentStatus(BOOKING_STATUS.ERROR);
            return;
        }

        if (isFinalStatus.current) return;

        const timeoutId = setTimeout(getPaymentStatus, POLLING_DELAY);
        return () => clearTimeout(timeoutId);
    }, [maxRetries]);

    useEffect(() => {
        getPaymentStatus();
    }, []);

    return { paymentStatus };
}

export default usePoolPaymentStatus;