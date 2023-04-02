export const getForecast = async () => {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=53.9168&longitude=30.3449&forecast_days=7&timezone=auto&daily=temperature_2m_max,weathercode'
  );

  return response.json();
};
