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

export default async function About() {
  return (
    <section className="border-0 border-blue-500 min-h-[80vh] bg-light-background dark:bg-dark-background">
      <MenuNavbar active="" menuType="about" />
      <p>
      I`m a Data Scientist and Machine Learning Enthusiast, well versed in programming and love to experiment with different languages and ML libaries. I have been working with Machine learning and Deep learning since 2019. I have built many different ML, DL & TL models and have a well-to-do experience in data analytics and visualization too.
      </p>
    </section>
  );
}
