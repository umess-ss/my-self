import React from "react";
import {personalInfo} from "../data/PortfolioData";
import rohanImage from "../assets/rohan.jpg";
import myCV from '../assets/myCV.pdf';


export default function Home(){
         return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-200 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-pink-600 font-semibold text-lg mb-4">HELLO THERE</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">I am {personalInfo.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{personalInfo.title}</p>
            <div className="flex gap-4">
              <a href={myCV} download="umesh_cv.pdf" className="cursor-pointer inline-block">
              <button className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full hover:bg-pink-50 transition cursor-pointer font-semibold">
                Download CV
              </button>
              </a>
              <a
                href="https://github.com/umess-ss"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full hover:bg-pink-50 transition inline-block"
              >
                View GitHub
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={rohanImage}
              alt="Profile"
              className="w-80 h-80 rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}