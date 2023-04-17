import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { WeatherInfo } from '../WeatherInfo/index';
import { RootState } from '../../../store';
import { StyledForecastSection } from '../../../styles/components';
import { selectHourlyWeatherForecast } from '../../../store/selectors/weatherSelectors';
import * as Styled from './styled';
import { IHourWeather } from '../../../interfaces/IHourWeather';

export function HourlyForecast() {
  const hourlyWeatherForecast = useSelector((state: RootState) =>
    selectHourlyWeatherForecast(state)
  );

  const dates = new Set(hourlyWeatherForecast.map(({ date }) => date));
  const daysWithHourlyForecast: Map<string, Array<IHourWeather>> = new Map();

  dates.forEach((date) => {
    const weather = hourlyWeatherForecast.filter((item) => item.date === date);
    daysWithHourlyForecast.set(date, weather);
  });

  const hourlyForecast: JSX.Element[] = [];
  dates.forEach((date) => {
    const hourlyForecastForDay: JSX.Element[] = [];
    daysWithHourlyForecast
      .get(date)
      ?.forEach(({ time, icon, weatherCondition, temperature }) => {
        hourlyForecastForDay.push(
          <WeatherInfo
            timePeriod={time}
            icon={icon}
            weatherCondition={weatherCondition}
            temperature={temperature}
            key={nanoid()}
          />
        );
      });

    hourlyForecast.push(
      <Styled.HourlyForecastForDay key={nanoid()}>
        <Styled.Date>{date}</Styled.Date>
        {hourlyForecastForDay}
      </Styled.HourlyForecastForDay>
    );
  });

  return (
    <StyledForecastSection light>
      <Styled.HourlyForecastSection>
        {hourlyForecast}
      </Styled.HourlyForecastSection>
    </StyledForecastSection>
  );
}
