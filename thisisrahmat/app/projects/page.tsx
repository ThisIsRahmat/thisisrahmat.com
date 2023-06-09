import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

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

export function ProjectsPage() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            className="bg-white"
          />
        ))}
      </div>
    </div>
  );
}