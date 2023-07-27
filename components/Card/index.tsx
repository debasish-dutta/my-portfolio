import React, { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

interface CardProps {
  icon: StaticImageData;
  heading: string;
  subheading: string;
}

const Card:FC<CardProps> = ({ icon, heading, subheading }) => {
  return (
    <div className="space-y-3 border-0 border-blue-400 dark:border-blue-300 rounded-xl shadow-md p-4 w-full flex flex-col items-center justify-center">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                <Image src={icon} alt="me" className='max-w-full h-auto object-cover mb-4' />
                </span>
                <p className="text-gray-500 dark:text-gray-300">
                {subheading}
                </p>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{heading}</h1>
            </div>
  )
}

export default Card;
