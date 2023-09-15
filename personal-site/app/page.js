

import Link from 'next/link'
import {Search, ShoppingBasket, MoveDown   } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'


const latest_projects = [
    {
      title: 'Project Title 1',
      description: 'Description of Project 1',
      logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456', // Adjust the path
      year: '2022',
      link: 'project1',
      externalLink: false, // Adjust as needed
      color: 'bg-black-700', // Adjust the color
    },
    {
        title: 'Project Title 2',
        description: 'Description of Project 2',
        logo: '', // Adjust the path
        year: '2022',
        link: 'project1',
        externalLink: false, // Adjust as needed
        color: 'bg-blue-700', // Adjust the color
      },
    // Add more projects as needed
  ];

export default function Page(){
    return (

        <main className=" mx-auto w-full max-w-screen-sm px-8 items-centre md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">

  <div className="flex flex-col space-y-8">

  <h1 className=" flex sm:text-[80px] text-[40px] font-bold   ">
   Hi! I'm Rahmat

</h1>
<div className="text-xl space-y-2">
<p>
I am a Software Engineer based in United Kingdom working primarily in Infrastructure/DevOps
    </p>

{/* <p> 

    I have been working within DevOps/Infra teams for the past 4 years. 

</p> */}
{/* <p>
    I spent the past year working on fullstack development - specifically learning Golang and a little typescript/javascript more specifically Nextjs framework. 
</p> */}

<p>
    When I am not staring at screens I enjoy reading, listening to podcasts and learning new languages.
    </p>
<p>
    I am always open to any new podcast or book recommendation
</p>

</div>





{/* Recent Projects */}

<div>
<div className="flex items-center">
<h3 className="text-4xl no-underline hover:underline decoration-wavy hover:underline-offset-8">  Selected Projects </h3> 
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {latest_projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
</div>

{/* Recent Writings */}

<div>
<div className="flex items-center">
<h3 className="text-4xl no-underline hover:underline decoration-wavy hover:underline-offset-8"> Selected Writings </h3> 
        </div>
{/* <ProjectCard>

</ProjectCard> */}

</div>

</div>
    </main>
        )}