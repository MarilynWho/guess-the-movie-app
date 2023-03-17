// import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Game from "./components/Game";
import TryAgain from "./components/TryAgain";
import Scores from "./components/Scores";
import Info from "./components/Info";
import Navbar from "./components/Nvbar";
import Home from "./components/Home";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import WellDone from "./components/WellDone";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <ParticlesBg type="circle" bg={true} />
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/try-again" element={<TryAgain />} />
              <Route path="/scores" element={<Scores />} />
              <Route path="/info" element={<Info />} />
              <Route path="/well-done" element={<WellDone />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
