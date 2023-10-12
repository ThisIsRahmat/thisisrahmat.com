import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'

const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Rahmat Junaid ',
  description: 'The digital space of Rahmat Junaid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${space_grotesk.className} flex flex-col h-screen  text-[#247c5c]`}>


        <main className="flex-1 lg:space-y-4  space-y-2 mx-auto max-w-max px-2  sm:px-24 lg:px-40">
          <Header />
          {children}
          <Footer />
        </main>
     

      </body>
    </html>
  )
}
