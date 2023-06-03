import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
// import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/Logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <Logo/>

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
      <Link
        href="/learnings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Learnings
      </Link>
        
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
