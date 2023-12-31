'use client';

import Link from 'next/link';
import { menuItems } from '@/data/constants';
import { NavLink } from './navlink';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// components
import { ThemeSwitch } from '@/components/ThemeSwitch';

export function NavBar() {
  let [isOpen, setIsOpen] = useState(false); // state of mobile menu

  return (
    <>
      {/*
        Place nav inside header 
      */}
          <div className='ml-2 -my-1 -mr-1'>
            <button
              type='button'
              onClick={() => setIsOpen(true)}
              className='flex items-center justify-center w-8 h-8 transition duration-300 text-pri text-hover md:hidden focus:outline-none'
            >
              <span className='sr-only'>Navigation</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
      <header className='border-0 border-blue-500 container rounded-2xl hidden md:flex items-center justify-end bg-light-background dark:bg-dark-background px-4 py-4 mx-auto font-semibold leading-6 lg:py-6'>
        <div className='flex items-center'>

          {/*
            Main Nav
          */}
          <nav className='hidden md:flex'>
            <ul className='flex items-center space-x-8'>
              {menuItems.map((item, index) => {
                return (
                  <li key={`${index}`}>
                    <NavLink href={item.path} exact className='transition duration-300 text-hover'>
                      {item.name}
                      {item.new ? (
                        <span className='ml-2 font-medium text-xs leading-5 rounded-full text-new px-2 py-0.5 '>
                          New
                        </span>
                      ) : null}
                    </NavLink>
                  </li>
                );
              })}
              {/* <li className='text-base'>
                <ThemeSwitch />
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      <div className='border-0 border-emerald-500 ml-10 my-auto text-base hidden md:block justify-end mr-4'>
        <ThemeSwitch />
      </div>
        
      {/*
        Pop over mobile menu
      */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            {/* background while modal is visible */}
            <div className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='fixed max-w-xs p-6 ml-4 text-xl font-semibold bg-white rounded-lg shadow-lg top-2 right-2 text-pri dark:bg-slate-800 dark:highlight-white/5'>
              <button
                type='button'
                onClick={() => setIsOpen(false)}
                className='absolute flex items-center justify-center w-8 h-8 top-2 right-2 text-pri text-hover focus:outline-none'
                tabIndex={0}
              >
                <span className='sr-only'>Close navigation</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
              <ul className='mt-4 space-y-6'>
                {menuItems.map((item, index) => {
                  return (
                    <li key={`${index}`}>
                      <NavLink
                        href={item.path}
                        exact
                        className='px-8 text-hover'
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {item.new ? (
                          <span className='ml-2 font-medium text-xs leading-5 rounded-full px-2 py-0.5 text-new'>
                            New
                          </span>
                        ) : null}
                      </NavLink>
                      <div className='mt-5 border-b border-gray-300 dark:border-gray-500'></div>
                    </li>
                  );
                })}
                <li className='text-base border-0 border-blue-500 mx-auto'>
                  <ThemeSwitch />
                </li>
              </ul>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
