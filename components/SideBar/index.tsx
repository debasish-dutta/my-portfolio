'use client';

import Link from 'next/link';
import { footerItems } from '@/data/constants';
import { StatusButton } from '@/components/StatusButton';
import { Disclosure } from '@headlessui/react';
import Image from "next/image";

import Avatar from "../../public/img/avatar.webp"

import './avatar.css'; // Import the custom CSS file
import './social.css';

type Data = {
  page: {
    id: string;
    name: string;
    url: string;
    time_zone: string;
    updated_at: string;
  };
  components: [
    {
      id: string;
      name: string;
      status: string;
      created_at: string;
      updated_at: string;
      position: number;
      description: string | null;
      showcase: boolean;
      start_date: string;
      group_id: null;
      page_id: string;
      group: boolean;
      only_show_if_degraded: boolean;
    }
  ];
  incidents: [];
  scheduled_maintenances: [];
  status: {
    indicator: string;
    description: string;
  };
};

type Social = {
  name: string;
  svg: React.ReactNode;
  link: string;
}

const SocialButton: React.FC<Social> = ({name, svg, link}) => {
  return (
    <div className='border-0 border-blue-500'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {svg}
      </a>
    </div>
  );
};

// export const SideBar = ({ statusData }: { statusData: Data }) => {
export const SideBar = () => {

  return (
    <aside className='sticky top-0 border-0 border-emerald-400 lg:h-[85vh] flex flex-col items-center justify-center w-full p-4 bg-light-background dark:bg-dark-background'>
      <div className='img-wrap relative'>
        <Image
          src={Avatar}
          alt="avatar"
          className="img"
          layout="intrinsic"
          quality={100}
        />
    </div>
      <div className='py-2 text-center align-center w-full'>
        <h2 className='block text-4xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-sec'>Debasish Dutta</h2>
        <div className='text-sec block text-2xl md:text-sm lg:text-base xl:text-base 2xl:text-lg w-fit mx-auto md:px-2 px-8 rounded-xl bg-blue-300'>Degisnation</div>
        
        <div className="mt-4 md:mt-6">
          <div className="flex mt-4 mx-0 md:-mx-1.5 justify-around social-icons">
            {/* <a className="mx-1.5 text-pri transition-colors duration-300 transform text-hover text-non-active" href="#" target='_blank'>
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
              </svg>
            </a> */}

            {/* <a className="mx-1.5 text-pri transition-colors duration-300 transform text-hover text-non-active" href="#" target='_blank'>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
              </svg>
            </a>

            <a className="mx-1.5 text-pri transition-colors duration-300 transform text-hover text-non-active" href="#" target='_blank'>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
              </svg>
            </a>

            <a className="mx-1.5 text-pri transition-colors duration-300 transform text-hover text-non-active" href="#" target='_blank'>
              <svg className="w-8 h-8 rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" fill="currentColor" />
              </svg>
            </a> */}

          <SocialButton
            name="Twitter"
            svg={
              <svg className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 border-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
              </svg>
            }
            link="#"
          />
          <SocialButton
            name="LinkedIn"
            svg={
              <svg className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
              </svg>
            }
            link="#"
          />
          <SocialButton
            name="faceBook"
            svg={
              <svg className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
              </svg>
            }
            link="#"
          />

          <SocialButton
            name="GitHub"
            svg={
              <svg className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 border-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" fill="currentColor" />
            </svg>
            }
            link="#"
          />


          </div>
        </div>

        <div className="flex flex-col justify-start mb-2 overflow-clip ml-3">
          <div className="flex items-center mt-4 text-non-active">
            <svg className='min-w-[20px]' aria-label="birthday icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></g></svg>
            <h1 className="px-2 text-lg md:text-sm text-sec">20 Aug</h1>
          </div>
          <div className="flex items-center mt-4 text-non-active">
            <svg aria-label="blog icon" className="min-w-[20px] w-5 h-5 fill-current" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill="" d="M10,5a1,1,0,1,0,1,1A1,1,0,0,0,10,5ZM6,5A1,1,0,1,0,7,6,1,1,0,0,0,6,5Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,14,5Zm6-4H4A3,3,0,0,0,1,4V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1Zm1,19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11H21ZM21,9H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1Z"></path>
            </svg>
            <a href="https://www.ddcodingdiary.com" target='_blank'>
              <h1 className="px-2 text-lg md:text-sm md:truncate text-sec text-hover">www.ddcodingdiary.com</h1>
            </a>
          </div>
          <div className="flex md:shrink-0 md:flex-nowrap items-center mt-4 text-non-active">
            <svg className='min-w-[20px]' aria-label="email icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:debasish0dutta@gmail.com" target='_blank' className=''>
              <h1 className="px-2 text-lg md:text-sm md:truncate text-sec text-hover">debasish0dutta@gmail.com</h1>
            </a>
          </div>
          <div className="flex items-center mt-4 text-non-active">
            <svg aria-label="mobile icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="min-w-[20px] feather feather-smartphone "><g><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></g></svg>
            <a href="https://wa.me/+918472084923" target='_blank' className=''>
              <h1 className="px-2 text-lg md:text-sm md:truncate text-sec text-hover">+91 8472084923</h1>
            </a>
          </div>
        </div>

        <a
          href="/assets/DD_Resume.pdf"
          download="DD Resume.pdf" className="mx-auto flex items-center justify-center p-2 md:w-40">
          <div className="border-0 border-light-blue-500 flex items-center justify-center max-w-fit px-2 py-1 my-1  dark:hover:bg-accent rounded-lg shadow-xs cursor-pointer hover:bg-accent bg-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 fill-primary' role="img" viewBox="0 0 24 24" id="airplay"><path fill="#24A6A8" d="M12.83,13.45a1,1,0,0,0-1.66,0l-4,6a1,1,0,0,0,0,1A1,1,0,0,0,8,21h8a1,1,0,0,0,.88-.53,1,1,0,0,0-.05-1ZM9.87,19,12,15.8,14.13,19ZM19,3H5A3,3,0,0,0,2,6v9a3,3,0,0,0,3,3h.85a1,1,0,1,0,0-2H5a1,1,0,0,1-1-1V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1h-.85a1,1,0,0,0,0,2H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Z"></path></svg>
            <span className='text-sm font-medium ml-2'>Download CV</span>
          </div>
        </a>
      </div>
    </aside>
  );
};
