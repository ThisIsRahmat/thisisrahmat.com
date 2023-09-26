

import Link from 'next/link'
import {Search, ShoppingBasket, MoveDown, MoveRight  } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import Image from 'next/image'




export default function Page(){
    return (

        <main >

<div className="py-10 flex flex-inline">
  {/* <Image
      src="/../assets/profile.jpg"
      width={500}
      height={500}
      alt="Picture of the site owner"
    /> */}
                <h2 className=" sm:text-[40px] text-[20px] font-bold ">Hi! My name is Rahmat Junaid</h2>
<div className="py-4 ">
<p className=" sm:text-[20px] text-[15px]">
I am a Software Engineer with experience working in Platform/Infra teams with the tools: Golang, Javascript and Typescript
</p>

<p className=" sm:text-[20px] text-[15px]">

    This is my corner of the internet for talking about my technichal and non-technichal interests, unbound to any algorithims.
</p>
</div>
</div>
<div className="space-y-60">


{/* Selected Projects  */}

<div className="border-t border-slate-600 flex items-center justify-between">
  <h2 className="text-2xl">Projects</h2>
  <div className="flex items-center ">
    
 <div className="flex items-center no-underline hover:underline  hover:text-green-700">
  {/* <Link href="/projects" title="All Projects">
    <div className="flex items-center space-x-2">
      <span className="">All Projects</span>
      <MoveRight />
    </div>
  </Link> */}

  {/* <ProjectCard/> */}

  <ProjectCard
  
  />
</div>

  </div>
</div>


{/* Selected Writings  */}



<div className="border-t border-slate-600 flex items-center justify-between">
  <h2 className="text-2xl">Writings</h2>
  <div className="flex items-center ">
    
    <div className="flex items-center no-underline hover:underline  hover:text-green-700">
    {/* <Link href="/writing" title="All Writings">
    <div className="flex items-center space-x-2">
      <span className="">All Writings</span>
      <MoveRight />
    </div>
  </Link> */}
    </div>
  </div>
</div>



{/* Contact  */}



<div className="border-t border-slate-600 flex items-center justify-between">
  <h2 className="text-2xl">Contact</h2>
  <div className="flex items-center ">
    
    <div className="flex items-center no-underline hover:underline  hover:text-green-700">
    {/* <Link href="/writing" title="All Writings">
    <div className="flex items-center space-x-2">
      <span className="">All Writings</span>
      <MoveRight />
    </div>
  </Link> */}
    </div>
  </div>
</div>
</div>




    </main>
        )}