// import { Home } from 'lucide-react';
// import Link from 'next/link'

// const navigation = [

//   { name: 'Books', href: '/books' },
//   { name: 'Projects', href: '/projects' },
//   { name: 'Writing', href: '/writing' },
// ]

// export default function Header() {


//   return (
//     <header className="bg-white">
//       <nav className="border-2 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//         <div className="flex items-center gap-x-12">
//           <div >
//             <button className=" border-2 rounded-lg  lg:flex lg:gap-x-4 gap-x-4 border-slate-200 px-2 py-2">
              
//               <Link href="/">  <Home/> </Link> 
     
//             {navigation.map((item) => (
//               <Link key={item.name} href={item.href} className=" text-sm leading-4 text-gray-700 pt-2">
//                 {item.name}
//               </Link>
//             ))}
          
//             </button>
//           </div>
//         </div>
 
  
//       </nav>
 
//     </header>
//   )
// }


import Link from 'next/link'
import { Home, Github, Twitter, FileText } from 'lucide-react';

const navigation = [
    { name: 'ThisIsRahmat', href: '/' },
    { name: 'Books', href: '/books' },
      { name: 'Projects', href: '/projects' },
      { name: 'Writings', href: '/writings' },
      { name: 'Travel', href: '/travel' },
]

export default function Header() {


  return (
    <header className="bg-white">
      {/* <nav className=" sticky top-0  flex  items-center justify-between p-6 lg:px-8" aria-label="Global"> */}
      <nav className="relative top-0  z-10 flex items-center justify-between py-4 px-8 md:justify-between">
        <div className="flex items-center gap-x-4">

        <button className=" border-2 rounded-lg
        
        xllg:flex lg:gap-x-4 gap-x-4 border-slate-200 px-4 py-2 ">
   
          <div className="hidden lg:flex lg:gap-x-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="py-1 px-2 text-sm  leading-6 text-gray-900">
                {item.name}
              </Link>
            ))}
        

          </div>
          </button>
        </div>
        <div className="flex lg:hidden">
         
        </div>
      
      </nav>
 
    </header>
  )
}
