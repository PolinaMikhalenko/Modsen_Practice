import { all } from 'redux-saga/effects';
import { dailyForecastSaga } from './dailyForecastSaga';
import { hourlyForecastSaga } from './hourlyForecastSaga';

export default function* rootSaga() {
  yield all([dailyForecastSaga(), hourlyForecastSaga()]);
}
