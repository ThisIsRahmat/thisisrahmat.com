

import Link from 'next/link'
import {Search, ShoppingBasket, MoveDown, MoveRight, MoveUpRight} from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import Image from 'next/image'




export default function Page(){
    return (

        <main >

<div className="py-4 flex sm:flex-col  flex-col-reverse relative">
  {/* <Image
      src="/../assets/profile.jpg"
      width={500}
      height={500}
      alt="Picture of the site owner"
    /> */}

    
               
<div className="py-4 sm:pl-96 flex-row-reverse gap-y-8 sticky top-0 end-0 ">

<div className="grid  grid-flow-col grid-rows-1">

  <div className="row-start-1 row-end-4 ">

<p className="  sm:pl-32 sm:text-[20px] text-[15px]">

    This is my corner of the internet for talking about my technichal and non-technichal interests, unbound to any algorithim.
</p>
</div>
</div>





</div>
<h2 className=" flex-inline sm:text-[140px] md:text-[80px] text-[40px] font-bold ">Rahmat Junaid!</h2>

<p className="font-semibold pt-4 text-s sm:text-lg ">
 
🚧 🚧 <span className="underline "> This site is built with Next.js + Tailwind and is a current work in progress</span>  🚧 🚧

</p>
</div>
<div className="">




{/*  Projects */}


<div className="pb-4">
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

      <ProjectCard
        title="OpenSaas Finder"
        description="A directory for finding OpenSource alternatives to common Saas products"
        link="https://opensaasfinder.com/"
        icon="Search"
      />

<ProjectCard
        title="StudyWiz"
        description=" AI generated flashcards built with openAI’s GPT and Nextjs(Javascript)"
        link="https://www.studywiz.co/"
        icon="Search"
      />

{/* <ProjectCard
        title="Expense Crunch"
        description=" A price comparison site for finding the best deals on your weekly shop"
        link="http://expensecrunch.com/"
        icon="Search"
      /> */}




  </div>
  

  </div>




{/* Contact  */}



<div className="border-[#247c5c] border-t-4 flex items-center justify-between">
  <h2 className="text-2xl">Contact</h2>
  <div className="flex items-center ">
    

  
  </div>
</div>
</div>


<div className="sm:flex sm:pt-20 px-2 flex flex-row">
<div className="sm:text-[120px] sm:w-4/5 invisible sm:visible ">

Get in touch: 

</div>

<div className="flex-col sm:w-1/5 sm:px-80 sm:text-[20px] pt-4 text-lg flex gap-y-2 gap-x-8">



<div className="flex items-center hover:underline-offset-2 space-x-2">

    <Link href="mailto:thisisrahmat@gmail.com">
    <div className="flex items-center  ">
      <span className=""> Email</span>
      <MoveUpRight size={18} />
    </div>
    </Link>
    </div>

    <div className="flex items-center space-x-2 ">

    <Link href="https://github.com/ThisIsRahmat">
    <div className="flex items-center ">
      <span className=""> Github</span>
      <MoveUpRight size={18} />
    </div>
    </Link>
    </div>
 
    <div className="flex items-center space-x-2  ">
    <Link href="https://read.cv/rahmat">
    <div className="flex items-center  ">
      <span className=""> read.cv</span>
      <MoveUpRight size={18} />
    </div>
    </Link>
    </div>
  </div>
  </div>


    </main>
        )}