import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import StudyInfo from "./pages/StudyInfo/StudyInfo";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-information" element={<StudyInfo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
