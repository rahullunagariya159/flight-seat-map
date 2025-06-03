// components/SeatMap/SeatRow.tsx
import React from 'react';
import Seat from './Seat';
import { StyledSeatRow } from './styles';

interface SeatInfo {
    code?: string;
    available: boolean;
    total?: { alternatives: { amount: number; currency: string }[][] };
    storefrontSlotCode: string;
}

interface SeatRowProps {
    seats: SeatInfo[];
    rowNumber: number;
}

const SeatRow: React.FC<SeatRowProps> = ({ seats, rowNumber }) => {
    return (
        <StyledSeatRow>
            <div>{rowNumber}</div>
            {seats.map((seat, index) => {
                const priceData = seat.total?.alternatives?.[0]?.[0];
                return (
                    <Seat
                        key={index}
                        code={seat.code}
                        available={seat.available}
                        price={priceData}
                    />
                );
            })}
        </StyledSeatRow>
    );
};

export default SeatRow;
