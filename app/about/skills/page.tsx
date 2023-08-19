import { FC, use } from 'react';
import MenuNavbar from '@/components/PageNavBar';
import type { Metadata } from 'next';

import { getSkills } from '@/services/index';

export const metadata: Metadata = {
  title: 'Projects',
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

// async function skills() {
//   return await getSkills();
// }

// const SkillsPage: FC = () => {
//   const ss = use(skills());
//   // console.log(ss[0].name)
//   return (
//     <section className="border-2 border-blue-500 min-h-screen">
//       <MenuNavbar active="Skills"  menuType="about" />
//       {ss.map(i => <div key={i.name}>{i.name} ==> {i.level}</div>)}
//     </section>
//   );
// };

// export default SkillsPage;

export default async function Skills() {
  const ss = await getSkills();
  return (
        <section className="border-2 border-blue-500 min-h-[80vh]">
          <MenuNavbar active="Skills"  menuType="about" />
          {/* {ss.map((i) => <div key={i.name}>{i.name} == {i.level}</div>)} */}
        </section>
      );
}