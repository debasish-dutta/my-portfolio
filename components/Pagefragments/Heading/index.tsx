import React from 'react';

interface Heading {
    title: string;
    content: string;
}
const Heading: React.FC<Heading> = ({ title, content }) => {
    return (
      <div className='flex justify-items-start align-left flex-col'>
      <h1 className="pb-2 font-bold text-3xl align-bottom text-start text-sec">{title}</h1>
      <div className="bg-secondary h-1.5 w-14 rounded-full overflow-hidden">
        <div className="bg-primary h-full w-5"></div>
      </div>
        <p className='mt-6 text-md text-pri md:text-start text-center md:mt-6 lg:text-[15px] lg:leading-[22px]'>
         {content}
        </p>
    </div>
    );
};

export default Heading;
