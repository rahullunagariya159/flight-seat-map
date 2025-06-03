// components/SeatMap/SummaryPanel.tsx
import React from 'react';
import { Card, List } from 'antd';

interface Price {
    amount: number;
    currency: string;
}

interface SeatInfo {
    code?: string;
    total?: { alternatives: Price[][] };
}

interface Props {
    selectedSeats: SeatInfo[];
}

const SummaryPanel: React.FC<Props> = ({ selectedSeats }) => {
    const total = selectedSeats.reduce((acc, seat) => {
        const price = seat.total?.alternatives?.[0]?.[0]?.amount ?? 0;
        return acc + price;
    }, 0);

    const currency = selectedSeats[0]?.total?.alternatives?.[0]?.[0]?.currency ?? 'MYR';

    return (
        <Card title="Selected Seats Summary" style={{ marginTop: 16, maxWidth: 400, marginInline: 'auto' }}>
            <List
                dataSource={selectedSeats}
                renderItem={(seat) => (
                    <List.Item>
                        Seat {seat.code} — {seat.total?.alternatives?.[0]?.[0]?.amount} {currency}
                    </List.Item>
                )}
            />
            <h3 style={{ textAlign: 'right' }}>Total: {total} {currency}</h3>
        </Card>
    );
};

export default SummaryPanel;
