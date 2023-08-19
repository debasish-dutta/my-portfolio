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
        <Heading title="Home" content="Ohaiyoo !! This is Debasish Dutta." />
      </div>
      <div className="border-0 border-amber-200 mx-auto grid gap-4 md:gap-2 xl:gap-6 items-center justify-center mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card icon={location} heading="Guwahati, India" subheading="Currently residing in" />
        <Card icon={coffee} heading="Coffee + Me = Happiness" subheading="Love Coffee" />
        <Card icon={processor} heading="PhD: Passion, Hunger, Dedication" subheading="Coding Epiphanies in" />
        <Card icon={meeting} heading="At times" subheading="Socially Awkward" />
        <Card icon={noodles} heading="Foodie for life" subheading="Did you say food?" />
        <Card icon={web} heading="Ctrl + Shift + Commit" subheading="Advocating for Open Source" />
      </div>
    </>
  );
}
