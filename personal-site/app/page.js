

import Link from 'next/link'


export default function Page(){
    return (
        <main className=" mx-auto w-full max-w-screen-sm px-8  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
         
         <section >

            <div>

                <div className="flex flex-wrap">
                <h2 className="w-full pt-8 sm:text-[40px] text-[20px] font-bold sm:leading-8 leading-4 inset-x-0 bottom-0 pr-8 text-text-lvl-1 lg:w-1/2"> Hi! I am Rahmat - a product engineer living in the UK  🇬🇧.</h2>


                <div className="w-full text-text-lvl-2 mt-2 lg:w-1/2 lg:mt-[30px]"> This is my corner of the internet where I document my hobbies and technical explorations .
                {/* <span className="inline-flex items-center mr-1"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 13 13" className=" h-2 w-2 ml-[6px] fill-text-lvl-2"><path d="M13 1.05a1 1 0 0 0-1-1L4 0a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L11 3.42V9a1 1 0 0 0 2 0V1.05Z"></path></svg></span> */}
</div>
                </div>
                

<div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">

<div className="border-gray-300 rounded-xl"></div>


</div>
            </div>
            </section>

            {/* Latest Books */}

            <section></section>

              {/* Latest Projects */}

              <section></section>

               {/* Contact me */}

               <section></section>

         
        </main>
    )
}
