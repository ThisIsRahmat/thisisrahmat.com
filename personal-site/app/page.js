

import Link from 'next/link'
import {Search, ShoppingBasket, MoveDown, MoveRight  } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'




export default function Page(){
    return (

        <main className=" mx-auto w-full max-w-screen-sm px-8 items-centre md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">

  <div className="flex flex-col space-y-8">

  <h1 className="flex sm:text-[30px] text-[30px] font-bold">
  Hi! I am <span className="text-blue-500 hover:text-red-500 cursor-pointer">Rahmat</span> - a Software Engineer living in the United Kingdom.
</h1>

<div className="text-xl space-y-2">


<p>
    When I am not staring at screens I enjoy reading, listening to podcasts and traveling.
    </p>
<p>
    I am always looking for new book or podcast recommendations. 
    <br/>
    <br/>
    So send me an <Link href="mailto:thisisrahmat@gmail.com" className="hover:underline no-underline hover:text-green-700"> Email</Link> of your favourite reads + listens
</p>

</div>





{/* Recent Projects */}

<div>
<div className="flex items-center">
<h3 className="text-4xl no-underline hover:underline decoration-wavy hover:underline-offset-8 hover:text-green-700">  Selected Projects </h3> 
        </div>
        <div className=" grid grid-cols-1 gap-6 mt-4
                    sm:mt-12
                    lg:grid-cols-2 lg:gap-10
                    xl:grid-cols-3">


        <ProjectCard
                    title="Open Saas Finder"
                    link="projects/OpenSaasFinder"
                    description="A directory for finding Open Saas"
                    color="bg-[#0E1F38]"
                    logo=""
                    logoHeight="h-[33%]"
                    stack="Next.js"
                />
  </div>
</div>

{/* Recent Writings */}

<div>
<div className="flex items-center">
<h3 className="text-4xl no-underline hover:underline decoration-wavy hover:underline-offset-8 hover:text-green-700"> Selected Writings </h3> 
        </div>
{/* <ProjectCard>

</ProjectCard> */}

</div>

</div>
    </main>
        )}