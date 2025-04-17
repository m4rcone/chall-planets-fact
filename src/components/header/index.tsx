import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  const planets = [
    { id: 1, name: "Mercury" },
    { id: 2, name: "Venus" },
    { id: 3, name: "Earth" },
    { id: 4, name: "Mars" },
    { id: 5, name: "Jupiter" },
    { id: 6, name: "Saturn" },
    { id: 7, name: "Uranus" },
    { id: 8, name: "Neptune" },
  ];

  return (
    <HeaderContainer>
      <h1>THE PLANETS</h1>
      <nav>
        <ul>
          {planets.map((planet) => (
            <li key={planet.id}>
              <NavLink to={`/${planet.name.toLowerCase()}`}>
                {planet.name.toLocaleUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderContainer>
  );
}
