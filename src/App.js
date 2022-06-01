import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<Home />} />
      <Route exact path="/team" element={<Home />} />
      <Route exact path="/protocol" element={<Home />} />
    </Routes>
  );
}

export default App;
