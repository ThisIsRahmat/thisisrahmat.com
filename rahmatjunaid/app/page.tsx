import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Hi there! 👋🏾 
          <br/>
           <br className="hidden sm:inline" />
             

        </h1>
        <h3>
        
        I am <a className=""> Rahmat</a>, a software and cloud architect living in the UK.  🇬🇧
      
        </h3>

        <p className="max-w-[700px] text-lg text-muted-foreground">
          I enjoy solving technichal problems and building tools online. 
          Here you will find my  <a>side projects</a>, my <a> public learnings </a> on building and run a saas company and other long form <a> posts</a> of my thoughts on being an engineer. 
        </p>

      </div>
      <div className="flex gap-4">
       
       
      </div>
    </section>
  )
}
