import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="/api/placeholder/200/50"
              alt="ICONST '24 Logo"
            />
            <p className="text-green-200 text-base">
              International Conference on Science and Technology 2024
              <br />
              Green Economy: A Multidimensional Approach to Sustainable Development
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-green-200 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-green-200 tracking-wider uppercase">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    ['Home', '/'],
                    ['About', '/about'],
                    ['Speakers', '/speakers'],
                    ['Program', '/program'],
                    ['Registration', '/registration'],
                  ].map(([title, url]) => (
                    <li key={title}>
                      <Link href={url} className="text-base text-green-300 hover:text-white">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-green-200 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    ['FAQ', '/faq'],
                    ['Contact', '/contact'],
                    ['Venue', '/venue'],
                    ['Accommodation', '/accommodation'],
                    ['Terms & Conditions', '/terms'],
                  ].map(([title, url]) => (
                    <li key={title}>
                      <Link href={url} className="text-base text-green-300 hover:text-white">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-green-200 tracking-wider uppercase">
                  Contact Us
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex">
                    <Mail className="flex-shrink-0 h-6 w-6 text-green-200" />
                    <span className="ml-3 text-base text-green-300">
                      gaposastconf@gmail.com
                    </span>
                  </li>
                  <li className="flex">
                    <Phone className="flex-shrink-0 h-6 w-6 text-green-200" />
                    <span className="ml-3 text-base text-green-300">
                      +234 802 821 3011
                    </span>
                  </li>
                  <li className="flex">
                    <MapPin className="flex-shrink-0 h-6 w-6 text-green-200" />
                    <span className="ml-3 text-base text-green-300">
                      Gateway (ICT) Polytechnic Saapade, Ogun State, Nigeria
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-green-700 pt-8">
          <p className="text-base text-green-400 xl:text-center">
            &copy; {currentYear} ICONST '24. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;