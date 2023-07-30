import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: ${({ theme, $isnew }) => ($isnew === "true") ? "transparent" : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, $isnew }) => ($isnew === "true") ? `2px dashed ${theme.COLORS.GRAY_300}` : "none" };
  border-radius: 10px;

  padding: 1.6rem;

  > input {
    width: 12rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {
    font-size: 2.2rem;

    display: grid;
    place-content: center;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
`;