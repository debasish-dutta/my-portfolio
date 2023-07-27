import Card from "@/components/Card";
import Image from 'next/image'

import coffee from '../public/coffee.png'
import location from '../public/location.png'
import meeting from '../public/meeting.png'
import noodles from '../public/noodles.png'
import processor from '../public/processor.png'
import web from '../public/web.png'
import Heading from "@/components/Pagefragments/Heading";

export default async function Index() {
  return (
    <>
      <div className='border-0 border-red-500 w-full'>
        <Heading title="Home" content=" From inception to product market fit and beyond,
          logging is now a solved problem for your product." />
      </div>
      <div className="border-0 border-amber-200 mx-auto grid gap-4 md:gap-2 xl:gap-6 items-center justify-center mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card icon={coffee} heading="Card 1" subheading="This is card 1" />
        <Card icon={location} heading="Card 2" subheading="This is card 2" />
        <Card icon={meeting} heading="Card 3" subheading="This is card 3" />
        <Card icon={noodles} heading="Card 4" subheading="This is card 4" />
        <Card icon={processor} heading="Card 5" subheading="This is card 5" />
        <Card icon={web} heading="Card 6" subheading="This is card 6" />
      </div>
    </>
  );
}
