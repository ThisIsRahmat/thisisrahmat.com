import React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ProjectCard({
  className,
  title,
  description,
  imageUrl,
  ...props
}: {
  className?: string;
  title: string;
  description: string;
  imageUrl: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-md border p-8", className)} {...props}>
      <div className="mb-4">
        {/* <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-md"
        /> */}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
}
