import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"


const projects = [
  {
    title: "Project 1",
    description: "This is the description for Project 1.",
    imageUrl: "https://example.com/project1-image.jpg",
  },
  {
    title: "Project 2",
    description: "This is the description for Project 2.",
    imageUrl: "https://example.com/project2-image.jpg",
  },
  // Add more project objects as needed
];

export default function ProjectsPage() {
  return (
    <div>
    
      <div className="mx-auto flex max-w-[58rem] flex-col  space-y-4 ">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
         Projects
        </h2>
        <br/>
        <br/>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
         These are a list of my side-projects, some are still a work in progress
</p>
      </div>
      <br/>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-1">
        <div className="relative overflow-hidden rounded-lg bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
          
            <div className="space-y-2">

              <Link href="https://studywiz.co/">
              <h3 className="font-bold">
Studywiz
              </h3>
              </Link>
              
              <p className="text-m ">
              StudyWiz allows students to create custom prep questions to work on their painpoints. 
              </p>
              <p>
 
 Built with: <a className="mt-8 text-s leading-5 text-gray-500 md:order-1 md:mt-0"> Nextjs, GPT-3 </a>  
 </p>
            </div>
          </div>

          

          <div className="relative overflow-hidden rounded-lg bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
          
            <div className="space-y-2">

              <Link href="https://wisetally.co/">
              <h3 className="font-bold hover:underline-offset-4">
Wisetally
              </h3>
              </Link>
              
              <p className="text-m ">
           Wisetally is an expense and time managment platform for small and medium businesses.
              </p>

              <p>
 
          Built with: <a className="mt-8 text-s leading-5 text-gray-500 md:order-1 md:mt-0"> Nextjs, FastAPI, Prisma, Supabase </a>  
          </p>
   
          <p className="">
 
 This is a work in progress
</p>
          </div>
  
     
         
            </div>
          </div>
          </div>



        </div>
      </div>
  
  );
}