



import Link from 'next/link'
import ProjectCard from '../../components/ProjectCard';


export default function BooksPage(){
    return (
<main>
         
         <section >

            <div>
            <div className="flex flex-wrap">
                <h2 className="w-full pt-8 sm:text-[102px] text-[60px] font-bold leading-10 inset-x-0 bottom-0 pr-8 text-text-lvl-1 lg:w-1/3">Books</h2>
                <div className="w-full text-text-lvl-2 mt-2 lg:w-2/3 lg:mt-[0px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
                </div>
                

                <ul className="mt-20 gap-x-6 gap-y-3 flex cursor-pointer flex-wrap">
                    <li><h3 className="text-base text-text-lvl-4 hover:text-text-lvl-3"><span className="">2023</span><sup className="pl-[2px] text-[10px]">10</sup></h3></li>
                    <li><h3 className="text-base text-text-lvl-4 hover:text-text-lvl-3"><span className="">2022</span><sup className="pl-[2px] text-[10px]">10</sup></h3></li>
                    <li><h3 className="text-base text-text-lvl-1"><span className="underline-offset-8 underline decoration-blue decoration-2">Want to read</span><sup className="pl-[2px] text-[10px]">52</sup></h3></li></ul>

<div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">

<div
                className={(
                    "grid grid-cols-1 gap-6 mt-4",
                    "sm:mt-20",
                    "lg:grid-cols-2 lg:gap-10",
                    "xl:grid-cols-3"
                )}
            >



</div>
</div>
            </div>
            </section>

         
        </main>
    )
}