// components/SeatMap/HeaderInfo.tsx
import React from 'react';
import { Card } from 'antd';

interface Props {
    from: string;
    to: string;
    flightNumber: string;
    aircraft: string;
    passengerCode: string;
    seatSelectionEnabled: boolean;
}

const HeaderInfo: React.FC<Props> = ({
    from,
    to,
    flightNumber,
    aircraft,
    passengerCode,
    seatSelectionEnabled,
}) => {
    return (
        <Card style={{ marginBottom: 16 }}>
            <h2>Flight Information</h2>
            <p><strong>Route:</strong> {from} → {to}</p>
            <p><strong>Flight:</strong> {flightNumber}</p>
            <p><strong>Aircraft:</strong> {aircraft}</p>
            <h3 style={{ marginTop: 12 }}>Passenger</h3>
            <p><strong>Passenger Code:</strong> {passengerCode}</p>
            <p><strong>Seat Selection:</strong> {seatSelectionEnabled ? 'Enabled' : 'Disabled'}</p>
        </Card>
    );
};

export default HeaderInfo;
