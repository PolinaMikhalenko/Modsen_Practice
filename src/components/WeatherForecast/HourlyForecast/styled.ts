import styled, { css } from 'styled-components';

const media = css`
  flex-direction: column;
  align-items: center;
`;

export const HourlyForecastForDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  @media ${({ theme }) => theme.device.mobileL} {
    ${media}
  }
`;

export const HourlyForecastSection = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  @media ${({ theme }) => theme.device.mobileL} {
    ${media}
  }
`;

export const Date = styled.span`
  padding: 0 1.3rem;
  font-weight: 500;
  align-self: center;
  white-space: normal;
  text-align: center;
`;
