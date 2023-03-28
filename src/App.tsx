import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { baseTheme } from './styles/theme';
import { StyledFlexRow, StyledScrollSection } from './styles/components';
import { AppLayout } from './layouts/AppLayout';
import { CurrentDateTime } from './components/CurrentDateTime';
import { WeatherForecast } from './components/WeatherForecast';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <AppLayout>
        <StyledFlexRow>
          <CurrentDateTime />
          <div>City</div>
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
