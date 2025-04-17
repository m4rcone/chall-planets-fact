import Mercury from "../../assets/planet-mercury.svg";
import MercuryStructure from "../../assets/planet-mercury-internal.svg";
import MercuryGeology from "../../assets/geology-mercury.png";
import Venus from "../../assets/planet-venus.svg";
import VenusStructure from "../../assets/planet-venus-internal.svg";
import VenusGeology from "../../assets/geology-venus.png";
import Earth from "../../assets/planet-earth.svg";
import EarthStructure from "../../assets/planet-earth-internal.svg";
import EarthGeology from "../../assets/geology-earth.png";
import Mars from "../../assets/planet-mars.svg";
import MarsStructure from "../../assets/planet-mars-internal.svg";
import MarsGeology from "../../assets/geology-mars.png";
import Jupiter from "../../assets/planet-jupiter.svg";
import JupiterStructure from "../../assets/planet-jupiter-internal.svg";
import JupiterGeology from "../../assets/geology-jupiter.png";
import Saturn from "../../assets/planet-saturn.svg";
import SaturnStructure from "../../assets/planet-saturn-internal.svg";
import SaturnGeology from "../../assets/geology-saturn.png";
import Uranus from "../../assets/planet-uranus.svg";
import UranusStructure from "../../assets/planet-uranus-internal.svg";
import UranusGeology from "../../assets/geology-uranus.png";
import Neptune from "../../assets/planet-neptune.svg";
import NeptuneStructure from "../../assets/planet-neptune-internal.svg";
import NeptuneGeology from "../../assets/geology-neptune.png";

type PlanetImageType = {
  [key: string]: {
    overview: string;
    structure: string;
    geology: string;
  };
};

export const planetImage: PlanetImageType = {
  mercury: {
    overview: Mercury,
    structure: MercuryStructure,
    geology: MercuryGeology,
  },
  venus: {
    overview: Venus,
    structure: VenusStructure,
    geology: VenusGeology,
  },
  earth: {
    overview: Earth,
    structure: EarthStructure,
    geology: EarthGeology,
  },
  mars: {
    overview: Mars,
    structure: MarsStructure,
    geology: MarsGeology,
  },
  jupiter: {
    overview: Jupiter,
    structure: JupiterStructure,
    geology: JupiterGeology,
  },
  saturn: {
    overview: Saturn,
    structure: SaturnStructure,
    geology: SaturnGeology,
  },
  uranus: {
    overview: Uranus,
    structure: UranusStructure,
    geology: UranusGeology,
  },
  neptune: {
    overview: Neptune,
    structure: NeptuneStructure,
    geology: NeptuneGeology,
  },
};
