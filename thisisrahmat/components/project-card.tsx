import React from "react"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function ProjectCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AspectRatio ratio={3 / 1} asChild>
      <div
        className={cn(
          "flex items-center justify-center rounded-md border p-8",
          className
        )}
        {...props}
      />
    </AspectRatio>
  )
}