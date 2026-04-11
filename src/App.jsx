import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import BlogPostDetail from "./components/BlogPostDetail";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path='/' element={
              <div className="flex flex-col">
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="resume"><Resume /></section>
                <section id="projects"><Projects /></section>
                <section id="blog"><Blog isHomePage={true} /></section>
                <section id="contact"><Contact /></section>
              </div>
            } />
            <Route path='/all-blogs' element={<Blog isHomePage={false} />} />
            <Route path='/blog/:id' element={<BlogPostDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;