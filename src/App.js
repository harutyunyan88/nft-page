import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import StudyInfo from "./pages/StudyInfo/StudyInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-information" element={<StudyInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
