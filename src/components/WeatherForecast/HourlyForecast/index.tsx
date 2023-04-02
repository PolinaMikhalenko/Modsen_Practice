import React from 'react';
import { HourWeatherInfo } from './HourWeatherInfo';
import { StyledForecastSection } from '../../../styles/components';

export function HourlyForecast() {
  return (
    <StyledForecastSection light>
      <HourWeatherInfo time="12.00" temperature={20} />
      <HourWeatherInfo time="12.00" temperature={20} />
      <HourWeatherInfo time="12.00" temperature={20} />
      <HourWeatherInfo time="12.00" temperature={20} />
      <HourWeatherInfo time="12.00" temperature={20} />
      <HourWeatherInfo time="12.00" temperature={20} />
    </StyledForecastSection>
  );
}
