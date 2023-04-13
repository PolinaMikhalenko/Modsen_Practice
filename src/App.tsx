import { ThemeProvider } from 'styled-components';
import React from 'react';
import { useDispatch } from 'react-redux';
import GlobalStyle from './styles/globalStyles';
import { baseTheme } from './styles/theme';
import { StyledFlexRow, StyledScrollSection } from './styles/components';
import { AppLayout } from './layouts/AppLayout';
import { CurrentDateTime } from './components/CurrentDateTime';
import { CitySelector } from './components/CitySelector';
import { WeatherForecast } from './components/WeatherForecast';
import {
  getDailyWeatherForecastPending,
  getHourlyWeatherForecastPending,
} from './store/actions/actionCreators';

function App() {
  const dispatch = useDispatch();
  dispatch(
    getDailyWeatherForecastPending({ latitude: 53.9168, longitude: 30.3449 })
  );

  dispatch(
    getHourlyWeatherForecastPending({ latitude: 53.9168, longitude: 30.3449 })
  );

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <AppLayout>
        <StyledFlexRow>
          <CurrentDateTime />
          <CitySelector />
        </StyledFlexRow>
        <StyledFlexRow>
          <StyledScrollSection>
            <div>1. event</div>
            <div>2. event</div>
            <div>3. event</div>
            <div>4. event</div>
            <div>5. event</div>
          </StyledScrollSection>
        </StyledFlexRow>
        <WeatherForecast />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
