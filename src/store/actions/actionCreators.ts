import { createAction } from '@reduxjs/toolkit';

export const getDailyWeatherForecast = createAction(
  'WEATHER/GET_DAILY_FORECAST'
);

export const getHourlyWeatherForecast = createAction(
  'WEATHER/GET_HOURLY_FORECAST'
);

export const getSelectedLocation = createAction(
  'LOCATION/GET_SELECTED_LOCATION'
);
