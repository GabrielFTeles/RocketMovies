import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: 'Roboto Slab', serif;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    text-decoration: none;
    width: fit-content;
  }

  ul {
    list-style: none;
  }

  .content {
    width: min(100%, 115.7rem);
    margin-inline: auto;
    padding-inline: 2rem;
  }
`;