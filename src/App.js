import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import logo from './logo.svg';
import Home from "./components/Home/index";
import Test from "./components/Test"

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
