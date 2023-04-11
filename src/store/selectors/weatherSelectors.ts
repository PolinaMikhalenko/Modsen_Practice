import { createSelector } from '@reduxjs/toolkit';
import { IDayWeather } from '../../interfaces/IDayWeather';
import { RootState } from '..';
import { getWeekDay } from '../../utils/dateFormattingFunctions';
import { weatherConditions } from '../../constants/weatherConditions';

export const selectDailyWeatherForecast = createSelector(
  (state: RootState) => state.weather.daysWeather?.daily,
  (daily) => {
    const arr: Array<IDayWeather> = [];

    daily?.time.forEach((time, index) => {
      const weatherCode = daily.weathercode[index];
      const temperature = Math.round(+daily.temperature_2m_max[index]);
      const date = new Date(time);
      const weekDayNumber = date.getDay();
      const currentWeekDayNumber = new Date().getDay();
      arr.push({
        weekDay:
          weekDayNumber === currentWeekDayNumber ? 'Today' : getWeekDay(date),
        icon: '',
        weatherCondition: weatherConditions.get(weatherCode),
        temperature,
      });
    });

    return arr;
  }
);
