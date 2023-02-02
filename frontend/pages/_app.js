import '../styles/globals.css'
import pageProps  from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
