import React from 'react';
import { StyledWeatherInfo, StyledDiv } from '../../../../styles/components';

export type WeatherInfoProps = {
  weekDay: string;
  icon: string;
  temperature: number;
};

export function DayWeatherInfo({
  weekDay,
  icon,
  temperature,
}: WeatherInfoProps) {
  return (
    <StyledWeatherInfo>
      <StyledDiv>{weekDay}</StyledDiv>
      <StyledDiv>{temperature}&deg;</StyledDiv>
    </StyledWeatherInfo>
  );
}
