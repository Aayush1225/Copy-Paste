
// This runs every time darkMode changes.
// document.documentElement → refers to <html> in your page.
// classList.add("dark") → adds the dark class, so global CSS (like Tailwind dark mode) applies.
// classList.remove("dark") → removes it if dark mode is off.
// localStorage.setItem("theme", ...) → saves the user’s preference, so it persists on reload.



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Debug from "./pages/Debug";
import Support from "./pages/Support";
import { useState, createContext, useEffect } from "react";


export const DarkContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

 
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
   
    <DarkContext value={{ darkMode, setDarkMode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/debug" element={<Debug />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </DarkContext>
  );
}