import React, { useState } from 'react';
import * as Styled from './styled';
import { DailyForecast } from './DailyForecast';
import { HourlyForecast } from './HourlyForecast';

export function WeatherForecast() {
  const [dailyForecast, setDailyForecast] = useState(true);

  const handleClickOfDaysButton = () => {
    setDailyForecast(true);
  };

  const handleClickOfHoursButton = () => {
    setDailyForecast(false);
  };

  const forecast = dailyForecast ? <DailyForecast /> : <HourlyForecast />;
  return (
    <Styled.WeatherForecast>
      <Styled.ButtonsSection>
        <Styled.Button onClick={handleClickOfDaysButton}>DAYS</Styled.Button>
        <Styled.Button light onClick={handleClickOfHoursButton}>
          HOURS
        </Styled.Button>
      </Styled.ButtonsSection>
      {forecast}
    </Styled.WeatherForecast>
  );
}
