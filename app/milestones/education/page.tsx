import { FC } from 'react';
import MenuNavbar from '@/components/PageNavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education',
  // description: 'NextJS + TailwindCSS minimalist starter kit',
  // openGraph: {
  //   title: 'NextJS + TailwindCSS minimalist starter kit',
  //   description: 'The React Framework for the Web',
  //   url: 'https://nextjs.org',
  //   siteName: 'Next.js',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/og.png',
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   locale: 'en-US',
  //   type: 'website',
  // },
};

const Achivm: FC = () => {
  return (
    <section className="border-2 border-blue-500 min-h-screen bg-white dark:bg-gray-900">
      <MenuNavbar active="Education"  menuType="mil" />
      {/* Add your content here */}
    </section>
  );
};

export default Achivm;
