import styled from 'styled-components';

export const StyledFlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem 1rem;
  height: 25vh;

  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledScrollSection = styled.section`
  height: 100%;
  overflow-y: auto;
  padding-right: 1rem;
`;
