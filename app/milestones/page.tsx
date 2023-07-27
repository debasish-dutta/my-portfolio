import Notebook from '@/components/Notebook';

// types
import type { Metadata } from 'next';
import Heading from '@/components/Pagefragments/Heading';
import MenuNavbar from '@/components/PageNavBar';
import { GetStaticPropsContext } from 'next';

export const metadata: Metadata = {
  title: 'My WOrk',
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

export default function Milestones() {
  return (
    <section className="border-2 border-blue-500 min-h-screen bg-white dark:bg-gray-900">
      <MenuNavbar active="Milestones" menuType="mil" />

    </section>
  );
}
