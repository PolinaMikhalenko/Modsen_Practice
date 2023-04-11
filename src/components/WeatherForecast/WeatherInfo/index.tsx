import React from 'react';
import { StyledWeatherInfo, StyledDiv } from '../../../styles/components';

export type WeatherInfoProps = {
  timePeriod: string;
  icon: string;
  weatherCondition: string | undefined;
  temperature: number;
};

export function WeatherInfo({
  timePeriod,
  icon,
  weatherCondition,
  temperature,
}: WeatherInfoProps) {
  return (
    <StyledWeatherInfo>
      <StyledDiv>{timePeriod}</StyledDiv>
      <StyledDiv>{weatherCondition}</StyledDiv>
      <StyledDiv>{temperature}&deg;</StyledDiv>
    </StyledWeatherInfo>
  );
}
