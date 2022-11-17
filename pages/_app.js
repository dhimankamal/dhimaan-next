import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import 'styles/globals.css'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

function MyApp ({ Component, pageProps }) {
  let schema = `{
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Dhimaan",
    "url": "https://www.dhimaan.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.dhimaan.in/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }`
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
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
