import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/PortfolioData';
import ScrollReveal from './reactbits/ScrollReveal';
import AbstractBackground from './AbstractBackground';
import AnimatedButton from './motion/AnimatedButton';

const ContactInfoCard = ({ icon: Icon, label, text, href }) => {
  const content = (
    <>
      <div className="contact-info-icon">
        <Icon size={21} />
      </div>
      <span className="min-w-0">
        <span className="contact-info-label">{label}</span>
        <span className="contact-info-value">{text}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="contact-info-card">
        {content}
      </a>
    );
  }

  return (
    <div className="contact-info-card">
      {content}
    </div>
  );
};

const ContactField = ({ id, label, as = 'input', className = '', ...props }) => {
  const Field = as;

  return (
    <div className="contact-field">
      <label htmlFor={id}>{label}</label>
      <Field id={id} className={`contact-input ${className}`} {...props} />
    </div>
  );
};

export default function Contact() {
  const [result, setResult] = useState("");
  const isSending = result === "Sending...";
  const isError = result.startsWith("Error:") || result.startsWith("Network error");
  const isSuccess = result === "Message sent successfully.";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "396d4602-cf77-42e2-924f-d13d1464165d";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully.");
        event.target.reset();
        setTimeout(() => setResult(""), 3000);
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    }
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: Mail, label: 'Email', text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, label: 'Location', text: personalInfo.location },
  ];

  return (
    <section id="contact" className="contact-section relative min-h-screen overflow-hidden bg-[#FBFAFC] py-20 transition-colors duration-300 dark:bg-gray-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="portfolio-hero-bg absolute inset-0" />
        <div className="portfolio-hero-grid absolute inset-0" />
      </div>
      <AbstractBackground variant="waves" opacity={0.025} colorClass="text-sky-500 dark:text-sky-500" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB] dark:text-[#60A5FA]">
            CONTACT
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0F172A] dark:text-white md:text-5xl">
            Let&apos;s Talk
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.75] text-[#475569] dark:text-gray-300 md:text-[1.0625rem]">
            Send a message about backend, cloud, or production engineering work. I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="left" distance={30}>
                  <ContactInfoCard {...info} />
                </ScrollReveal>
              ))}
            </div>

            <form onSubmit={onSubmit} className="contact-form">
              <ContactField
                id="contact-name"
                label="Name"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
              <ContactField
                id="contact-email"
                label="Email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              <ContactField
                id="contact-subject"
                label="Subject"
                type="text"
                name="subject"
                placeholder="Project, role, or question"
              />
              <ContactField
                as="textarea"
                id="contact-message"
                label="Message"
                name="message"
                placeholder="Tell me what you are building or hiring for."
                rows="4"
                required
              />

              <AnimatedButton
                type="submit"
                as="button"
                disabled={isSending}
                className="contact-submit-btn"
              >
                {isSending ? "Sending message..." : "Send message"}
              </AnimatedButton>

              <p
                className={`contact-result ${isError ? 'contact-result-error' : ''} ${isSuccess ? 'contact-result-success' : ''}`}
                role={isError ? 'alert' : 'status'}
                aria-live="polite"
              >
                {result && !isSending ? result : ""}
              </p>
            </form>
          </div>

          <ScrollReveal direction="right" distance={32} delay={0.2}>
            <div className="contact-map-panel">
              <div className="contact-map-header">
                <span className="contact-map-kicker">Based in</span>
                <span className="contact-map-location">{personalInfo.location}</span>
              </div>
              <div className="contact-map-frame">
                <iframe
                  title="Kathmandu Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.925073094117!2d85.28720587546671!3d27.688710576193216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d9284b605%3A0xdeff9faa80d88afb!2sAdvanced%20College%20of%20Engg.%20Management!5e0!3m2!1sen!2snp!4v1768996700853!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
