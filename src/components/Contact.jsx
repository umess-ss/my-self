import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/PortfolioData';
import BlurText from './reactbits/BlurText';
import ScrollReveal from './reactbits/ScrollReveal';

const ContactInfoCard = ({ icon: Icon, text, color }) => {

  const colorMap = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    pink: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
  };
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300" >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${colorMap[color]}`}>
        <Icon size={24} />
      </div>
      <span className="text-lg font-semibold truncate dark:text-gray-200">{text}</span>
    </div >
  );
};

export default function Contact() {
  // 1. Create state to handle the button text and status
  const [result, setResult] = useState("");

  // 2. Define the onSubmit function
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // This uses your VITE environment variable or falls back to the hardcoded key
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "396d4602-cf77-42e2-924f-d13d1464165d";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
        // Reset button text after 3 seconds
        setTimeout(() => setResult(""), 3000);
      } else {
        console.log("Error", data);
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    }
  };

  const contactInfo = [
    { icon: Phone, text: personalInfo.phone, color: 'blue' },
    { icon: Mail, text: personalInfo.email, color: 'purple' },
    { icon: MapPin, text: personalInfo.location, color: 'pink' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <BlurText
            text="Contact"
            animateBy="words"
            delay={80}
            direction="top"
          />{" "}
          <BlurText
            text="Me"
            animateBy="words"
            delay={100}
            direction="bottom"
            className="text-purple-600"
          />
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="left" distance={30}>
                  <ContactInfoCard {...info} />
                </ScrollReveal>
              ))}
            </div>

            {/* 3. The Form now calls the onSubmit function defined above */}
            <form onSubmit={onSubmit} className="space-y-4 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-6 rounded-lg shadow-sm transition-colors duration-300">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:border-pink-500"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full hover:bg-pink-50 transition font-semibold cursor-pointer"
              >
                {result ? result : "Send Message Now"}
              </button>
            </form>
          </div>

          <ScrollReveal direction="right" distance={40} delay={0.3}>
          <div className="w-full h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Kathmandu Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.925073094117!2d85.28720587546671!3d27.688710576193216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d9284b605%3A0xdeff9faa80d88afb!2sAdvanced%20College%20of%20Engg.%20Management!5e0!3m2!1sen!2snp!4v1768996700853!5m2!1sen!2snp"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}