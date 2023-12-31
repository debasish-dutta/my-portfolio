declare type Locale = string;

interface Meta {
  URL: string | URL;
  siteName: string;
  title?: string;
  description?: string;
  themeColor?: string;
  backgroundColor?: string;
  og: {
    locale?: Locale;
    type?: 'website';
    ogImage: string | URL;
    width?: number;
    height?: number;
  };
  twitter: {
    card?: string;
    site?: string;
  };
}

// Nullish coalescing: the `??` operator is a way to “fall back” to
// a default value when dealing with `null` or `undefined`.

import { BsFillGearFill, BsGraphUp, BsFillPersonLinesFill, BsGlobe2, BsStars } from 'react-icons/bs'
import { FcBriefcase, FcOpenedFolder } from "react-icons/fc";
import { GiBullseye, GiRibbonMedal, GiAlienFire } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
// Best approach: create a config file in your project where you export an
// object containing all configuration values for your project. There, you
// can set default values for variables coming from the environment. In this way,
// you guarantee a value will be present for the execution of your program:

export const config = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  openAIKey: process.env.OPENAI_API_KEY ?? '',
  statusPage: process.env.STATUS_PAGE_ID ?? '',
};

// Our basic SEO data
export const meta: Meta = {
  URL: 'https://www.dreamaweso.me',
  siteName: 'Debasish Dutta',
  title: '',
  description:
    '',
  themeColor: '#F5E1E6',
  backgroundColor: '#F5E1E6',
  og: {
    locale: 'en-US',
    type: 'website',
    ogImage: '/ogimage.jpg',
    width: 1200,
    height: 630,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@debasishdutta',
  },
};

export const menuItems = [
  { path: '/', name: 'Home', new: false },
  { path: '/about', name: 'About', new: false },
  { path: '/my-work', name: 'My Work', new: false },
  { path: '/milestones', name: 'Milestones', new: false },
  { path: '/contact', name: 'Contact', new: false },
];

export const aboutMenuItems = [
  { path: '/about', name: 'Who am I?', new: false, icon: BsFillPersonLinesFill },
  { path: '/about/skills', name: 'Skills', new: false, icon: BsFillGearFill  },
  { path: '/about/stats', name: 'Stats', new: false , icon: BsGraphUp},
  { path: '/about/profiles', name: 'Profiles', new: false, icon: BsGlobe2 },
]

export const workMenuItems = [
  { path: '/my-work', name: 'My Work', new: false, icon: FcBriefcase },
  { path: '/my-work/experience', name: 'Experience', new: false, icon: GiAlienFire},
  { path: '/my-work/projects', name: 'Projects', new: false, icon:FcOpenedFolder },
  { path: '/my-work/publications', name: 'Publications', new: false, icon: GiAlienFire},
  // { path: '/my-work/certifications', name: 'Certifications', new: false },
  // { path: '/my-work/achivements', name: 'Achivements', new: false },
]

export const milMenuItems = [
  { path: '/milestones', name: 'Milestones', new: false, icon: GiBullseye},
  { path: '/milestones/education', name: 'Education', new: false, icon: HiAcademicCap},
  { path: '/milestones/certifications', name: 'Certifications', new: false, icon: GiRibbonMedal},
  { path: '/milestones/achivements', name: 'Achivements', new: false, icon: BsStars},
]

export const footerItems = {
  resources: [
    { path: '/', name: 'Documentation', internal: true },
    { path: '/', name: 'Support', internal: true },
    { path: '/', name: 'Contact Us', internal: true },
  ],
  company: [
    { path: '/', name: 'Home', internal: true },
    { path: '/blog', name: 'Blog', internal: true },
    { path: '/', name: 'Careers', internal: true },
  ],
  legal: [
    { path: '/privacy', name: 'Privacy Policy', internal: true },
    { path: '/terms', name: 'Terms of Service', internal: true },
    { path: '/cookies', name: 'Cookies', internal: true },
  ],
};
