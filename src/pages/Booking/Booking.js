import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { foodId } = useParams();
    return (
        <div>
            <h3>This is booking: {foodId}</h3>
        </div>
    );
};

export default Booking;