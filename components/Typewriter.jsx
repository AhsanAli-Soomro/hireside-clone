"use client"
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {
  return (
    <div>
        <Typewriter
          words={['love!', 'deserve!' ]}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={2000}
        />
    </div>
  );
};

export default TypewriterText;
