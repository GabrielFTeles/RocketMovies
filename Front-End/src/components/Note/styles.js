import styled from 'styled-components';

export const Container = styled.li`
  > button {
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 100%;

    cursor: pointer;

    border-radius: 16px;
    border: none;

    padding: 3.2rem;

    background: ${({ theme }) => theme.COLORS.NOTE_BACKGROUND};

    h2 {
      font-size: 2.4rem;
      margin-bottom: 0.8rem;
    }

    div:nth-of-type(1) {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${({ theme }) => theme.COLORS.GRAY_200};

      margin-bottom: 2rem;
    }

    div:last-child {
      display: flex;
      gap: 0.8rem;

      span {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      }
    }
  }
`;