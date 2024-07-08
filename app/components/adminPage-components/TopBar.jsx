'use client'

import React, { useState } from 'react';
import { Search, Bell, Mail, ChevronDown, Menu } from 'lucide-react';
import { signOut } from 'next-auth/react';

const TopBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);


  const signOutButton = () => {
     signOut();
  };

  return (
    <div className="bg-indigo-800 text-white shadow-md px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <button className="p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden">
          <Menu className="h-6 w-6" />
        </button>

        {/* Search bar */}
        <div className={`relative flex-1 max-w-xl mx-4 transition-all duration-300 ease-in-out ${
          isSearchFocused ? 'shadow-lg' : 'shadow'
        }`}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-indigo-300" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-indigo-600 rounded-md leading-5 bg-indigo-700 placeholder-indigo-300 text-white focus:outline-none focus:placeholder-indigo-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Search..."
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>

        {/* Right section */}
        <div className="flex items-center">
          {/* Notifications */}
          <button className="p-2 rounded-full text-indigo-200 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-indigo-800"></span>
          </button>

          {/* Messages */}
          <button className="ml-4 p-2 rounded-full text-indigo-200 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white relative">
            <Mail className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-purple-400 ring-2 ring-indigo-800"></span>
          </button>

          {/* Profile dropdown */}
          <div className="ml-4 relative flex-shrink-0">
            <div>
              <button
                className="bg-indigo-700 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="/api/placeholder/32/32"
                  alt="User avatar"
                />
                <ChevronDown className="h-5 w-5 text-indigo-300 ml-1 self-center" />
              </button>
            </div>
            {isProfileDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-indigo-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-600"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-600"
                >
                  Settings
                </a>
                {/* <a
                  href="#"
                  className="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-600"
                >
                  Sign out
                </a> */}


        
          <button onClick={signOutButton} className="lock px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-600">
            Sign Out
          </button>
       
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;