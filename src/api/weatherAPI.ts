import {
  IDailyForecastApiResponse,
  IHourlyForecastApiResponse,
} from '../interfaces/IForecastApiResponse';

export const getDailyForecast = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<IDailyForecastApiResponse> => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=7&timezone=auto&daily=temperature_2m_max,weathercode`
  );

  return response.json().then((data) => data as IDailyForecastApiResponse);
};

export const getHourlyForecast = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<IHourlyForecastApiResponse> => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode`
  );

  return response.json().then((data) => data as IHourlyForecastApiResponse);
};
