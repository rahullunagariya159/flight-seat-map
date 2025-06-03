// components/SeatMap/SeatRow.tsx
import React from 'react';
import Seat from './Seat';
import { StyledSeatRow } from './styles';

interface SeatInfo {
    code?: string;
    available: boolean;
    total?: { alternatives: { amount: number; currency: string }[][] };
    storefrontSlotCode?: string;
}

interface SeatRowProps {
    seats: SeatInfo[];
    rowNumber: number;
    selectedSeats: SeatInfo[];
    onSeatClick: (seat: SeatInfo) => void;
}

const SeatRow: React.FC<SeatRowProps> = ({ seats, rowNumber, selectedSeats, onSeatClick }) => {
    return (
        <StyledSeatRow>
            <div>{rowNumber}</div>
            {seats.map((seat, index) => {
                const isSelected = selectedSeats.some((s) => s.code === seat.code);
                const priceData = seat.total?.alternatives?.[0]?.[0];

                return (
                    <Seat
                        key={index}
                        code={seat.code}
                        available={seat.available}
                        price={priceData}
                        isSelected={isSelected}
                        onSelect={() => onSeatClick(seat)}
                    />
                );
            })}
        </StyledSeatRow>
    );
};

export default SeatRow;
