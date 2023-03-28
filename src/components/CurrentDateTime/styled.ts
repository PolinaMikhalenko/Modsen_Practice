import styled from 'styled-components';

export const DateTime = styled.div`
  margin: 0 1rem;
`;

export const Time = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title}rem;
  margin-bottom: 0.5rem;
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle}rem;
`;
