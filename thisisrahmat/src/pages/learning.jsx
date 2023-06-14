import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from "next/link"

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Learnings - Rahmat Junaid</title>
        <meta
          name="description"
          content="Technichal things I am learning and the books that I am enjoying"
        />
      </Head>
      <SimpleLayout
        title="This is a public diary of my intellectual curiosities."
        intro="I am always trying to improve myself as an engineer, and this is my public journal of the things I am learning/reading in order to do that."
      >
        <div className="space-y-20">
          <ToolsSection title="June 2023">
            <Link href="">
            {/* <Tool title="The month of AI">

            </Tool> */}
            </Link>
 
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
