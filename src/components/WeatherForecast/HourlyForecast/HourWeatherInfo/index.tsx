import React from 'react';
import { StyledWeatherInfo, StyledDiv } from '../../../../styles/components';

export type WeatherInfoProps = {
  time: string;
  temperature: number;
};

export function HourWeatherInfo({ time, temperature }: WeatherInfoProps) {
  return (
    <StyledWeatherInfo>
      <StyledDiv>{time}</StyledDiv>
      <StyledDiv>{temperature}&deg;</StyledDiv>
    </StyledWeatherInfo>
  );
}
