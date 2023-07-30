import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  word-break: break-all;
  background: ${({ theme }) => theme.COLORS.NOTE_BACKGROUND};
`;