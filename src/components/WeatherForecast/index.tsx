import React from 'react';
import * as Styled from './styled';
import { WeatherInfo } from './WeatherInfo';

export function WeatherForecast() {
  return (
    <Styled.WeatherForecast>
      <Styled.ButtonsSection>
        <Styled.Button active>DAYS</Styled.Button>
        <Styled.Button>HOURS</Styled.Button>
      </Styled.ButtonsSection>

      <Styled.ForecastSection>
        <WeatherInfo weekDay="Su" temperature={20} />
        <WeatherInfo weekDay="Mo" temperature={20} />
        <WeatherInfo weekDay="Tu" temperature={20} />
        <WeatherInfo weekDay="We" temperature={20} />
        <WeatherInfo weekDay="Th" temperature={20} />
        <WeatherInfo weekDay="Fr" temperature={20} />
        <WeatherInfo weekDay="Sa" temperature={20} />
      </Styled.ForecastSection>
    </Styled.WeatherForecast>
  );
}
