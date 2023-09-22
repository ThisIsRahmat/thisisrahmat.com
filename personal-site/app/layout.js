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
    <html lang="en" className="h-full">
      <body className={`${space_grotesk.className} overflow-hidden lg:space-y-8 space-y-4 h-full  mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 text-[#247c5c]  `}>

       
      <Banner/><Header/>{children}<Footer/>
  

      </body>
    </html>
  )
}
