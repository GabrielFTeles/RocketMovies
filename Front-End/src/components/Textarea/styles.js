import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  padding: 1.9rem 1.6rem;

  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;