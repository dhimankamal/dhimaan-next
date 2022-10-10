import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import 'styles/globals.css'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <NextNProgress color='#000' />
        <Head>
          <title>Dhimaan</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <div className='flex flex-col h-screen justify-between'>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
