import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10rem;
  color: ${(props) => props.theme.colors.white};
  min-height: calc(100vh - 121px);

  @media screen and (max-width: 1024px) {
    padding: 0 2.5rem;
    gap: 1.5rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 666px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  padding: auto;
  width: 80%;
  display: flex;
  justify-content: center;

  img {
    @media screen and (max-width: 1024px) {
      width: 50%;
    }

    @media screen and (max-width: 430px) {
      width: 50%;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media screen and (max-width: 430px) {
    padding: 3rem 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 5rem;
    font-weight: 500;

    @media screen and (max-width: 1024px) {
      font-size: 3rem;
    }
  }

  p {
    font-family: ${(props) => props.theme.fonts.secundary};

    font-size: 0.875rem;
    line-height: 1.5625rem;
    opacity: 75%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }
  }
`;

export const InfoWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    max-width: 339px;
  }

  @media screen and (max-width: 430px) {
    align-items: center;
  }
`;

export const SourceContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.secundary};
  font-size: 0.875rem;
  line-height: 1.5625rem;

  span {
    opacity: 50%;
  }

  a {
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    opacity: 50%;

    &:hover {
      color: ${(props) => props.theme.colors.white};
      opacity: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    width: 281px;
  }
`;

export interface ButtonStyledProps {
  $active?: boolean;
  $planet:
    | "mercury"
    | "venus"
    | "earth"
    | "mars"
    | "jupiter"
    | "saturn"
    | "uranus"
    | "neptune";
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  cursor: pointer;
  padding: 0.75rem;
  background-color: ${(props) =>
    props.$active ? props.theme.colors[props.$planet] : "transparent"};
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 2.57px;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background-color: ${(props) =>
      props.$active
        ? props.theme.colors[props.$planet]
        : "rgba(255, 255, 255, 0.2)"};
  }

  @media screen and (max-width: 1024px) {
    padding: 0.5rem;
    font-size: 0.5rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 430px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`;
