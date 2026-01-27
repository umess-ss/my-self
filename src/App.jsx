import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import BlogPostDetail from "./components/BlogPostDetail";

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-white">
      <Navigation />
        <Routes>
          <Route path='/' element={
            <>
            <Home />
            <About />
            <Resume />
            <Projects />
            <Blog />
            <Contact />
          </> 
          } />
         <Route path='/blog/:id' element={<BlogPostDetail />} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;