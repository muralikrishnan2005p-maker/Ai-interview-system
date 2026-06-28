import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Interview from "./pages/Interview";
import Analysis from "./pages/Analysis";
import Report from "./pages/Report";

function App() {

  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/report" element={<Report />} />

      </Routes>
    </HashRouter>
  );
}

export default App;