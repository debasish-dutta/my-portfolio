import React from 'react';

interface Heading {
    title: string;
    content: string;
}
const Heading: React.FC<Heading> = ({ title, content }) => {
    return (
      <div className='flex justify-items-start align-left flex-col'>
      <h1 className="pb-2 font-bold text-3xl align-bottom text-start">{title}</h1>
      <div className="bg-red-200 h-1.5 w-14 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-5"></div>
      </div>
        <p className='mt-6 text-md text-gray-900 dark:text-[#AAB7D2] md:text-start text-center md:mt-6 lg:text-[22px] lg:leading-[33px]'>
         {content}
        </p>
    </div>
    );
};

export default Heading;
