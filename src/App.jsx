import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;