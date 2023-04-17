import styled from 'styled-components';

export const StyledFlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem 1rem;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

export const StyledScrollSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: auto;
  padding-right: 1rem;
  max-height: 25vh;
`;

export type StyledForecastSectionProps = {
  light?: boolean;
  column?: boolean;
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
  justify-content: space-between;
  overflow-x: auto;
  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;
