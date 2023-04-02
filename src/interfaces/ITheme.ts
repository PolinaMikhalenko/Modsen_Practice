export interface ITheme {
  colors: {
    white: string;
    gray: string;
    transparentWhite: string;
    transparentDark: string;
  };

  fontSizes: {
    regular: number;
    small: number;
    title: number;
    subtitle: number;
    button: number;
  };

  device: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
  };
}
