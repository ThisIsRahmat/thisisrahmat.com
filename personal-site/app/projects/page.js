

import Link from 'next/link'

const projects = [
    {
        title: "Open Saas Finder",
        logo: '',

    }
]


export default function ProjectsPage(){
    return (
        <main className=" mx-auto w-full max-w-screen-sm px-8  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
         
         <section >
            <div>

                <div className="flex flex-wrap">
                <h2 className="w-full pt-8 sm:text-[102px] text-[60px] font-bold leading-10 inset-x-0 bottom-0 pr-8 text-text-lvl-1 lg:w-1/3">Projects</h2>
                <div className="w-full text-text-lvl-2 mt-2 lg:w-2/3 lg:mt-[0px] space-y-2">

                    <p>
I have a lot of ideas and I enjoy bringing them to life in my spare time.

</p>


<p>
    My current is to practice my Golang + Nextjs(Typescript/Javascript) skills so those are the main languages I build my projects with (for now)
</p>


                     </div>
                </div>
                

                <ul className="mt-20 gap-x-6 gap-y-3 flex cursor-pointer flex-wrap">
                    <li><h3 className="text-base text-text-lvl-4 hover:text-text-lvl-3"><span className="">Golang</span></h3></li>
                    <li><h3 className="text-base text-text-lvl-4 hover:text-text-lvl-3"><span className="">Nextjs</span></h3></li>
                    <li><h3 className="text-base text-text-lvl-1"><span className="underline-offset-8 underline decoration-blue decoration-2">Python</span></h3></li></ul>

<div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">

<div className="border-gray-300 rounded-xl"></div>


</div>
            </div>
            </section>

         
        </main>
    )
}