import React from 'react';
import { WeatherInfo } from '../WeatherInfo/index';
import { StyledForecastSection } from '../../../styles/components';

export function HourlyForecast() {
  return (
    <StyledForecastSection light>
      <WeatherInfo
        timePeriod="12.00"
        icon=""
        weatherCondition=""
        temperature={20}
      />
      <WeatherInfo
        timePeriod="12.00"
        icon=""
        weatherCondition=""
        temperature={20}
      />
      <WeatherInfo
        timePeriod="12.00"
        icon=""
        weatherCondition=""
        temperature={20}
      />
      <WeatherInfo
        timePeriod="12.00"
        icon=""
        weatherCondition=""
        temperature={20}
      />
      <WeatherInfo
        timePeriod="12.00"
        icon=""
        weatherCondition=""
        temperature={20}
      />
      <WeatherInfo
        timePeriod="12.00"
        icon=""
        weatherCondition=""
        temperature={20}
      />
      <WeatherInfo
        timePeriod="12.00"
        icon=""
        weatherCondition=""
        temperature={20}
      />
    </StyledForecastSection>
  );
}
