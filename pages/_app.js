import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import 'styles/globals.css'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'

function MyApp ({ Component, pageProps }) {
  let schema = `{
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: 'Dhimaan',
    url: 'https://www.dhimaan.in/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.dhimaan.in/{search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }`
  return (
    <>
      <ThemeProvider attribute='class'>
        <NextNProgress color='#000' />
        <Head>
          <script type='application/ld+json'>{schema}</script>
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
