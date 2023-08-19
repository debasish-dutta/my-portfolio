'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// icons
import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';
import { BsGear } from 'react-icons/bs';

// library
import { cn } from '../../lib/cn';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
  };

  return (
      <div className='flex justify-center w-8 h-8 md:h-max md:w-max mx-auto bg-light-background border-2 border-dark-background rounded-full dark:bg-dark-background dark:border-light-background'>
    {/* <>
        <button
          id='light'
          aria-label='Light Theme'
          className={cn(
            'hover:transition-all w-6 h-6 p-1 rounded-full hover:bg-gray-500 hover:text-white',
            theme === 'light' ? 'bg-gray-500 text-white' : 'text-black'
          )}
          onClick={(e) => setTheme('light')}
        >
          <BsSun />
        </button> */}
        {/* <button
          id='system'
          aria-label='System Theme'
          className={cn(
            'hover:transition-all w-6 h-6 p-1 rounded-full hover:bg-gray-500 hover:text-white',
            theme === 'system' ? 'text-white bg-gray-500 dark:text-white' : 'text-black'
          )}
          onClick={(e) => setTheme('system')}
        >
          <BsGear />
        </button> */}
        {/* <button
          id='dark'
          aria-label='Dark Theme'
          className={cn(
            'hover:transition-all w-6 h-6 p-1 rounded-full hover:bg-gray-500 dark:hover:text-white hover:text-white',
            theme === 'dark' ? 'bg-gray-500 text-white' : 'dark:text-black'
          )}
          onClick={(e) => setTheme('dark')}
        >
          <BsMoonStars />
        </button>
          // </> */}

        <button
            aria-label={`Toggle ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
            className="hover:transition-all md:w-6 md:h-6 md:p-1 rounded-full text-hover"
            onClick={toggleTheme}
        >
            {theme === 'light' ? (
              <BsMoonStars />
              ) : (
                <BsSun />
                )}
        </button>
        </div>
  );
};
