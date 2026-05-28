import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import SmoothScroll from "./components/SmoothScroll";
import SEOHead from "./components/SEOHead";
import { fadeIn } from "./components/motion/animations";

const MotionDiv = motion.div;

function AnimatedRoutes({ splashDone }) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.16 } },
        exit: { opacity: 0, transition: { duration: 0.12 } },
      }
    : fadeIn;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionDiv
        key={location.pathname}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Routes location={location}>
          <Route path='/' element={
            <main className="flex flex-col">
              <SEOHead />
              <section id="home"><Home splashDone={splashDone} /></section>
              <section id="about"><About /></section>
              <section id="resume"><Resume /></section>
              <section id="projects"><Projects /></section>
              <section id="blog"><Blog isHomePage={true} /></section>
              <section id="contact"><Contact /></section>
            </main>
          } />
          <Route path='/all-blogs' element={<Blog isHomePage={false} />} />
          <Route path='/blog/:id' element={<BlogPostDetail />} />
        </Routes>
      </MotionDiv>
    </AnimatePresence>
  );
}

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      <ThemeProvider>
        <Router>
          <SmoothScroll>
          <div className="min-h-screen bg-[#FBFAFC] dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

            <ScrollToTop />
            <Navigation />
            <AnimatedRoutes splashDone={splashDone} />
          </div>
          </SmoothScroll>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
