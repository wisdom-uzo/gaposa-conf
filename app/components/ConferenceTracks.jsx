'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ConferenceTracks = () => {
  const [expandedTrack, setExpandedTrack] = useState(null);

  const tracks = [
    {
      title: "Green Consciousness and Data Management",
      description: "Explore the intersection of environmental awareness and data-driven decision making in sustainable development.",
      icon: "📊",
    },
    {
      title: "Adaptability to Climate Change",
      description: "Discuss strategies and technologies for building resilience against the impacts of climate change.",
      icon: "🌡️",
    },
    {
      title: "Green Transportation",
      description: "Examine innovations in sustainable mobility and the future of eco-friendly transportation systems.",
      icon: "🚲",
    },
    {
      title: "Green Technological Innovations",
      description: "Showcase cutting-edge technologies that are driving the transition to a more sustainable economy.",
      icon: "💡",
    },
    {
      title: "Ecological Balance and Sustainability",
      description: "Investigate approaches to maintaining biodiversity and ecosystem health in the context of economic development.",
      icon: "🌿",
    },
    {
      title: "AI and Robotics for Green Economy",
      description: "Explore how artificial intelligence and robotics can contribute to sustainable practices and green growth.",
      icon: "🤖",
    },
    {
      title: "Sustainable Engineering",
      description: "Discuss engineering principles and practices that promote sustainability across various industries.",
      icon: "⚙️",
    },
    {
      title: "Green Energy Optimization",
      description: "Focus on advancements in renewable energy technologies and energy efficiency strategies.",
      icon: "☀️",
    },
  ];

  const toggleTrack = (index) => {
    if (expandedTrack === index) {
      setExpandedTrack(null);
    } else {
      setExpandedTrack(index);
    }
  };

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-green-300 font-semibold tracking-wide uppercase">Explore Our Themes</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Conference Tracks
          </p>
          <p className="mt-4 max-w-2xl text-xl text-green-100 lg:mx-auto">
            Dive into the multifaceted approach to sustainable development
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {tracks.map((track, index) => (
            <div key={index} className="bg-green-700 rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleTrack(index)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{track.icon}</span>
                  <h3 className="text-lg font-medium">{track.title}</h3>
                </div>
                {expandedTrack === index ? (
                  <ChevronUp className="h-6 w-6 text-green-300" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-green-300" />
                )}
              </button>
              {expandedTrack === index && (
                <div className="px-6 pb-4">
                  <p className="text-green-100">{track.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-green-100 hover:bg-green-200 transition duration-150 ease-in-out"
          >
            Submit Your Abstract
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;