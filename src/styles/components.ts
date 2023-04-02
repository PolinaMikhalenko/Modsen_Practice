import styled from 'styled-components';

export const StyledFlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem 1rem;
  height: 25%;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

export const StyledScrollSection = styled.section`
  overflow-y: auto;
  padding-right: 1rem;
`;

export type StyledForecastSectionProps = {
  light?: boolean;
};

export const StyledForecastSection = styled.div<StyledForecastSectionProps>`
  height: 100%;
  padding: 1rem;
  border-radius: 2rem;
  border-top-right-radius: 0;
  background-color: ${({ light, theme }) =>
    light ? theme.colors.transparentWhite : theme.colors.transparentDark};
  color: ${({ light, theme }) => (light ? 'black' : theme.colors.white)};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledWeatherInfo = styled.div`
  padding: 0 1rem;
  text-align: center;
`;

export const StyledDiv = styled.div`
  margin: 0.5rem 0;
`;
