import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { WeatherInfo } from '../WeatherInfo/index';
import { RootState } from '../../../store';
import { StyledForecastSection } from '../../../styles/components';
import { selectHourlyWeatherForecast } from '../../../store/selectors/weatherSelectors';
import * as Styled from './styled';

export function HourlyForecast() {
  const hourlyWeather = useSelector((state: RootState) =>
    selectHourlyWeatherForecast(state)
  );

  const days: JSX.Element[] = [];
  const hourlyWeatherOfDay: JSX.Element[] = [];
  let previousDate = '';

  hourlyWeather.forEach((item) => {
    if (previousDate === item.date) {
      hourlyWeatherOfDay.push(
        <WeatherInfo
          timePeriod={item.time}
          icon={item.icon}
          weatherCondition={item.weatherCondition}
          temperature={item.temperature}
          key={nanoid()}
        />
      );
    } else {
      previousDate = item.date;
      days.push(
        <Styled.HourlyWeatherSection key={nanoid()}>
          <b>{item.date}</b>
          <Styled.HourlyWeatherOfDay>
            {hourlyWeatherOfDay}
          </Styled.HourlyWeatherOfDay>
        </Styled.HourlyWeatherSection>
      );
      hourlyWeatherOfDay.length = 0;
    }
  });

  return (
    <StyledForecastSection light column>
      {days}
    </StyledForecastSection>
  );
}
