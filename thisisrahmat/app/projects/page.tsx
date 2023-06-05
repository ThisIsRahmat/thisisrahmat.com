import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export default function ProjectPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
     Projects
        <br/>
        </h1>

        <div>
        <ProjectCard>
            <Link href="https://studywiz.co/">
            <h1> Studywiz </h1>
            </Link>
          
        </ProjectCard>
            <br/>
            {/* <ProjectCard>
            <h1> This is a test </h1>
            </ProjectCard> */}
            </div>
  

     
        </div>
        </section>
  )}