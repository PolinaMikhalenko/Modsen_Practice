import { createSelector } from '@reduxjs/toolkit';
import { IDayWeather } from '../../interfaces/IDayWeather';
import { RootState } from '..';
import { formatDate, getWeekDay } from '../../utils/dateFormattingFunctions';
import { weatherConditions } from '../../constants/weatherConditions';
import { IHourWeather } from '../../interfaces/IHourWeather';

export const selectDailyWeatherForecast = createSelector(
  (state: RootState) => state.weather.daysWeather?.daily,
  (daily) => {
    const daysWeather: Array<IDayWeather> = [];

    daily?.time.forEach((time, index) => {
      const weatherCode = daily.weathercode[index];
      const temperature = Math.ceil(+daily.temperature_2m_max[index]);
      const date = new Date(time);
      const weekDayNumber = date.getDay();
      const currentWeekDayNumber = new Date().getDay();
      daysWeather.push({
        weekDay:
          weekDayNumber === currentWeekDayNumber ? 'Today' : getWeekDay(date),
        icon: '',
        weatherCondition: weatherConditions.get(weatherCode),
        temperature,
      });
    });

    return daysWeather;
  }
);

export const selectHourlyWeatherForecast = createSelector(
  (state: RootState) => state.weather.hourlyWeather?.hourly,
  (hourly) => {
    const hourlyWeather: Array<IHourWeather> = [];

    hourly?.time.forEach((time, index) => {
      const date = new Date(time);
      const weatherCode = hourly.weathercode[index];
      const temperature = Math.ceil(+hourly.temperature_2m[index]);
      hourlyWeather.push({
        date: formatDate(date),
        time: `${date.getHours().toString()}.00`,
        icon: '',
        weatherCondition: weatherConditions.get(weatherCode),
        temperature,
      });
    });

    return hourlyWeather;
  }
);
