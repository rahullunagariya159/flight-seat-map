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
    isSelected?: boolean;
    onSelect?: () => void;
}

const Seat: React.FC<SeatProps> = ({ code, available, price, isSelected, onSelect }) => {
    const tooltipText = code
        ? `${code}${price ? ` - ${price.amount} ${price.currency}` : ''}`
        : 'Unavailable';

    return (
        <Tooltip title={tooltipText}>
            <StyledSeat
                $available={available}
                $selected={!!isSelected}
                onClick={() => available && onSelect?.()}
            >
                {code || 'X'}
            </StyledSeat>
        </Tooltip>
    );
};

export default Seat;
