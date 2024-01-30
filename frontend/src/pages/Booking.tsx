import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiClient from '../api-client';

const Booking = () => {
    const { hotelId } = useParams();

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
            <BookingDetailSummary/>
        </div>
    );
};

export default Booking;