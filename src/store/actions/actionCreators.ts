import { createAction } from '@reduxjs/toolkit';
import {
  IDailyForecastApiResponse,
  IHourlyForecastApiResponse,
} from '../../interfaces/IForecastApiResponse';

export const getDailyWeatherForecastFulfilled =
  createAction<IDailyForecastApiResponse>(
    'WEATHER/GET_DAILY_FORECAST_FULFILLED'
  );

export const getDailyWeatherForecastPending = createAction<{
  latitude: number;
  longitude: number;
}>('WEATHER/GET_DAILY_FORECAST_PENDING');

export const getHourlyWeatherForecastFulfilled =
  createAction<IHourlyForecastApiResponse>('WEATHER/GET_HOURLY_FORECAST');

export const getSelectedLocation = createAction(
  'LOCATION/GET_SELECTED_LOCATION'
);
