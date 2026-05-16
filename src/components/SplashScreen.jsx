import React, { useEffect, useRef, useState } from 'react';
import homeImage from '../assets/home.jpeg';

const MIN_LOADER_TIME = 2050;
const MAX_LOADER_TIME = 2450;
const FADE_OUT_TIME = 500;

const terminalLines = [
  'initializing api...',
  'loading docker layers...',
  'connecting aws cloud...',
  'deploying portfolio...',
  'ready.',
];

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const didExitRef = useRef(false);

  useEffect(() => {
    const start = Date.now();
    let exitTimer;
    let removeTimer;

    const startExit = () => {
      if (didExitRef.current) return;
      didExitRef.current = true;
      setFadeOut(true);

      removeTimer = setTimeout(() => {
        setVisible(false);
        if (onFinish) onFinish();
      }, FADE_OUT_TIME);
    };

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_LOADER_TIME - elapsed, 0);
      exitTimer = setTimeout(startExit, remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    const maxTimer = setTimeout(startExit, MAX_LOADER_TIME);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      clearTimeout(maxTimer);
    };
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      className="splash-screen"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: `opacity ${FADE_OUT_TIME}ms ease`,
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div className="portfolio-hero-bg absolute inset-0" />
      <div className="portfolio-hero-grid absolute inset-0" />
      <div className="splash-glow" aria-hidden="true" />

      <div className="splash-avatar-shell">
        <div className="splash-ring splash-ring-1" />
        <div className="splash-ring splash-ring-2" />
        <div className="splash-ring splash-ring-3" />
        <div className="splash-avatar-frame">
          <img
            src={homeImage}
            alt="Umesh Rajbanshi"
            className="splash-avatar"
          />
        </div>
      </div>

      <h1 className="splash-name">
        Umesh Rajbanshi
      </h1>

      <p className="splash-tagline">
        Python Backend &amp; Cloud Engineer
      </p>

      <div className="splash-terminal-card" aria-label="Deployment status">
        <div className="splash-terminal-header">
          <span className="splash-terminal-dot" />
          <span className="splash-terminal-dot" />
          <span className="splash-terminal-dot" />
          <span className="splash-terminal-title">deploying portfolio</span>
        </div>
        <div className="splash-terminal-body">
          {terminalLines.map((line, index) => (
            <div
              key={line}
              className="splash-terminal-line"
              style={{ animationDelay: `${0.42 + index * 0.18}s` }}
            >
              <span className="splash-terminal-prompt">&gt;</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
        <div className="splash-bar-track">
          <div className="splash-bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
