export interface IDailyForecastApiResponse extends IOpenMeteoApiParameters {
  daily_units: {
    time: string;
    temperature_2m_max: string;
    weathercode: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    weathercode: number[];
  };
}

export interface IHourlyForecastApiResponse extends IOpenMeteoApiParameters {
  hourly_units: {
    time: string;
    temperature_2m: string;
    weathercode: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weathercode: number[];
  };
}

interface IOpenMeteoApiParameters {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
}
