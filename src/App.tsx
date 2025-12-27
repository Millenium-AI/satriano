import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './Services';
import DockDesign from './pages/DockDesign';
import DockRepair from './pages/DockRepair';
import Accessories from './pages/Accessories';
import BoatLiftInstallation from './pages/BoatLiftInstallation';
import BoatLiftRepair from './pages/BoatLiftRepair';
import Inspections from './pages/Inspections';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services/dock-design" element={<DockDesign />} />
        <Route path="/services/dock-repair" element={<DockRepair />} />
        <Route path="/services/accessories" element={<Accessories />} />
        <Route path="/services/boat-lift-installation" element={<BoatLiftInstallation />} />
        <Route path="/services/boat-lift-repair" element={<BoatLiftRepair />} />
        <Route path="/services/inspections" element={<Inspections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
