import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
// import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/Logo"
import Image from "next/image"



export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-5">
      <Link href="/" className="flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        {/* <Logo/> */}
        <Image src="/rahmat.jpg" className="h-6 w-6"   width={500}
      height={500}
      alt="Illustration of Rahmat" />
        <span className="inline-block font-bold">Rahmat Junaid </span>
      </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">

          <nav className="flex items-center space-x-1">
 
          <Link
        href="/posts"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
     Posts
      </Link>
      <Link
        href="/projects"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
      Projects
      </Link>
      {/* <Link
        href="/learnings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Learnings
      </Link> */}
        
      <Link
          target="_blank"
          rel="noreferrer"
          href="mailto:thisisrahmat@gmail.com"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Get in touch
        </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
