import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
// import { Icons } from "@/components/icons"
import { formatDate } from '@/lib/formatDate'

import { IconMoodSmile } from '@tabler/icons-react';




function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}



export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
Rahmat Junaid
        </title>
        <meta
          name="description"
          content="I’m Rahmat Junaid, this is my personal site for documenting my technichal curiosities"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl space-y-4">


        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
            Hi all!  </h1>

            <h1 className=" space-y-2 flex flex-inline text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
            It's Rahmat here 👋🏾  </h1>
            
          
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
          I am currently rebuilding my personal site thisisrahmat.com
          

           the new site is dropping in the middle of October (2023). 

          </h1>

          {/* <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
         In the mean time you can follow along my coding progress on <Link className='underline text-purple-700 hover:text-black ' href="https://github.com/ThisIsRahmat/thisisrahmat.com/tree/newrebuild"> Github  </Link>
         
          or get a sneak peek of my new site <Link  className='underline text-blue-300 hover:text-black ' href="#"> here </Link> 
          </h2>  
        */}
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
          In the mean time you can get in touch with me on <Link className='underline text-green-700 hover:text-black ' href="mailto:thisisrahmat@gmail.com "> Email </Link> and <Link className='underline text-red-600 hover:text-black' href="https://twitter.com/thisis_rahmat"> Twitter </Link></h2>  
       



  
        </div>
      </Container>
  
    
    </>
  )
}


