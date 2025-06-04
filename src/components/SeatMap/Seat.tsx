// components/SeatMap/Seat.tsx
import React from 'react';
import { Tooltip } from 'antd';
import { StyledSeat } from './styles';

interface SeatProps {
    code?: string;
    available: boolean;
    price?: { amount: number; currency: string };
    isSelected?: boolean;
    onSelect?: () => void;
    type?: 'window' | 'middle' | 'aisle' | 'exit';
}

const Seat: React.FC<SeatProps> = ({
    code,
    available,
    price,
    isSelected = false,
    onSelect,
    type = 'aisle'
}) => {
    const tooltipTitle = code ? (
        <div>
            <div><strong>Seat:</strong> {code}</div>
            {price && (
                <div><strong>Price:</strong> {price.currency} {price.amount}</div>
            )}
            {!available && <div>This seat is not available</div>}
        </div>
    ) : null;

    return (
        <Tooltip title={tooltipTitle} placement="top">
            <StyledSeat
                $available={available}
                $selected={isSelected}
                $type={type}
                onClick={available ? onSelect : undefined}
            >
                {code?.slice(-1) || ''}
            </StyledSeat>
        </Tooltip>
    );
};

export default Seat;