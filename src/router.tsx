import { Routes, Route, Navigate } from "react-router-dom";
import { DefaultLayout } from "./layouts/default-layout";
import { PlanetPage } from "./pages/planet";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Navigate to="/mercury" replace />} />
        <Route path="/:planetName" element={<PlanetPage />} />
      </Route>
    </Routes>
  );
}
