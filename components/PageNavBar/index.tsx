'use client'
import { FC } from 'react';
import { useRouter } from 'next/navigation'
import { NavLink } from './navlink'; // Import NavLink from the separate file
import { useState, useEffect } from 'react';
import Heading from '@/components/Pagefragments/Heading';

import { aboutMenuItems, workMenuItems, milMenuItems } from '@/data/constants';

interface MenuNavbarProps {
   active: string;
   menuType: 'about' | 'work' | 'mil';
}

const MenuNavbar: React.FC<MenuNavbarProps> = ({ active, menuType }) => {
   // const { pathname } = useRouter();
   // const [active, setActive] = useState('')

   // useEffect(() => {
   //    if (pathname === '/') setActive('About')
   //    else if (pathname === '/projects') setActive('Projects')
   //    else if (pathname === '/resume') setActive('Resume')
   // }, [])

   return (
      <div className='flex items-center justify-between px-5 py-3 my-3'>
         {/* <span className='text-xl font-bold border-b-4 md:text-2xl border-green-500'>
      {active ? active : 'About'}
      </span> */}
      {menuType === 'about' ? (<Heading title={active ? active : 'About'} content='' />) : (<Heading title={active ? active : 'My Work'} content='' />)}
         
         <ul className='text-base font-normal md:text-xl flex items-center space-x-4'>
            {menuType === 'about' ? (
               // Replace with aboutMenuItems
               aboutMenuItems.filter((item) => item.name !== active).map((item, index) => (
                  <li className='text-s' key={`${index}`}>
                     <NavLink
                        active={active}
                        href={item.path}
                        exact
                        className='transition duration-300 text-hover'
                        >
                        {item.name}
                     </NavLink>
                  </li>
               ))
            ) : menuType === 'work' ? (
               // Replace with workMenuItems
               workMenuItems.filter((item) => item.name !== active).map((item, index) => (
                  <li className='text-md' key={`${index}`}>
                     <NavLink
                        active={active}
                        href={item.path}
                        exact
                        className='transition duration-300 text-hover'
                     >
                        {item.name}
                     </NavLink>
                  </li>
               ))
            ): menuType === 'mil' ? (
               // Replace with milMenuItems
               milMenuItems
                 .filter((item) => item.name !== active)
                 .map((item, index) => (
                   <li className='text-md' key={`${index}`}>
                     <NavLink
                       active={active}
                       href={item.path}
                       exact
                       className='transition duration-300 text-hover'
                     >
                       {item.name}
                     </NavLink>
                   </li>
                 ))
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
