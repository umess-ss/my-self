import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", text: "9816386181", href: "tel:9816386181" },
  { icon: Mail, label: "Email", text: "ums.rbc07@gmail.com", href: "mailto:ums.rbc07@gmail.com" },
  { icon: MapPin, label: "Location", text: "Kathmandu, Nepal" }
];

export function Contact({ compact = false }: { compact?: boolean }) {
  void compact;

  return (
    <section id="contact" className="contact-section relative overflow-hidden py-24 transition-colors duration-300 md:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="portfolio-hero-bg absolute inset-0" />
        <div className="portfolio-hero-grid absolute inset-0" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--portfolio-warm)]">CONTACT</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--portfolio-text)] md:text-5xl">
            Let&apos;s talk about the backend.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.75] text-[var(--portfolio-muted)] md:text-[1.0625rem]">
            Send a message about backend systems, cloud deployment, internships, engineering roles, or production-focused project work.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactInfo.map(({ icon: Icon, label, text, href }) => {
                const content = (
                  <>
                    <div className="contact-info-icon"><Icon size={21} /></div>
                    <span className="min-w-0">
                      <span className="contact-info-label">{label}</span>
                      <span className="contact-info-value">{text}</span>
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className="contact-info-card">{content}</a>
                ) : (
                  <div key={label} className="contact-info-card">{content}</div>
                );
              })}
            </div>

            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="396d4602-cf77-42e2-924f-d13d1464165d" />
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" className="contact-input" name="name" placeholder="Your name" autoComplete="name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" className="contact-input" type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" className="contact-input" name="subject" placeholder="Project, role, or question" />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" className="contact-input" name="message" placeholder="Tell me what you are building or hiring for." rows={4} required />
              </div>
              <button type="submit" className="contact-submit-btn">Send message</button>
            </form>
          </div>

          <div className="contact-map-panel">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--portfolio-border)] px-4 py-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--portfolio-muted)]">Based in</span>
              <span className="font-bold text-[var(--portfolio-text)]">Kathmandu, Nepal</span>
            </div>
            <div className="contact-map-frame">
              <iframe
                title="Kathmandu Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.925073094117!2d85.28720587546671!3d27.688710576193216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d9284b605%3A0xdeff9faa80d88afb!2sAdvanced%20College%20of%20Engg.%20Management!5e0!3m2!1sen!2snp!4v1768996700853!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
