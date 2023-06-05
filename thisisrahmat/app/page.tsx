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

             

        </h1>
        <h3 className="max-w-[700px] text-2xl text-muted-foreground">
        
        I am <a className="text-sky-500"> Rahmat</a>, a software and cloud architect living in 🇬🇧
        </h3>
        <br/>

        <p className="max-w-[700px] text-xl text-muted-foreground">
          I enjoy solving technichal problems and building tools online. 
          <br className="hidden sm:inline" />
          Here you will find my   
          <Link href="/projects" className="text-purple-500 underline underline-offset-2 ">
          <div
                className={buttonVariants({
                  variant: "link",
                })}
              >
           side projects
              </div>
         
          </Link>

          and 
          <Link href="https://blog.thisisrahmat.com/" className="text-purple-500 underline underline-offset-2 ">
          <div
                className={buttonVariants({
                  variant: "link",
                })}
              >
           posts
              </div>
         
          </Link>
        of my thoughts on being an engineer. 
        </p>

      </div>
      <div className="flex gap-4">
       
       
      </div>
    </section>
  )
}
