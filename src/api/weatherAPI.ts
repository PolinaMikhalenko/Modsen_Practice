import { IDailyForecastApiResponse } from '../interfaces/IForecastApiResponse';

export const getForecast = async ({
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
