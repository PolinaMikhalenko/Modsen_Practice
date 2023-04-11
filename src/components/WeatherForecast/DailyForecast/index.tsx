import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { WeatherInfo } from '../WeatherInfo/index';
import { RootState } from '../../../store';
import { StyledForecastSection } from '../../../styles/components';
import { selectDailyWeatherForecast } from '../../../store/selectors/dailyWeatherForecastSelector';

export function DailyForecast() {
  const daysWeather = useSelector((state: RootState) =>
    selectDailyWeatherForecast(state)
  );
  return (
    <StyledForecastSection>
      {daysWeather.map((item) => (
        <WeatherInfo
          timePeriod={item.weekDay}
          icon={item.icon}
          weatherCondition={item.weatherCondition}
          temperature={item.temperature}
          key={nanoid()}
        />
      ))}
    </StyledForecastSection>
  );
}
