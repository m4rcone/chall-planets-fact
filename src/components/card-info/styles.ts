import styled from "styled-components";

export const Card = styled.div`
  width: 255px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);

  h2 {
    color: rgba(255, 255, 255, 0.5);
    font-family: ${(props) => props.theme.fonts.secundary};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.5rem;
    letter-spacing: 1px;

    @media screen and (max-width: 1024px) {
      font-size: 0.5rem;
      line-height: 1rem;
      letter-spacing: 0.73px;
    }
  }

  span {
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: -1.5px;

    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
      letter-spacing: -0.9px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 164px;
  }

  @media screen and (max-width: 430px) {
    width: 135px;

    h2 {
      font-size: 0.5rem;
    }
    span {
      font-size: 1.25rem;
    }
  }
`;
