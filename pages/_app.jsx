import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import 'styles/globals.css'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <NextNProgress color="#000" />
        <DefaultSeo
          title="Dhimaan"
          description="Dhiman Kamal is a multi-platform technology Channel. We make
          videos for everyone, not just for techies. And we post them
          everywhere. Subscribe for a decent helping of tech features, first
          look and hands-on videos, unboxings, gadget reviews, tips,
          tricks,Rom Review,Nova Setups and Android Customisations."
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.dhimaan.in/',
            siteName: 'Dhimaan',
          }}
          // twitter={{
          //   handle: "@handle",
          //   site: "@",
          //   cardType: "summary_large_image",
          // }}
        />
        <Navbar />
        <main className="container mx-auto px-2">
          <Component {...pageProps} />
        </main>

        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
