import React from 'react';
import { useSelector } from 'react-redux';
import { DayWeatherInfo } from './DayWeatherInfo';
import { RootState } from '../../../store';
import { StyledForecastSection } from '../../../styles/components';

export function DailyForecast() {
  const daysWeather = useSelector(
    (state: RootState) => state.weather.daysWeather
  );
  return (
    <StyledForecastSection>
      {daysWeather.map((item) => (
        <DayWeatherInfo
          weekDay={item.weekDay}
          icon={item.icon}
          temperature={item.temperature}
          key={item.weekDay}
        />
      ))}
    </StyledForecastSection>
  );
}
