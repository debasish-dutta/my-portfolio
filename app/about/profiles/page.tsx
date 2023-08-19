import { FC } from 'react';
import MenuNavbar from '@/components/PageNavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profiles',
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

// const Profiles: FC = () => {
//   return (
//     <section className="border-2 border-blue-500 min-h-screen">
//       <MenuNavbar active="Profiles"  menuType="about" />
//       {/* Add your content here */}
//     </section>
//   );
// };

// export default Profiles;

export default async function Profiles() {
  return (
    <section className="border-2 border-blue-500 min-h-screen">
      <MenuNavbar active="Profiles"  menuType="about" />

      hhhh
      {/* Add your content here */}
    </section>
  );
}