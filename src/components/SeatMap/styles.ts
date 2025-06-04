// components/SeatMap/styles.ts
import styled from 'styled-components';

// Common seat styles
export const StyledSeat = styled.div<{
    $available: boolean;
    $selected: boolean;
    $type?: 'window' | 'middle' | 'aisle' | 'exit';
}>`
    width: 30px;
    height: 30px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: ${props => props.$available ? 'pointer' : 'not-allowed'};
    background-color: ${props => {
        if (props.$selected) return '#006747'; // Qatar Airways green
        if (!props.$available) return '#e0e0e0';
        return '#ffffff';
    }};
    color: ${props => props.$selected ? '#ffffff' : '#333333'};
    border: 1px solid #cccccc;
    font-size: 10px;
    font-weight: bold;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
        transform: ${props => props.$available ? 'scale(1.1)' : 'none'};
        z-index: 1;
    }

    /* Different seat types */
    ${props => props.$type === 'window' && `
        background-color: ${props.$selected ? '#006747' : '#e6f7ff'};
    `}

    ${props => props.$type === 'exit' && `
        background-color: ${props.$selected ? '#006747' : '#fff7e6'};
        border: 1px dashed #ffa940;
    `}
`;

// Aircraft outline
export const AircraftOutline = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f5f5f5;
    border-radius: 15px;
    padding: 20px;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// Cabin section
export const CabinSection = styled.div`
    margin: 20px 0;
    position: relative;
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &.first-class {
        border-top: 3px solid #722ed1;
    }

    &.business-class {
        border-top: 3px solid #1890ff;
    }

    &.economy-class {
        border-top: 3px solid #52c41a;
    }
`;

// Cabin label
export const CabinLabel = styled.div`
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
    font-size: 16px;
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 1px solid #f0f0f0;
`;

// Exit row
export const ExitRow = styled.div`
    width: 100%;
    height: 40px;
    background-color: #fff7e6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    border-radius: 4px;
    font-weight: bold;
    color: #d46b08;
    border: 1px dashed #ffbb96;
`;

// Exit sign
export const ExitSign = styled.span`
    background-color: #ff4d4f;
    color: white;
    padding: 2px 10px;
    border-radius: 4px;
    font-size: 12px;
    margin-left: 10px;
    text-transform: uppercase;
    font-weight: bold;
`;

// Wing indicator
export const WingIndicator = styled.div`
    width: 100%;
    height: 60px;
    background: linear-gradient(to bottom, #e6e6e6, #f5f5f5);
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-style: italic;
    color: #666;
    border-radius: 8px;

    &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 40%;
        height: 2px;
        background-color: #999;
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }

    span {
        background: white;
        padding: 0 15px;
        position: relative;
        z-index: 1;
        font-weight: bold;
    }
`;

// Seat row container
export const StyledSeatRow = styled.div<{ $isExitRow?: boolean }>`
    display: flex;
    align-items: center;
    margin: 5px 0;
    padding: 5px;
    background: ${props => props.$isExitRow ? '#fffaf0' : 'transparent'};
    border-radius: 4px;
    position: relative;

    &:hover {
        background-color: #f9f9f9;
    }

    .row-number {
        width: 30px;
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        color: #666;
    }

    .seats {
        display: flex;
        flex: 1;
    }

    .aisle {
        width: 40px;
    }
`;

// Main container
export const StyledSeatMapContainer = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;