

import Link from 'next/link'
import {Search, ShoppingBasket, MoveDown, MoveRight} from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import Image from 'next/image'




export default function Page(){
    return (

        <main >

<div className="py-10 grid grid-col">
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
<div className="">




{/*  Projects */}


<div>
  {/* Projects Header */}
<div className="border-[#247c5c] border-t-4  flex items-center justify-between">
  <h2 className="text-2xl">Projects</h2>
  <div className="flex items-center ">
    
    <div className="flex items-center no-underline hover:underline  hover:text-green-700">
   {/* <Link href="/writing" title="All Writings">
    <div className="flex items-center space-x-2">
      <span className="">All Projects</span>
      <MoveRight />
    </div>
  </Link> */}





    </div>
  </div>
</div>

{/* 
<div className="grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rol-3 gap-2 pb-2 sm:py-8  "> */}

<div className="grid pt-2 pb-2 grid-flow-row sm:grid-cols-4 sm:grid-flow-col sm:auto-col-max auto-row-max gap-2">

{/* Project Cards */}
<div className="w-full rounded-xl px-4  border-2 sm:h-full h-32 lg:w-full sm:max-w-1/4 border-[#247c5c]">

  <div className="md:pt-4 py-4">
<Link href="https://opensaasfinder.com/" className="flex items-center">
  <Search className="mr-2"size={16} />

  OpenSaas Finder
</Link>
<p className="text-sm">
A directory for finding OpenSource alternatives to common Saas products
</p>
  </div>
  </div>




  <div className="rounded-xl px-4  border-2  sm:h-full h-32 lg:w-full sm:max-w-1/4 border-[#247c5c]">

  <div className="pt-4">
<Link href="https://opensaasfinder.com/" className="flex items-center">
<Search className="mr-2"size={16} />

  OpenSaas Finder
</Link>
<p className="text-sm">
A directory for finding OpenSource alternatives to common Saas products
</p>
  </div>
  </div>
  </div>
  

  </div>

<div className="border-[#247c5c] border-t-4  flex items-center justify-between">
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



<div className="border-[#247c5c] border-t-4 flex items-center justify-between">
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