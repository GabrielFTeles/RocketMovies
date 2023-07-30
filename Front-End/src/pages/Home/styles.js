import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 2rem;

  > main {
    margin-top: 5rem;

    .content {
      div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
          font-size: 3.2rem;
          font-weight: 400;
        }
  
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;

          color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

          background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

          border-radius: 8px;
  
          height: 4.8rem;
          width: min(100%, 20.7rem);

          svg {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  max-height: 65rem;

  padding-right: 1rem;
  margin-top: 3.5rem;
  
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    border-radius: 8px;
  }
`;