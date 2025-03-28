import "../index.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import EnergyPath from "./EnergyPath"; // falta por crear

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/camino" element={<EnergyPath />} />
    </Routes>
  );
}

export default App;
