


"use client"

import Link from 'next/link';

import { MoveUpRight  } from 'lucide-react';


export default function Footer() {
  const date = new Date();
  const year = date.getFullYear(); 
  return (
    <footer className="bg-white  border-blue-600 border-t bottom-0 inset-x-0  px-4 absolute">
      <div className="flex flex-inline  space-x-3 sm:py-6 lg:px-4 ">
     

     


      <div>
  <ul className="flex justify-center text-[16px] space-x-6">
    <li className="flex items-center no-underline hover:underline decoration-wavy ">
      <Link href="mailto:thisisrahmat@gmail.com"  title="Email">
        <div className="flex items-center">
          Email <MoveUpRight size={16} />
        </div>
      </Link>
    </li>
    <li className="flex items-center no-underline hover:underline decoration-wavy ">
      <Link href="https://github.com/ThisIsRahmat"  title="GitHub">
        <div className="flex items-center">
          Github <MoveUpRight size={16} />
        </div>
      </Link>
    </li>
    <li className="flex items-center no-underline hover:underline decoration-wavy">
      <Link href="https://www.linkedin.com/in/rahmat-junaid/" title="Resume">
        <div className="flex items-center">
          read.cv <MoveUpRight size={16} />
        </div>
      </Link>
    </li>
  </ul>
</div>


<div className="absolute right-0 flex">
  <Link href="#" className="no-underline hover:underline-offset-4 hover:underline decoration-wavy">
  Changelog
  </Link>
        <p className="  sm:flex  sm:space-x-12  px-4 sm:text-[15px] text-[12px] text-left">
        &copy; Rahmat Junaid {year}
        </p>
        </div>
      </div>
   
    </footer>
  );
}
