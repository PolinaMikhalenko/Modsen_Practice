/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import {
  getDailyWeatherForecastPending,
  getDailyWeatherForecastFulfilled,
  getHourlyWeatherForecastPending,
  getHourlyWeatherForecastFulfilled,
  getSelectedLocation,
} from '../actions/actionCreators';

import {
  IDailyForecastApiResponse,
  IHourlyForecastApiResponse,
} from '../../interfaces/IForecastApiResponse';

export interface IState {
  location: string;
  daysWeather: IDailyForecastApiResponse | null;
  hourlyWeather: IHourlyForecastApiResponse | null;
}

const initialState: IState = {
  location: '',
  daysWeather: null,
  hourlyWeather: null,
};

export const weatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getDailyWeatherForecastPending, () => {})

    .addCase(getDailyWeatherForecastFulfilled, (state, action) => {
      state.daysWeather = action.payload;
    })

    .addCase(getHourlyWeatherForecastPending, () => {})

    .addCase(getHourlyWeatherForecastFulfilled, (state, action) => {
      state.hourlyWeather = action.payload;
    })

    .addCase(getSelectedLocation, (state) => {
      state.location = '';
    });
});
