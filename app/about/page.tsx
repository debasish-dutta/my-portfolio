import Notebook from '@/components/Notebook';

// types
import type { Metadata } from 'next';
import Heading from '@/components/Pagefragments/Heading';
import MenuNavbar from '@/components/PageNavBar';
import { GetStaticPropsContext } from 'next';

export const metadata: Metadata = {
  title: 'About',
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
interface AboutPageProps {
  active: string;
}

export default function About() {
  return (
    <section className="border-2 border-blue-500 min-h-screen bg-background dark:bg-dark-background">
      <MenuNavbar active="" menuType="about" />

    </section>
  );
}
