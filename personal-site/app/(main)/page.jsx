

import Link from 'next/link'
import {Search, ShoppingBasket, MoveDown, MoveRight, MoveUpRight} from 'lucide-react'
import ProjectCard from '../../components/ProjectCard'
import Image from 'next/image'


const navigation = [
  {name:"About", href:"/about"},
  {name:"Books", href:"/books"},
  {name:"Bookmarks", href:"/bookmarks"},
  {name:"Projects", href:"/projects"},
  {name:"Writings", href:"/writings"}
  
]



export default function Page(){
    return (

        <main >

<div className="max-h-max py-4 flex sm:flex-col  flex-col-reverse relative">

    
               
<div className="py-4 sm:pl-96 flex-row-reverse gap-y-8 sticky top-0 end-0 ">

<div className="grid  grid-flow-col grid-rows-1">

  <div className="row-start-1 space-y-4 row-end-4 sm:pl-32 ">

<p className=" text-2xl sm:text-3xl">

Hi!

My name is <span className="underline underline-offset-2"> Rahmat Junaid</span>
</p>
<p className=" text-xl sm:text-2xl">
I am a Product Engineer based in England. 
</p>

<p className="text-lg sm:text-xl">
    This is my corner of the internet for talking about my technichal and non-technichal interests, unbound to any algorithim.
</p>
</div>
</div>





</div>
<Image
      src="data:image/jpeg;base64,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"
      width={500}
      height={500}
      alt="Picture of the site owner"
    /> 

</div>


<div className="pt-4 flex-row">
{/* Site navigation */}
{navigation.map((item) => (
  <Link key={item.name} href={item.href} className="text-[18px] text-m leading-8">
    <div className="border-[#247c5c] border-t-2 flex items-center justify-between p-0">
      <h2 className="text-2xl">{item.name}</h2>
    </div>
  </Link>
))}


</div>
<div className="bottom-0">














  











</div>





    </main>
        )}