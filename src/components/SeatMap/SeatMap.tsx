// components/SeatMap/SeatMap.tsx
import React, { useState } from 'react';
import seatData from '../../data/seatMap.json';
import SeatRow from './SeatRow';
import { StyledSeatMapContainer } from './styles';
import SummaryPanel from './SummaryPanel';
import HeaderInfo from './HeaderInfo';

interface SeatInfo {
    code?: string;
    available: boolean;
    total?: { alternatives: { amount: number; currency: string }[][] };
}

const SeatMap: React.FC = () => {
    const rows =
        seatData.seatsItineraryParts[0]?.segmentSeatMaps[0]?.passengerSeatMaps[0]?.seatMap?.cabins[0]
            ?.seatRows ?? [];
    const itinerary = seatData.seatsItineraryParts[0];
    const segment = itinerary.segmentSeatMaps[0].segment;
    const passenger = itinerary.segmentSeatMaps[0].passengerSeatMaps[0];
    const seatMap = passenger.seatMap;

    const [selectedSeats, setSelectedSeats] = useState<SeatInfo[]>([]);

    const toggleSeat = (seat: SeatInfo) => {
        if (!seat.code) return;
        setSelectedSeats((prev) =>
            prev.find((s) => s.code === seat.code)
                ? prev.filter((s) => s.code !== seat.code)
                : [...prev, seat]
        );
    };

    return (
        <>
            {/* <HeaderInfo
                from={segment.departure}
                to={segment.arrival}
                flightNumber={segment.flight.flightNumber.toString()}
                aircraft={seatMap.aircraft}
                passengerCode={itinerary.segmentSeatMaps[0].passengerSeatMaps[0].passenger.passengerIndex.toString()}
                seatSelectionEnabled={passenger.seatSelectionEnabledForPax}
            /> */}
            <StyledSeatMapContainer>
                {rows.map((row, rowIndex) => (
                    <SeatRow
                        key={rowIndex}
                        rowNumber={row.rowNumber}
                        seats={row.seats}
                        selectedSeats={selectedSeats}
                        onSeatClick={toggleSeat}
                    />
                ))}
            </StyledSeatMapContainer>
            <SummaryPanel selectedSeats={selectedSeats} />
        </>
    );
};

export default SeatMap;
