import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiClient from '../api-client';
import BookingDetailSummary from '../components/BookingDetailSummary';
import { useSearchContext } from '../contexts/SearchContext';
import { useState } from 'react';

const Booking = () => {
    const search = useSearchContext();
    const { hotelId } = useParams();

    const [numberOfNights, setNumberOfNights] = useState<number>(0);

    const { data: hotel } = useQuery(
        'fetchHotelById',
        () => apiClient.fetchHotelById(hotelId as string),
        {
            enabled: !!hotelId
        }
    );

    if (!hotel) {
        return <></>;
    }

    return (
        <div className="grid md:grid-cols-[1fr_2fr]">
            <BookingDetailSummary
                checkIn={search.checkIn}
                checkOut={search.checkOut}
                adultCount={search.adultCount}
                childCount={search.childCount}
                numberOfNights={numberOfNights}
                hotel={hotel}
            />
        </div>
    );
};

export default Booking;