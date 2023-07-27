// types
import type { Metadata } from 'next';

import Heading from '@/components/Pagefragments/Heading';

export const metadata: Metadata = {
  title: 'Contact',
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

export default function Index() {
  return <>
  <Heading title='projects' content=''/>;
  </>
}
