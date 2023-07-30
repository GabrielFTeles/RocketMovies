import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  overflow: hidden;

  border-radius: 10px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > input {
    height: 100%;
    width: 100%;

    padding-inline: 1.6rem;

    border: none;

    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  
  svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;