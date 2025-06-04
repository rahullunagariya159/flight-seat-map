// components/SeatMap/SeatMap.tsx
import React, { useState, useMemo } from 'react';
import seatData from '../../data/seatMap.json';
import SeatRow from './SeatRow';
import {
    StyledSeatMapContainer,
    AircraftOutline,
    CabinSection,
    CabinLabel,
    ExitRow,
    ExitSign,
    WingIndicator
} from './styles';
import SummaryPanel from './SummaryPanel';
import Legend from './Legend';

interface SeatInfo {
    code?: string;
    available: boolean;
    total?: { alternatives: { amount: number; currency: string }[][] };
    type?: 'window' | 'middle' | 'aisle' | 'exit';
}

const SeatMap: React.FC = () => {
    const rows = seatData.seatsItineraryParts[0]?.segmentSeatMaps[0]?.passengerSeatMaps[0]?.seatMap?.cabins[0]?.seatRows ?? [];
    const [selectedSeats, setSelectedSeats] = useState<SeatInfo[]>([]);

    // Split rows into cabin classes (you'll need to adjust these based on your actual data)
    const { firstClassRows, businessClassRows, economyClassRows } = useMemo(() => {
        return {
            firstClassRows: rows.slice(0, 4),    // Adjust indices based on your data
            businessClassRows: rows.slice(4, 12), // Adjust indices based on your data
            economyClassRows: rows.slice(12)      // The rest are economy
        };
    }, [rows]);

    const toggleSeat = (seat: SeatInfo) => {
        if (!seat.code || !seat.available) return;
        setSelectedSeats(prev =>
            prev.some(s => s.code === seat.code)
                ? prev.filter(s => s.code !== seat.code)
                : [...prev, seat]
        );
    };

    // Determine exit rows (adjust based on your data)
    const exitRowNumbers = [14, 30]; // Example exit row numbers

    return (
        <StyledSeatMapContainer>
            <AircraftOutline>
                <Legend />
                {/* First Class Section */}
                <CabinSection className="first-class">
                    <CabinLabel>First Class</CabinLabel>
                    {firstClassRows.map((row, index) => (
                        <SeatRow
                            key={`first-${index}`}
                            rowNumber={row.rowNumber}
                            seats={row.seats}
                            selectedSeats={selectedSeats}
                            onSeatClick={toggleSeat}
                            cabinType="first"
                        />
                    ))}
                </CabinSection>

                {/* Business Class Section */}
                <CabinSection className="business-class">
                    <CabinLabel>Business Class</CabinLabel>
                    {businessClassRows.map((row, index) => (
                        <SeatRow
                            key={`business-${index}`}
                            rowNumber={row.rowNumber}
                            seats={row.seats}
                            selectedSeats={selectedSeats}
                            onSeatClick={toggleSeat}
                            cabinType="business"
                            isExitRow={exitRowNumbers.includes(row.rowNumber)}
                        />
                    ))}
                </CabinSection>

                {/* Wing Indicator */}
                <WingIndicator>
                    <span>Wing</span>
                </WingIndicator>

                {/* Economy Class Section */}
                <CabinSection className="economy-class">
                    <CabinLabel>Economy Class</CabinLabel>
                    {economyClassRows.map((row, index) => {
                        const isExitRow = exitRowNumbers.includes(row.rowNumber);
                        return (
                            <React.Fragment key={`economy-${index}`}>
                                {isExitRow && (
                                    <ExitRow>
                                        <ExitSign>Exit</ExitSign>
                                    </ExitRow>
                                )}
                                <SeatRow
                                    rowNumber={row.rowNumber}
                                    seats={row.seats}
                                    selectedSeats={selectedSeats}
                                    onSeatClick={toggleSeat}
                                    cabinType="economy"
                                    isExitRow={isExitRow}
                                />
                            </React.Fragment>
                        );
                    })}
                </CabinSection>
            </AircraftOutline>
            <SummaryPanel selectedSeats={selectedSeats} />
        </StyledSeatMapContainer>
    );
};

export default SeatMap;