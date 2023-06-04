import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import Image from "next/image"
import { cn } from "@/lib/utils"



export function Logo() {
  return (

<div className="flex gap-6 md:gap-10">
<Link href="/" className="flex items-center space-x-2">
  <Image src="/rahmat.jpg" className="h-6 w-6"   width={500}
      height={500}
      alt="Illustration of Rahmat" />

  <span className="inline-block font-bold"> Rahmat  👩🏾‍💻 </span>
</Link>

</div>
 
  )
}
