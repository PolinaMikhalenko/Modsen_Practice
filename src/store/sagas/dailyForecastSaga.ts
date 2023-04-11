import { PayloadAction } from '@reduxjs/toolkit';
import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { getForecast } from '../../api/weatherAPI';
import {
  getDailyWeatherForecastPending,
  getDailyWeatherForecastFulfilled,
} from '../actions/actionCreators';
import { IDailyForecastApiResponse } from '../../interfaces/IForecastApiResponse';

export function* fetchDailyForecast(
  action: PayloadAction<{ latitude: number; longitude: number }>
): Generator<CallEffect | PutEffect, void, IDailyForecastApiResponse> {
  const dailyForecast: IDailyForecastApiResponse = yield call(
    getForecast,
    action.payload
  );

  yield put(getDailyWeatherForecastFulfilled(dailyForecast));
}

export function* dailyForecastSaga() {
  yield takeEvery(getDailyWeatherForecastPending.type, fetchDailyForecast);
}
