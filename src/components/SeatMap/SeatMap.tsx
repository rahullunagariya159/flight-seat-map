// components/SeatMap/SeatMap.tsx
import React from 'react';
import seatData from '../../data/seatMap.json';
import SeatRow from './SeatRow';
import { StyledSeatMapContainer } from './styles';

const SeatMap: React.FC = () => {
    const rows =
        seatData.seatsItineraryParts[0]?.segmentSeatMaps[0]?.passengerSeatMaps[0]?.seatMap?.cabins[0]
            ?.seatRows ?? [];

    return (
        <StyledSeatMapContainer>
            {rows.map((row, index) => (
                <SeatRow key={index} rowNumber={row.rowNumber} seats={row.seats} />
            ))}
        </StyledSeatMapContainer>
    );
};

export default SeatMap;
