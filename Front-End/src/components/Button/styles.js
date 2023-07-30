import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5.6rem;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

  border: none;
  border-radius: 10px;
`;