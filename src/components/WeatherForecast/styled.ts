import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const WeatherForecast = styled.section``;

export const ForecastSection = styled.div`
  height: 100%;
  padding: 1.5rem;
  border-radius: 2rem;
  border-top-right-radius: 0;
  background-color: ${({ theme }) => theme.colors.transparentDark};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export type ButtonProps = {
  active?: boolean;
};

export const Button = styled.div<ButtonProps>`
  text-align: center;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.transparentDark};
  color: ${({ active, theme }) => (active ? theme.colors.white : 'black')};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.transparentDark : theme.colors.transparentWhite};
`;
