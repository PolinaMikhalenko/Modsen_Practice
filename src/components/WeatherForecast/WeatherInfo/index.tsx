import React from 'react';
import * as Styled from './styled';

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
    <Styled.WeatherInfo>
      <div>{timePeriod}</div>
      <div>{weatherCondition}</div>
      <div>{temperature}&deg;</div>
    </Styled.WeatherInfo>
  );
}
