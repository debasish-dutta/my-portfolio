'use client'
import { FC } from 'react';
import { useRouter } from 'next/navigation'
import { NavLink } from './navlink'; // Import NavLink from the separate file
import { useState, useEffect } from 'react';
import Heading from '@/components/Pagefragments/Heading';
import {Tabs, Tab} from "@nextui-org/react";

import { aboutMenuItems, workMenuItems, milMenuItems } from '@/data/constants';

interface MenuNavbarProps {
   active: string;
   menuType: 'about' | 'work' | 'mil';
}

function MenuNavbar({ active, menuType }: MenuNavbarProps) {
   // const { pathname } = useRouter();
   // const [active, setActive] = useState('')

   // useEffect(() => {
   //    if (pathname === '/') setActive('About')
   //    else if (pathname === '/projects') setActive('Projects')
   //    else if (pathname === '/resume') setActive('Resume')
   // }, [])

   return (
      <div className='flex items-center border-0 border-blue-400 justify-between px-5 py-3 my-3'>
         {/* <span className='text-xl font-bold border-b-4 md:text-2xl border-green-500'>
      {active ? active : 'About'}
      </span> */}
      {menuType === 'about' ? (<Heading title={active ? active : 'Who am I?'} content='' />) : (<Heading title={active ? active : 'My Work'} content='' />)}
         
      {/* <Tabs aria-label="Options" color="primary" variant="bordered">
      {menuType === 'about' ? (
               // Replace with aboutMenuItems
               aboutMenuItems.filter((item) => item.name !== active).map((item, index) => {
                  const Icon = item.icon
                  return (
                  // <li className='text-md' key={`${index}`}>
                  //    <NavLink
                  //       active={active}
                  //       href={item.path}
                  //       exact
                  //       >
                  //       <span className='flex flex-row text-sm items-center justify-center m-1 border-b-2 border-transparent transition duration-300 ease-in-out hover:border-primary-400'><Icon /> {item.name}
                  //       </span>
                  //    </NavLink>
                  // </li>
                   <Tab
                   key={`${index}`}
                   className='transition duration-300 text-hover'
                   title={
                     <div className="flex flex-row text-sm items-center justify-center m-1 border-b-2 border-transparent transition duration-300 ease-in-out hover:border-primary-400"><Icon /> {item.name}
                     </div>
                   }
                 />
               )})
               ): menuType === 'work' ? (
                  workMenuItems.filter((item) => item.name !== active).map((item, index) => {
                     const Icon = item.icon
                     return (
                        <Tab
                   key={`${index}`}
                   className='transition duration-300 text-hover'
                   title={
                     <div className="flex flex-row text-sm items-center justify-center m-1 border-b-2 border-transparent transition duration-300 ease-in-out hover:border-primary-400"><Icon /> {item.name}
                     </div>
                   }
                 />
                     )})
                  ): menuType === 'mil' ? (
                     milMenuItems
                 .filter((item) => item.name !== active)
                 .map((item, index) => {
                  const Icon = item.icon
                  return (
                     <Tab
                   key={`${index}`}
                   className='transition duration-300 text-hover'
                   title={
                     <div className="flex flex-row text-sm items-center justify-center m-1 border-b-2 border-transparent transition duration-300 ease-in-out hover:border-primary-400"><Icon /> {item.name}
                     </div>
                   }
                 />
                  )})
   ): null}
      </Tabs> */}

         <ul className='text-base font-normal md:text-xl flex items-center space-x-4'>
            {menuType === 'about' ? (
               // Replace with aboutMenuItems
               aboutMenuItems.filter((item) => item.name !== active).map((item, index) => {
                  const Icon = item.icon
                  return (<li className='text-md' key={`${index}`}>
                     <NavLink
                        active={active}
                        href={item.path}
                        exact
                        className='transition duration-300 text-hover'
                        >
                        <span className='flex flex-row text-sm items-center justify-center m-1 border-b-2 border-transparent transition duration-300 ease-in-out hover:border-primary-400'><Icon /> {item.name}
                        </span>
                     </NavLink>
                  </li>)
               })
            ) : menuType === 'work' ? (
               // Replace with workMenuItems
               workMenuItems.filter((item) => item.name !== active).map((item, index) => {
                  const Icon = item.icon
                  return (<li className='text-md' key={`${index}`}>
                     <NavLink
                        active={active}
                        href={item.path}
                        exact
                        className='transition duration-300 text-hover'
                     >
                        <span className='flex flex-row text-sm items-center justify-center m-1 border-b-2 border-transparent transition duration-300 ease-in-out hover:border-primary-400'><Icon /> {item.name}
                        </span>
                     </NavLink>
                  </li>
               )})
            ): menuType === 'mil' ? (
               // Replace with milMenuItems
               milMenuItems
                 .filter((item) => item.name !== active)
                 .map((item, index) => {
                  const Icon = item.icon
                  return (
                  <li className='text-md' key={`${index}`}>
                     <NavLink
                       active={active}
                       href={item.path}
                       exact
                       className='transition duration-300 text-hover'
                     >
                       <span className='flex flex-row text-sm items-center justify-center m-1 border-b-2 border-transparent transition duration-300 ease-in-out hover:border-primary-400'><Icon /> {item.name}
                        </span>
                     </NavLink>
                   </li>
                 )})
             ) : null}
         </ul>
      </div>
   );
};

export async function getServerSideProps() {
   return {
      props: {
         active: '', // Set the initial active page here
      },
   };
}

export default MenuNavbar;
