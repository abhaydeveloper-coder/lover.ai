import React, { useState, useEffect } from "react";
import "./App.css";
import LandingSection from "./components/LandingSection";
import ReasonsSection from "./components/ReasonsSection";
import LoveLetterSection from "./components/LoveLetterSection";
import InteractiveSection from "./components/InteractiveSection";
import CounterSection from "./components/CounterSection";
import FutureSection from "./components/FutureSection";
import FinalSection from "./components/FinalSection";
import { Moon, Sun } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      
      <LandingSection />
      <ReasonsSection />
      <LoveLetterSection />
      <InteractiveSection />
      <CounterSection />
      <FutureSection />
      <FinalSection />
    </div>
  );
}

export default App;
