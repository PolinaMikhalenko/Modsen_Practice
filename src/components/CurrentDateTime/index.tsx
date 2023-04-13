import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { formatDate } from '../../utils/dateFormattingFunctions';

export function CurrentDateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styled.DateTime>
      <Styled.Time>{date.toLocaleTimeString()}</Styled.Time>
      <Styled.Date>{formatDate(date)}</Styled.Date>
    </Styled.DateTime>
  );
}
