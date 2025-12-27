// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DockDesign from './pages/DockDesign';
import DockRepair from './pages/DockRepair';
import DockAccessories from './pages/DockAccessories';
import BoatLiftInstallation from './pages/BoatLiftInstallation';
import BoatLiftRepair from './pages/BoatLiftRepair';
import Inspections from './pages/Inspections';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Full one-page site */}
        <Route path="/" element={<Home />} />

        {/* Service detail pages */}
        <Route
          path="/services/new-dock-design-construction"
          element={<DockDesign />}
        />
        <Route
          path="/services/dock-repair-maintenance"
          element={<DockRepair />}
        />
        <Route
          path="/services/dock-boat-lift-accessories"
          element={<DockAccessories />}
        />
        <Route
          path="/services/new-boat-lift-design-installation"
          element={<BoatLiftInstallation />}
        />
        <Route
          path="/services/boat-lift-repair-maintenance"
          element={<BoatLiftRepair />}
        />
        <Route
          path="/services/dock-boat-lift-inspections"
          element={<Inspections />}
        />

        {/* Legal pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
