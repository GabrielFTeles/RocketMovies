import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  gap: 1rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
`;