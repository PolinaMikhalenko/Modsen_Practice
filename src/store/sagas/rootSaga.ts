import { all } from 'redux-saga/effects';
import { dailyForecastSaga } from './dailyForecastSaga';

export default function* rootSaga() {
  yield all([dailyForecastSaga()]);
}
