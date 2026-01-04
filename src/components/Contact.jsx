import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/PortfolioData';

const ContactInfoCard = ({ icon: Icon, text, color }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4 shadow-sm">
      <div className={`w-14 h-14 rounded-full bg-${color}-100 flex items-center justify-center`}>
        <Icon className={`text-${color}-600`} size={24} />
      </div>
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};

export default function Contact() {
  const contactInfo = [
    { icon: Phone, text: personalInfo.phone, color: 'blue' },
    { icon: Mail, text: personalInfo.email, color: 'purple' },
    { icon: MapPin, text: personalInfo.website, color: 'pink' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <ContactInfoCard
                  key={index}
                  icon={info.icon}
                  text={info.text}
                  color={info.color}
                />
              ))}
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full hover:bg-pink-50 transition font-semibold"
              >
                Send Message Now
              </button>
            </form>
          </div>
          
<div>
  <div className="w-full h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.217754861584!2d85.312329!3d27.706194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a257a3a7b%3A0xacf19382550969a9!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
