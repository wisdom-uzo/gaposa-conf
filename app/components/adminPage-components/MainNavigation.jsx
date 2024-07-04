'use client'
import React, { useState, useEffect } from 'react';
import { Home, FileText, Users, Calendar, Mic, Briefcase, Settings, ChevronRight } from 'lucide-react';

const MainNavigation = ({ currentPath = '/' }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState(currentPath);

  useEffect(() => {
    setActiveItem(currentPath);
  }, [currentPath]);

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/admin' },
    { name: 'Papers', icon: FileText, path: '/admin/papers' },
    { name: 'Registrations', icon: Users, path: '/admin/registrations' },
    { name: 'Schedule', icon: Calendar, path: '/admin/schedule' },
    { name: 'Speakers', icon: Mic, path: '/admin/speakers' },
    { name: 'Sponsors', icon: Briefcase, path: '/admin/sponsors' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <nav 
      className={`bg-gradient-to-b from-indigo-900 to-indigo-700 text-white transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-20'
      } min-h-screen relative group`}
    >
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          {isExpanded && (
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              ICONST '24
            </span>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 transform ${
              isExpanded ? 'rotate-0' : 'rotate-180'
            }`}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.path}
                className={`flex items-center p-2 rounded-lg transition-all duration-200 
                  ${activeItem === item.path 
                    ? 'bg-indigo-500 shadow-lg transform scale-105' 
                    : 'hover:bg-indigo-600 hover:shadow-md'
                  } ${!isExpanded && 'justify-center'}`}
                onClick={() => setActiveItem(item.path)}
              >
                <div className={`relative ${isExpanded ? 'mr-3' : 'mx-auto'}`}>
                  <item.icon className={`h-6 w-6 ${activeItem === item.path ? 'text-white' : 'text-indigo-300'}`} />
                  {activeItem === item.path && (
                    <span className="absolute top-0 right-0 h-2 w-2 bg-green-400 rounded-full"></span>
                  )}
                </div>
                {isExpanded && (
                  <span className={`transition-all duration-200 ${
                    activeItem === item.path ? 'font-semibold' : 'font-normal'
                  }`}>
                    {item.name}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {!isExpanded && (
        <div className="absolute top-0 left-full ml-2 bg-white p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-indigo-900 font-semibold">ICONST '24</span>
        </div>
      )}
    </nav>
  );
};

export default MainNavigation;