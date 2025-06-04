// components/SeatMap/SummaryPanel.tsx
import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
    margin: 0 0 15px 0;
    color: #333;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const SelectedSeatsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
    min-height: 40px;
    align-items: center;
`;

const SeatBadge = styled.span`
    background: #e6f7ff;
    color: #1890ff;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    
    &::before {
        content: '✈';
        font-size: 12px;
    }
`;

const Total = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #006747; // Qatar Airways green
    border-top: 1px solid #f0f0f0;
    padding-top: 15px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`;

const ContinueButton = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 15px;
    background: #006747; // Qatar Airways green
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
        background: #005238;
    }
    
    &:disabled {
        background: #cccccc;
        cursor: not-allowed;
    }
`;

interface SummaryPanelProps {
    selectedSeats: Array<{
        code?: string;
        total?: { alternatives: { amount: number; currency: string }[][] };
    }>;
}

const SummaryPanel: React.FC<SummaryPanelProps> = ({ selectedSeats }) => {
    const totalAmount = selectedSeats.reduce((sum, seat) => {
        const amount = seat.total?.alternatives?.[0]?.[0]?.amount || 0;
        return sum + amount;
    }, 0);

    const currency = selectedSeats[0]?.total?.alternatives?.[0]?.[0]?.currency || 'USD';

    return (
        <Panel>
            <Title>Your Selection</Title>
            <SelectedSeatsList>
                {selectedSeats.length > 0 ? (
                    selectedSeats.map((seat, index) => (
                        <SeatBadge key={index}>{seat.code}</SeatBadge>
                    ))
                ) : (
                    <span style={{ color: '#999' }}>No seats selected</span>
                )}
            </SelectedSeatsList>
            <Total>
                <span>Total:</span>
                <span>{currency} {totalAmount.toFixed(2)}</span>
            </Total>
            <ContinueButton disabled={selectedSeats.length === 0}>
                Continue with {selectedSeats.length} {selectedSeats.length === 1 ? 'Seat' : 'Seats'}
            </ContinueButton>
        </Panel>
    );
};

export default SummaryPanel;