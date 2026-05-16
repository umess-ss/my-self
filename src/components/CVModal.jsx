import React, { useEffect, useState } from "react";
import myCV from "../assets/myCV.pdf";

const CVModal = ({ isOpen, onClose }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      {isDesktop ? (
        <div className="cv-modal-content desktop-pdf-modal hidden md:flex" onClick={(e) => e.stopPropagation()}>
          {/* Minimal top bar */}
          <div className="cv-modal-header">
            <span className="cv-modal-title">Resume</span>
            <div className="cv-modal-actions">
              <a
                href={myCV}
                download="Umesh_CV.pdf"
                className="cv-download-btn"
                title="Download CV"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </a>
              <a
                href={myCV}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-newtab-btn"
                title="Open in new tab"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <button onClick={onClose} className="cv-close-btn" aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* PDF - full area, no sidebar */}
          <div className="cv-modal-body hidden md:block">
            <iframe
              src={`${myCV}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
              title="CV Preview"
              className="cv-iframe"
            />
          </div>
        </div>
      ) : (
        <div className="cv-mobile-sheet flex md:hidden" onClick={(e) => e.stopPropagation()}>
          <div className="cv-mobile-header">
            <span className="cv-modal-title">Resume</span>
            <button onClick={onClose} className="cv-close-btn" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="cv-mobile-actions">
            <a
              href={myCV}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-mobile-primary-btn"
            >
              Open Resume
            </a>
            <a
              href={myCV}
              download="Umesh_CV.pdf"
              className="cv-mobile-secondary-btn"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVModal;
