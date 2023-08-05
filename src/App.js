import React from "react";
import "./App.css";
import DesktopView from "./pages/DesktopView";
// import { Routes, Route } from "react-router-dom";
import MobileView from "./pages/MobileView";

function App() {
  return (
    <div className="App">
      <DesktopView />
      <MobileView />
      {/* <Routes>
        <Route path="desktop" element={<DesktopView />} />
        <Route path="mobile" element={<MobileView />} />
      </Routes> */}
    </div>
  );
}
//

export default App;
