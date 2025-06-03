// components/SeatMap/Seat.tsx
import React from 'react';
import { Tooltip } from 'antd';
import { StyledSeat } from './styles';

interface Price {
    amount: number;
    currency: string;
}

interface SeatProps {
    code?: string;
    available: boolean;
    price?: Price;
}

const Seat: React.FC<SeatProps> = ({ code, available, price }) => {
    const tooltipText = code
        ? `${code}${price ? ` - ${price.amount} ${price.currency}` : ''}`
        : 'Unavailable';

    return (
        <Tooltip title={tooltipText}>
            <StyledSeat $available={available}>
                {code || 'X'}
            </StyledSeat>
        </Tooltip>
    );
};

export default Seat;
