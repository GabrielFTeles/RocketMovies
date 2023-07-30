import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    margin-top: 4rem;

    .content {

      button {
        border: none;
        background: transparent;

        display: flex;
        align-items: center;
        gap: 0.8rem;

        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        margin-bottom: 2.4rem;
      }
    }
  }
`;

export const MovieInfos = styled.div`
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    margin-bottom: 2.4rem;

    h2 {
      display: flex;
      align-items: center;
      gap: 1.9rem;

      font-size: 3.6rem;
      font-weight: 500;
    }

    div {
      svg {
        font-size: 2rem;
      }
    }
  }

  > div:nth-child(2), div:nth-child(3) {
    display: flex;
    gap: 0.8rem;
  }

  > div:nth-child(2) {
    margin-bottom: 4rem;
  }

  > div:nth-child(3) {
    
  }
`;

export const MadeBy = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    height: 1.6rem;
    width: 1.6rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }
`;

export const CreatedAt = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
`;

export const MovieDescription = styled.div`
  margin-top: 4rem;

  text-align: justify;
  max-height: 40rem;
  overflow-y: auto;

  padding-right: 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    border-radius: 8px;
  }
`;