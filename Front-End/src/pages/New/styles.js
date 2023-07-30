import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 3rem;

  > main {
    margin-top: 4rem;
  }
`;

export const Form = styled.form`
  margin-top: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  > h2 {
    font-size: 3.6rem;
  }

  > div:nth-of-type(1) {
    display: flex;
    gap: 4rem;
  }

  > div:nth-of-type(2) {

    span {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    .tags {
      margin-top: 2.4rem;

      display: flex;
      flex-wrap: wrap;
      gap: 2.4rem;

      border-radius: 8px;
      padding: 1.6rem;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

  > div:last-child {
    display: flex;
    gap: 4rem;

    button:first-child {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }
  }

  .buttons-wrap {
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

