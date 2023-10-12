

import Link from 'next/link'
// import { Home, Github, Twitter, FileText } from 'lucide-react';
import { Github, Twitter, Mail, Linkedin, FileText, MoveUpRight } from 'lucide-react';

const navigation = [
   

      // { name: 'Projects', href: '/projects' },
      // { name: 'Writings', href: '/writings' },
      // { name: 'Books', href: '/books' },
      // { name: 'Travel', href: '/travel' },
            // { name: 'Bookmarks', href: '/bookmarks' },
                  // { name: 'Bookmarks', href: '/bookmarks' },
]

export default function Header() {


  return (

    // bg for dclicked link: bg-[#2d9ad1]
    <header className=" sm:pt-8">

      <nav className=" relative pb-2 flex  border-[#247c5c] border-t-4  justify-between   sm:py-2  md:justify-between">
        <div className="flex  items-center gap-x-2">

  {/* <div>
    <Link href="/">
    <h1 className="text-3xl" > Rahmat. </h1>
    </Link>
  </div> */}

          <div className=" lg:flex  ">
  
              <Link href="/"  className=" hover:underline no-underline  py-1 px-2 sm:text-[18px] text-m leading-6">
              
               Rahmat Junaid
      
              </Link>
   
       


          </div> 

          <div className="right-0 absolute ">
    {navigation.map((item) => (
              
              <Link key={item.name} href={item.href} className="py-1 px-2 sm:text-[18px] hover:underline no-underline text-m leading-6">
               {/* <button className="border border-green-600 hover:bg-green-700 hover:text-white px-2 py-1 rounded-full"> */}
                {item.name}
                {/* </button> */}
              </Link>
              
            ))}
</div>
     
        </div>
   
      
      </nav>
 
    </header>
  )
}
