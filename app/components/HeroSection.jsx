import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-green-800 overflow-hidden">
      {/* Background pattern */}
      <div className="hidden sm:block sm:absolute sm:inset-0 sm:opacity-30">
        <svg className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-green-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg className="absolute top-0 right-0 transform -translate-y-1/3 -translate-x-1/4 lg:translate-x-1/3 xl:translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa28" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-green-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
        </svg>
      </div>
      
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">International Conference on</span>{' '}
              <span className="block text-green-400 xl:inline">Science and Technology</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-green-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Green Economy: A Multidimensional Approach to Sustainable Development
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10">
                  Register Now
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/program" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                  View Program
                </Link>
              </div>
            </div>
          </div>
        </main>
        <div className="mt-10 max-w-7xl mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                  August 19-22, 2024
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                  Gateway (ICT) Polytechnic Saapade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;