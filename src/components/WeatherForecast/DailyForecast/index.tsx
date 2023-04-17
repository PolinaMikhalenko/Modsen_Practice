import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { WeatherInfo } from '../WeatherInfo/index';
import { RootState } from '../../../store';
import { StyledForecastSection } from '../../../styles/components';
import { selectDailyWeatherForecast } from '../../../store/selectors/weatherSelectors';

export function DailyForecast() {
  const daysWeather = useSelector((state: RootState) =>
    selectDailyWeatherForecast(state)
  );
  return (
    <StyledForecastSection>
      {daysWeather.map(({ weekDay, icon, weatherCondition, temperature }) => (
        <WeatherInfo
          timePeriod={weekDay}
          icon={icon}
          weatherCondition={weatherCondition}
          temperature={temperature}
          key={nanoid()}
        />
      ))}
    </StyledForecastSection>
  );
}
