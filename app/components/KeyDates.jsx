'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const KeyDates = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const conferenceDate = new Date('2024-08-19T00:00:00'); // August 19, 2024

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = conferenceDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dates = [
    { date: 'July 26, 2024', event: 'Abstract Submission Deadline', icon: Calendar },
    { date: 'August 5, 2024', event: 'Notification of Acceptance', icon: Clock },
    { date: 'August 12, 2024', event: 'Early Bird Registration Deadline', icon: Calendar },
    { date: 'August 19, 2024', event: 'Conference Start', icon: Calendar },
    { date: 'August 22, 2024', event: 'Conference End', icon: Clock },
    { date: 'September 15, 2024', event: 'Full Paper Submission for Proceedings', icon: Calendar },
  ];

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-green-300 font-semibold tracking-wide uppercase">Important Dates</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Key Dates for ICONST  `&apos;`24
          </p>
          <p className="mt-4 max-w-2xl text-xl text-green-100 lg:mx-auto">
            Mark your calendar with these crucial deadlines and events
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {dates.map((item, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium">{item.event}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-green-100">
                  {item.date}
                </dd>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 transition duration-150 ease-in-out"
          >
            Add to Calendar
            <Calendar className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 bg-green-700 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="flex items-center justify-center">
              <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-green-100 text-green-600">
                Countdown to Conference
              </h3>
            </div>
            <div className="mt-4 flex justify-center text-4xl leading-none font-extrabold">
              <div className="flex flex-col items-center mx-2">
                <span>{countdown.days}</span>
                <span className="text-sm font-medium mt-2">Days</span>
              </div>
              <div className="flex flex-col items-center mx-2">
                <span>{countdown.hours}</span>
                <span className="text-sm font-medium mt-2">Hours</span>
              </div>
              <div className="flex flex-col items-center mx-2">
                <span>{countdown.minutes}</span>
                <span className="text-sm font-medium mt-2">Minutes</span>
              </div>
              <div className="flex flex-col items-center mx-2">
                <span>{countdown.seconds}</span>
                <span className="text-sm font-medium mt-2">Seconds</span>
              </div>
            </div>
            <p className="mt-5 text-lg text-center text-green-100">
              Until ICONST  `&apos;`24 kicks off!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDates;