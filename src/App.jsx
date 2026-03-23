import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Avisos from "./components/Avisos";
import "./App.css";

import threeDark from "./assets/3-dark.png";
import pantherDark from "./assets/panther-dark.png";
import threeLight from "./assets/3-light.png";
import pantherLight from "./assets/panther-light.png";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* IMAGENS */}
      <div className="hero">
        <img
          src={darkMode ? threeDark : threeLight}
          alt="3"
          className="hero-img"
        />

        <img
          src={darkMode ? pantherDark : pantherLight}
          alt="panther"
          className="hero-img"
        />
      </div>

      {/* 🔥 AVISOS AGORA EMBAIXO */}
      <Avisos darkMode={darkMode} />
    </div>
  );
}

export default App;