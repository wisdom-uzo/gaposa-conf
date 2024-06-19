// components/WelcomeMessage.js

import Image from 'next/image';

const WelcomeMessage = () => {
  return (
    <section className="bg-white shadow-md py-8 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to ICONST '24
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          The 2nd International Conference of Science and Technology (ICONST '24) is a premier event that brings together experts and researchers from around the world to discuss the latest advancements in science and technology.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          This year's conference theme is "Green Economy: A Multidimensional Approach to Sustainable Development," and we invite you to join us for two days of engaging discussions, presentations, and networking opportunities.
        </p>
        <a
          href="/register"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Register Now
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center">
       
      </div>
    </section>
  );
};

export default WelcomeMessage;
