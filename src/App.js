import React from "react";
import "./App.css";
import DesktopView from "./pages/DesktopView";
import { Routes, Route } from "react-router-dom";
import MobileView from "./pages/MobileView";
// import ChartBar from "./components/chartBar/ChartBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<DesktopView />} />
        <Route path="desktop" element={<DesktopView />} />
        <Route path="mobile" element={<MobileView />} />
        {/* <Route path="/mobile/chartbar" element={<ChartBar />} /> */}
      </Routes>
    </div>
  );
}
//

export default App;
