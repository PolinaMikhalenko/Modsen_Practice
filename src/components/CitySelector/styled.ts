import styled from 'styled-components';

export const Input = styled.input`
  text-decoration-line: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  border: none;
  border-radius: 1rem;
  width: 18rem;
  padding: 1rem;
  margin: 1rem 0;
  font-size: ${({ theme }) => theme.fontSizes.regular}rem;
`;
