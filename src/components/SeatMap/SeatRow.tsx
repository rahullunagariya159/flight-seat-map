// components/SeatMap/SeatRow.tsx
import React from 'react';
import Seat from './Seat';
import { StyledSeatRow } from './styles';

interface SeatInfo {
    code?: string;
    available: boolean;
    total?: { alternatives: { amount: number; currency: string }[][] };
    type?: 'window' | 'middle' | 'aisle' | 'exit';
}

interface SeatRowProps {
    seats: SeatInfo[];
    rowNumber: number;
    selectedSeats: SeatInfo[];
    onSeatClick: (seat: SeatInfo) => void;
    cabinType?: 'first' | 'business' | 'economy';
    isExitRow?: boolean;
}

const SeatRow: React.FC<SeatRowProps> = ({
    seats,
    rowNumber,
    selectedSeats,
    onSeatClick,
    cabinType = 'economy',
    isExitRow = false
}) => {
    // Group seats by their position (left, center, right)
    const leftSeats = seats.filter((_, index) => index < 3);
    const rightSeats = seats.filter((_, index) => index >= 3);

    return (
        <StyledSeatRow $isExitRow={isExitRow}>
            <div className="row-number">{rowNumber}</div>
            <div className="seats">
                {leftSeats.map((seat, index) => (
                    <Seat
                        key={`left-${index}`}
                        code={seat.code}
                        available={seat.available}
                        price={seat.total?.alternatives?.[0]?.[0]}
                        isSelected={selectedSeats.some(s => s.code === seat.code)}
                        onSelect={() => onSeatClick(seat)}
                        type={seat.type || (index === 0 ? 'window' : index === 1 ? 'middle' : 'aisle')}
                    />
                ))}
                <div className="aisle" />
                {rightSeats.map((seat, index) => (
                    <Seat
                        key={`right-${index}`}
                        code={seat.code}
                        available={seat.available}
                        price={seat.total?.alternatives?.[0]?.[0]}
                        isSelected={selectedSeats.some(s => s.code === seat.code)}
                        onSelect={() => onSeatClick(seat)}
                        type={index === rightSeats.length - 1 ? 'window' : index === 0 ? 'aisle' : 'middle'}
                    />
                ))}
            </div>
            <div className="row-number">{rowNumber}</div>
        </StyledSeatRow>
    );
};

export default SeatRow;