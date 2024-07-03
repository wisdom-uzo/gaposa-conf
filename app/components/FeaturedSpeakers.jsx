import React from 'react';
import { Twitter, Linkedin, Globe } from 'lucide-react';

const FeaturedSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Kolawole Adebayo",
      role: "Lead Paper Presenter",
      institution: "Federal University of Agriculture Abeokuta, Ogun State, Nigeria",
      bio: "Deputy Vice Chancellor (Development) with expertise in sustainable agriculture and rural development.",
      image: "/api/placeholder/400/400",
      twitter: "#",
      linkedin: "#",
      website: "#"
    },
    {
      name: "Dr. L. A. Odunmbaku",
      role: "Keynote Speaker",
      institution: "Moshood Abiola Polytechnic, Abeokuta",
      bio: "HOD, Department of Food Science and Technology, specializing in sustainable food systems and green technologies.",
      image: "/api/placeholder/400/400",
      twitter: "#",
      linkedin: "#",
      website: "#"
    },
    {
      name: "Dr. Jane Smith",
      role: "Guest Speaker",
      institution: "Green Tech Institute, USA",
      bio: "Renowned expert in renewable energy and sustainable urban planning.",
      image: "/api/placeholder/400/400",
      twitter: "#",
      linkedin: "#",
      website: "#"
    },
    {
      name: "Prof. Akinwande Johnson",
      role: "Panel Moderator",
      institution: "University of Lagos, Nigeria",
      bio: "Distinguished professor of Environmental Sciences with a focus on climate change mitigation strategies.",
      image: "/api/placeholder/400/400",
      twitter: "#",
      linkedin: "#",
      website: "#"
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Esteemed Guests</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Speakers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Learn from world-renowned experts in green economy and sustainable development
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <img className="h-48 w-48 rounded-full object-cover" src={speaker.image} alt={speaker.name} />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{speaker.name}</h3>
                <p className="text-sm text-green-600">{speaker.role}</p>
                <p className="text-sm text-gray-500">{speaker.institution}</p>
                <p className="mt-2 text-sm text-gray-500">{speaker.bio}</p>
                <div className="mt-3 flex justify-center space-x-3">
                  <a href={speaker.twitter} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={speaker.linkedin} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={speaker.website} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Website</span>
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
          >
            View Full Speaker List
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;