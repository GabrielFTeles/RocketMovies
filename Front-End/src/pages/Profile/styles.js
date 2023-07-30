import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 3rem;

  > header {
    height: 14.4rem;
    background: ${({ theme }) => theme.COLORS.NOTE_BACKGROUND};

    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }
  }
`;

export const Form = styled.form`
  width: 34rem;
  margin: -9rem auto 0;

  .input-wrapper:nth-child(2) {
    margin-top: 6.4rem;
  } 

  .input-wrapper {
    > div + div {
      margin-top: 0.8rem;
    }
  }

  .input-wrapper + .input-wrapper, button {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: fit-content;
  margin-inline: auto;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    display: grid;
    place-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    cursor: pointer;

    position: absolute;
    right: 7px;
    bottom: 7px;

    background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    input {
      display: none;
    }
  }
`;