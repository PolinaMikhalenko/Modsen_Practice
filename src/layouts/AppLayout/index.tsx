import React from 'react';
import * as Styled from './styled';

export type AppLayoutProps = {
  children?: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps): JSX.Element {
  return <Styled.AppLayout>{children}</Styled.AppLayout>;
}
