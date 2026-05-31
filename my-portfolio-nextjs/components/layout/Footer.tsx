import { Github, Globe, Heart, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { label: "Email", href: "mailto:ums.rbc07@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/umess-ss", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/umeshrajbanshi", icon: Linkedin },
  { label: "Website", href: "https://umeshrajbanshi.com.np", icon: Globe },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/all-blogs" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <p className="footer-brand-name">Umesh Rajbanshi</p>
            <p className="footer-tagline">
              Backend &amp; Cloud Engineer building dependable APIs, secure workflows, and cloud delivery systems for production.
            </p>
          </div>

          <div className="footer-links-col">
            <p className="footer-col-title">Quick Links</p>
            <nav className="footer-quick-links" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social-col">
            <p className="footer-col-title">Connect</p>
            <div className="footer-social-icons">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                  className="footer-social-link"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Umesh Rajbanshi. All rights reserved.
          </p>
          <p className="footer-credit">
            Crafted with <Heart size={13} className="footer-heart" /> in Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
