/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import {
  getDailyWeatherForecast,
  getHourlyWeatherForecast,
  getSelectedLocation,
} from '../actions/actionCreators';

interface IDayWeather {
  weekDay: string;
  icon: string;
  temperature: number;
}

export interface IState {
  location: string;
  daysWeather: Array<IDayWeather>;
}

const initialState: IState = {
  location: '',
  daysWeather: [
    {
      weekDay: 'Today',
      icon: '',
      temperature: 0,
    },
  ],
};

export const weatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getDailyWeatherForecast, (state) => {
      state.daysWeather = [];
    })
    .addCase(getHourlyWeatherForecast, (state) => {
      state.daysWeather = [];
    })
    .addCase(getSelectedLocation, (state, action) => {
      state.location += action.payload;
    });
});
