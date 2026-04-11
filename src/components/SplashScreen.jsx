import React, { useEffect, useState } from 'react';

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
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Animated rings */}
      <div style={{ position: 'relative', width: 160, height: 160, marginBottom: 32 }}>
        <div className="splash-ring splash-ring-1" />
        <div className="splash-ring splash-ring-2" />
        <div className="splash-ring splash-ring-3" />
        {/* Center initials */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontSize: 52,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #f472b6, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-2px',
          }}>UR</span>
        </div>
      </div>

      {/* Name */}
      <h1 className="splash-name">
        Umesh Rajbanshi
      </h1>

      {/* Tagline */}
      <p className="splash-tagline">
        Electronics Engineer · AI &amp; ML Enthusiast
      </p>

      {/* Loading bar */}
      <div className="splash-bar-track">
        <div className="splash-bar-fill" />
      </div>
    </div>
  );
};

export default SplashScreen;
