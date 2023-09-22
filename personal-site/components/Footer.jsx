


"use client"

import Link from 'next/link';

import { MoveUpRight  } from 'lucide-react';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear(); 

  return (
    <footer className="pb-2 absolute bottom-0 inset-x-0 bg-[#247c5c] text-white">
<nav className=" px-4  py-2 text-center lg:flex lg:justify-between">
  {/* Social Media Links */}
  <ul className="flex justify-center sm:text-[16px] text-sm sm:space-x-6 space-x-2 mb-4 lg:mb-0">
    <li className="flex items-center no-underline hover:underline decoration-wavy hover:text-black">
      <Link href="mailto:thisisrahmat@gmail.com" title="Email">
        <div className="flex items-center">
          Email <MoveUpRight size={16} />
        </div>
      </Link>
    </li>
    <li className="flex items-center no-underline hover:underline decoration-wavy hover:text-black ">
      <Link href="https://github.com/ThisIsRahmat" title="GitHub">
        <div className="flex items-center">
          Github <MoveUpRight size={16} />
        </div>
      </Link>
    </li>
    <li className="flex items-center no-underline hover:underline decoration-wavy hover:text-black">
      <Link href="https://read.cv/rahmat" title="Resume">
        <div className="flex items-center">
          read.cv <MoveUpRight size={16} />
        </div>
      </Link>
    </li>
  </ul>

  {/* Copyright Text */}
  <p className="text-sm sm:text-[16px] ">
    &copy; Rahmat Junaid {year} All rights reserved.
  </p>
</nav>


    </footer>
  );
}
