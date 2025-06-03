// components/SeatMap/styles.ts
import styled from 'styled-components';

export const StyledSeatMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 16px;
  overflow-x: auto;
  max-width: 100vw;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const StyledSeatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;

  div:first-child {
    width: 32px;
    text-align: right;
    font-weight: bold;
    margin-right: 6px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const StyledSeat = styled.div<{
    $available: boolean;
    $selected: boolean;
}>`
    width: 48px;
    height: 48px;
    background-color: ${({ $available, $selected }) =>
        $selected ? '#1890ff' : $available ? '#52c41a' : '#d9d9d9'};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    cursor: ${({ $available }) => ($available ? 'pointer' : 'not-allowed')};
    border: ${({ $selected }) => ($selected ? '2px solid #096dd9' : 'none')};
    transition: background-color 0.3s, border 0.3s;
  
    &:hover {
      background-color: ${({ $available, $selected }) =>
        $selected ? '#40a9ff' : $available ? '#389e0d' : '#bfbfbf'};
    }
  
    @media (max-width: 768px) {
      width: 38px;
      height: 38px;
      font-size: 12px;
    }
  
    @media (max-width: 480px) {
      width: 32px;
      height: 32px;
      font-size: 10px;
    }
  `;
