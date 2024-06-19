'use Client'
import Image from 'next/image';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 drop-shadow-lg">
        2ND INTERNATIONAL CONFERENCE ON SCIENCE AND TECHNOLOGY
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center mb-8 drop-shadow-lg">
          Green Economy: A Multidimensional Approach to Sustainable Development
        </p>

        <p className="text-xl text-gray-200 mb-8">
          Join us for a conference focused on sustainable development solutions.
        </p>
        
        <a
          href="/register"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 drop-shadow-lg"
        >
          Register Now
        </a>


      </div>
    

    </section>
  );
};

export default HeroSection;