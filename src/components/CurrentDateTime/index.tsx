import React from 'react';
import * as Styled from './styled';

export function CurrentDateTime() {
  return (
    <Styled.DateTime>
      <Styled.Time>21:17</Styled.Time>
      <Styled.Date>27.03.2023</Styled.Date>
    </Styled.DateTime>
  );
}
