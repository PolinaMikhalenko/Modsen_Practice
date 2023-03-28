import styled from 'styled-components';
import backgroundImage from '../../assets/backgroundImages/cloud.jpg';

export const AppLayout = styled.section`
  background: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.regular}rem;
`;
