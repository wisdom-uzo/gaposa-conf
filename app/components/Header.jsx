// components/Header.js

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-4 sm:px-8 md:px-12 lg:px-16 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
          ICONST &apos;24
        
      </Link>

      <nav className="flex items-center justify-end">
        <ul className="flex items-center justify-end">
          <li className="mr-4">
            <Link href="/about"className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                About
             
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/speakers"className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                Call for Paper
             
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/register"
               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                Register
              
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
