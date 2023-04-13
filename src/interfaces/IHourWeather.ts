export interface IHourWeather {
  date: string;
  time: string;
  icon: string;
  weatherCondition: string | undefined;
  temperature: number;
}
