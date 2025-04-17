import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.375rem 2rem;
  color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  img {
    display: none;
  }

  h1 {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 1.75rem;
    font-weight: 500;
  }

  nav {
    font-family: ${(props) => props.theme.fonts.secundary};
    font-size: 0.6875rem;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 25%;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2.0625rem;

      li {
        cursor: pointer;
        opacity: 75%;

        &:hover {
          opacity: 100%;
        }

        a {
          color: ${(props) => props.theme.colors.white};
          text-decoration: none;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
