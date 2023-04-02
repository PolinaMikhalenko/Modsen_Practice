import styled from 'styled-components';

export const WeatherForecast = styled.section``;

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export type ButtonProps = {
  light?: boolean;
};

export const Button = styled.div<ButtonProps>`
  text-align: center;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.transparentDark};
  color: ${({ light, theme }) => (light ? 'black' : theme.colors.white)};
  background-color: ${({ light, theme }) =>
    light ? theme.colors.transparentWhite : theme.colors.transparentDark};
`;
