import styled from 'styled-components';

export const Container = styled.header`
  padding-block: 2.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    > div:nth-of-type(1) {
      width: min(100%, 60rem);
    }

    h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }

    input {
      font-size: 1.4rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    text-align: right;

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      background: transparent;
      border: none;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }
`;
