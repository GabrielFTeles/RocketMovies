import styled from 'styled-components';

import backgroundImg from '../../assets/movie-theater.png';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  display: grid;
  place-content: center;
  
  width: min(100%, 63.7rem);
  padding-inline: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 34rem;

  > header {
    h1 {
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
      font-size: 4.8rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.4rem;
    }
  }

  .logon {
    h2 {
      margin-block: 4.8rem;
    }

    div + div {
      margin-top: 0.8rem;
    }

    button {
      margin-top: 2.4rem;
    }
  }

  > a {
    margin: 4.2rem auto 0;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
`;

export const Background = styled.div`
  flex: 1;

  filter: brightness(0.5);

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;