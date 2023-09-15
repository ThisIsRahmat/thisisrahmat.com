

import Link from 'next/link'
// import { Home, Github, Twitter, FileText } from 'lucide-react';
import { Github, Twitter, Mail, Linkedin, FileText, MoveUpRight } from 'lucide-react';

const navigation = [
    { name: 'Rahmat', href: '/' },

      { name: 'Projects', href: '/projects' },
      { name: 'Writings', href: '/writings' },
      // { name: 'Books', href: '/books' },
      // { name: 'Travel', href: '/travel' },
            // { name: 'Bookmarks', href: '/bookmarks' },
]

export default function Header() {


  return (

    // bg for dclicked link: bg-[#2d9ad1]
    <header className="bg-white">

      <nav className=" relative top-0  z-10 flex items-center justify-between py-4 px-8 md:justify-between">
        <div className="flex items-center gap-x-2">

  

          <div className="hidden lg:flex  ">
          
            {navigation.map((item) => (
              
              <Link key={item.name} href={item.href} className="py-1 px-2 sm:text-[18px] text-m leading-6 text-gray-900">
               <button className="border border-green-600 hover:bg-green-700 hover:text-white px-2 py-1 rounded-full">
                {item.name}
                </button>
              </Link>
              
            ))}
       


          </div> 

          <div className="right-0 absolute px-4">
  <ul className="flex justify-center text-[16px] space-x-4">
    <li className="flex items-center ">
      <Link href="mailto:thisisrahmat@gmail.com"  text="hoover-type-toolkit" title="Email">
        <div className="flex items-center">
         < Mail />
        </div>
      </Link>
    </li>
    <li className="flex items-center ">
      <Link href="https://github.com/ThisIsRahmat" text="hoover-type-toolkit" title="GitHub">
        <div className="flex items-center">
        < Github />
        </div>
      </Link>
    </li>
    <li className="flex items-center ">
      <Link href="https://www.linkedin.com/in/rahmat-junaid/"  text="hoover-type-toolkit" title="Resume">
        <div className="flex items-center">
        < FileText />
        </div>
      </Link>
    </li>
  </ul>
</div>
     
        </div>
   
      
      </nav>
 
    </header>
  )
}
