import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Rahmat Junaid ',
  description: 'The digital space of Rahmat Junaid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className='${space_grotesk.className} px-4' >
       
        <Header/>{children}<Footer/>

          </body>
    </html>
  )
}
