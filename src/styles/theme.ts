import { ITheme } from '../interfaces/ITheme';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const baseTheme: ITheme = {
  colors: {
    white: '#fff',
    gray: '#888',
    transparentWhite: '#ffffff70',
    transparentDark: '#23232390',
  },

  fontSizes: {
    regular: 1.3,
    small: 1,
    title: 3.5,
    subtitle: 1.6,
    button: 1.2,
  },

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
};
