
"use client"

import Link from 'next/link';
import { IconBrandGithub, IconMail, IconFileDescription } from '@tabler/icons-react';

import { MoveUpRight  } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  const date = new Date();
  const year = date.getFullYear(); 

  return (
    <footer className="sm:pb-8 pb-4 sticky top-[100vh]">


<nav className="  flex items-center border-[#247c5c] border-t-2  justify-between pt-4  sm:py-2  md:justify-between">
    {/* <nav className="  border-[#247c5c] border-b-4 py-2 text-center lg:flex lg:justify-between max-w-7xl mx-auto"> */}
  {/* Social Media Links */}
    

  {/* Copyright Text */}
  <p className="text-[16px] sm:text-[16px] ">
    &copy; Rahmat Junaid {year} 
  </p>
</nav>


    </footer>
  );
}
