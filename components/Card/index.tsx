import React, { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

interface CardProps {
  icon: StaticImageData;
  heading: string;
  subheading: string;
}

const Card:FC<CardProps> = ({ icon, heading, subheading }) => {
  return (
    <div className="space-y-3 border-0 border-light-blue-400 dark:border-dark-blue-300 rounded-xl shadow-lg p-4 w-full aspect-[4/3]  flex flex-col items-center justify-center">
                <span className="inline-block text-pri">
                <Image src={icon} alt="me" className='max-w-full h-auto object-cover mb-4' />
                </span>
                <p className="text-pri">
                {subheading}
                </p>
              <h1 className="text-xl font-semibold text-sec capitalize ">{heading}</h1>
            </div>
  )
}

export default Card;
