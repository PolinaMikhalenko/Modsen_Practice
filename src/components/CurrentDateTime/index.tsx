import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { getWeekDay, getMonth } from '../../utils/dateFormattingFunctions';

export function CurrentDateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const weekDay = getWeekDay(date);
  const day = date.getDate();
  const month = getMonth(date);
  const year = date.getFullYear();

  return (
    <Styled.DateTime>
      <Styled.Time>{date.toLocaleTimeString()}</Styled.Time>
      <Styled.Date>{`${weekDay}, ${day} ${month} ${year}`}</Styled.Date>
    </Styled.DateTime>
  );
}
