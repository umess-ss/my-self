import React, { useEffect, useState } from 'react';
import homeImage from '../assets/home.jpeg';

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

  useEffect(() => {
    // Start fade-out after 2s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Remove from DOM after fade completes (0.6s transition)
    const removeTimer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
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
        transition: 'opacity 0.6s ease',
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
        <img
          src={homeImage}
          alt="Umesh Rajbanshi"
          className="splash-avatar"
        />
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
