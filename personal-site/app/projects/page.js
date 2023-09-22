

import Link from 'next/link'

const projects = [
    {
        title: "Open Saas Finder",
        logo: '',

    }
]


export default function ProjectsPage(){
    return (
<main>
         
         <section >
            <div>

                <div className="flex flex-wrap">
                <h2 className="w-full pt-8 sm:text-[102px] text-[60px] font-bold leading-10 inset-x-0 bottom-0 pr-8 text-text-lvl-1 lg:w-1/3">Projects</h2>
                <div className="w-full mt-4 lg:w-2/3 lg:mt-[0px] space-y-2">

                    <p>
I have a lot of project ideas and I enjoy building my ideas.

</p>


<p>
    My current technichal goal is to become an expert in Golang + Nextjs(Typescript/Javascript) skills so those are the main languages I am building my projects in
</p>


                     </div>
                </div>
                
 <ul className="mt-20 gap-x-6 gap-y-3 flex cursor-pointer flex-wrap">
                    <li><h3 className="text-base text-text-lvl-4 hover:text-text-lvl-3"><span className="">Golang</span></h3></li>
                    <li><h3 className="text-base text-text-lvl-4 hover:text-text-lvl-3"><span className="">Nextjs</span></h3></li>
                    {/* <li><h3 className="text-base text-text-lvl-1"><span className="underline-offset-8 underline decoration-blue decoration-2">Python</span></h3></li> */}
                    
                    </ul> 

<div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">

<div className="border-gray-300 rounded-xl"></div>


</div>
            </div>
            </section>

         
        </main>
    )
}