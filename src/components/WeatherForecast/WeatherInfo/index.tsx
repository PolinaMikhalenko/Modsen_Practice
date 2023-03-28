import React from 'react';
import * as Styled from './styled';

export type WeatherInfoProps = {
  weekDay: string;
  temperature: number;
};

export function WeatherInfo({ weekDay, temperature }: WeatherInfoProps) {
  return (
    <Styled.WeatherInfo>
      <Styled.Div>{weekDay}</Styled.Div>
      <Styled.Div>{temperature}&deg;</Styled.Div>
    </Styled.WeatherInfo>
  );
}
