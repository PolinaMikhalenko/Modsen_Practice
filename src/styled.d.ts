import { ITheme } from './interfaces/ITheme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
