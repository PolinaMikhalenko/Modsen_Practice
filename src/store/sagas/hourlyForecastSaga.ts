import { PayloadAction } from '@reduxjs/toolkit';
import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { getHourlyForecast } from '../../api/weatherAPI';
import {
  getHourlyWeatherForecastPending,
  getHourlyWeatherForecastFulfilled,
} from '../actions/actionCreators';
import { IHourlyForecastApiResponse } from '../../interfaces/IForecastApiResponse';

export function* fetchHourlyForecast(
  action: PayloadAction<{ latitude: number; longitude: number }>
): Generator<CallEffect | PutEffect, void, IHourlyForecastApiResponse> {
  const hourlyForecast: IHourlyForecastApiResponse = yield call(
    getHourlyForecast,
    action.payload
  );

  yield put(getHourlyWeatherForecastFulfilled(hourlyForecast));
}

export function* hourlyForecastSaga() {
  yield takeEvery(getHourlyWeatherForecastPending.type, fetchHourlyForecast);
}
