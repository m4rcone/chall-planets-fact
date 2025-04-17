import {
  ButtonsContainer,
  ButtonStyled,
  ButtonStyledProps,
  CardsContainer,
  ContentContainer,
  ImageContainer,
  InfoContainer,
  InfoWrapper,
  PageContainer,
  SourceContainer,
} from "./styles";
import IconSource from "../../assets/icon-source.svg";
import { planetImage } from "../../components/planet-image";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data.json";
import { CardInfo } from "../../components/card-info";

export function PlanetPage() {
  let { planetName } = useParams();

  const isValidPlanetName = data.some(
    (planet) =>
      planet.name.toLocaleLowerCase() === planetName?.toLocaleLowerCase()
  );
  if (!isValidPlanetName) {
    planetName = "mercury";
  }

  const planet = data.find(
    (planet) =>
      planet.name.toLocaleLowerCase() === planetName?.toLocaleLowerCase()
  );

  type ButtonOption = "overview" | "structure" | "geology";

  const [buttonOption, setButtonOption] = useState<ButtonOption>("overview");

  useEffect(() => {
    setButtonOption("overview");
  }, [planetName]);

  return (
    <PageContainer>
      <ContentContainer>
        <ImageContainer>
          {buttonOption === "overview" && (
            <img
              src={planetImage[planetName?.toLocaleLowerCase() || ""].overview}
              alt=""
            />
          )}
          {buttonOption === "structure" && (
            <img
              src={planetImage[planetName?.toLocaleLowerCase() || ""].structure}
              alt=""
            />
          )}
          {buttonOption === "geology" && (
            <img
              src={planetImage[planetName?.toLocaleLowerCase() || ""].geology}
              alt=""
            />
          )}
        </ImageContainer>
        <InfoContainer>
          <InfoWrapper>
            <h2>{planet?.name.toLocaleUpperCase()}</h2>
            {buttonOption === "overview" && <p>{planet?.overview.content}</p>}
            {buttonOption === "structure" && <p>{planet?.structure.content}</p>}
            {buttonOption === "geology" && <p>{planet?.geology.content}</p>}
            <SourceContainer>
              <span>Source: </span>
              {buttonOption == "overview" && (
                <a href={planet?.overview.source}>
                  Wikipedia{" "}
                  <img src={IconSource} alt="" width={12} height={12} />
                </a>
              )}
              {buttonOption == "structure" && (
                <a href={planet?.structure.source}>
                  Wikipedia{" "}
                  <img src={IconSource} alt="" width={12} height={12} />
                </a>
              )}
              {buttonOption == "geology" && (
                <a href={planet?.geology.source}>
                  Wikipedia{" "}
                  <img src={IconSource} alt="" width={12} height={12} />
                </a>
              )}
            </SourceContainer>
          </InfoWrapper>
          <ButtonsContainer>
            <ButtonStyled
              onClick={() => setButtonOption("overview")}
              $active={buttonOption === "overview"}
              $planet={
                planetName?.toLocaleLowerCase() as ButtonStyledProps["$planet"]
              }
            >
              OVERVIEW
            </ButtonStyled>
            <ButtonStyled
              onClick={() => setButtonOption("structure")}
              $active={buttonOption === "structure"}
              $planet={
                planetName?.toLocaleLowerCase() as ButtonStyledProps["$planet"]
              }
            >
              INTERNAL STRUCTURE
            </ButtonStyled>
            <ButtonStyled
              onClick={() => setButtonOption("geology")}
              $active={buttonOption === "geology"}
              $planet={
                planetName?.toLocaleLowerCase() as ButtonStyledProps["$planet"]
              }
            >
              SURFACE GEOLOGY
            </ButtonStyled>
          </ButtonsContainer>
        </InfoContainer>
      </ContentContainer>
      <CardsContainer>
        <CardInfo
          title="ROTATION TIME"
          info={planet ? planet.rotation.toLocaleUpperCase() : ""}
        />
        <CardInfo
          title="REVOLUTION TIME"
          info={planet ? planet.revolution.toLocaleUpperCase() : ""}
        />
        <CardInfo
          title="RADIUS"
          info={planet ? planet.radius.toLocaleUpperCase() : ""}
        />
        <CardInfo
          title="AVERAGE TEMP."
          info={planet ? planet.temperature.toLocaleUpperCase() : ""}
        />
      </CardsContainer>
    </PageContainer>
  );
}
