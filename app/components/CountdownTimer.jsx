// components/CountdownTimer.js
'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the date to count down to (May 2, 2023)
  const targetDate = new Date("August 20, 2024 00:00:00").getTime();

  // Initialize the state for the countdown time
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Update the countdown time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate the remaining time
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='my-5'> 

       <h2 className="text-3xl font-bold mb-2 text-center uppercase">Countdown to Time</h2>


      <div className="flex items-center justify-center gap-3 md:gap-6 mt-6">
        <div className='bg-black w-[5rem] md:w-[7rem] p-3 text-white text-center' elevation={3}>
            <div className=" font-extrabold text-[20px] md:text-[40px]">{countdown.days}</div>
            <p className=" font-semibold text-[16px] md:text-[20px]">Days</p>
        </div>
            <div className=" font-extrabold text-[40px]">:</div>
        <div className='bg-black w-[5rem] md:w-[7rem] p-3 text-white text-center' elevation={3}>
            <div className=" font-extrabold text-[20px] md:text-[40px]">{countdown.hours}</div>
            <p className=" font-semibold text-[16px] md:text-[20px]">hours</p>
        </div>
        <div className=" font-extrabold text-[40px]">:</div>
        <div className='bg-black w-[5rem] md:w-[7rem] p-3 text-white text-center' elevation={3}>
            <div className=" font-extrabold text-[20px] md:text-[40px]">{countdown.minutes}</div>
            <p className=" font-semibold text-[16px] md:text-[20px]">minutes</p>
        </div>
        <div className=" font-extrabold text-[40px]">:</div>
        <div className='bg-black w-[5rem] md:w-[7rem] p-3 text-white text-center' elevation={3}>
            <div className=" font-extrabold text-[20px] md:text-[40px]">{countdown.seconds}</div>
            <p className=" font-semibold text-[16px] md:text-[20px]">seconds</p>
        </div>


      </div>
    </div>
  );
};

export default CountdownTimer;


