"use client";

import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startValue = 0;
    const increment = targetValue / (duration / 16);
    let currentValue = startValue;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        setCount(targetValue);
        clearInterval(interval);
      } else {
        setCount(Math.floor(currentValue));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [hasStarted, targetValue, duration]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}</span>;
};

export default function SurveyInfo() {
  return (
    <div className="">
     
    </div>
  );
}