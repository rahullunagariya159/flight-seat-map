// components/SeatMap/Legend.tsx
import React from 'react';
import styled from 'styled-components';

const LegendContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
    flex-wrap: wrap;
`;

const LegendItem = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    
    &::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: ${props => props.color};
        border-radius: 3px;
    }
`;

const Legend: React.FC = () => {
    return (
        <LegendContainer>
            <LegendItem color="#006747">Selected</LegendItem>
            <LegendItem color="#ffffff">Available</LegendItem>
            <LegendItem color="#e0e0e0">Occupied</LegendItem>
            <LegendItem color="#e6f7ff">Window</LegendItem>
            <LegendItem color="#fff7e6">Exit Row</LegendItem>
        </LegendContainer>
    );
};

export default Legend;