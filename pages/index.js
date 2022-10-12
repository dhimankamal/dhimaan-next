import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  let data = [
    {
      title: 'iOS Whatsapp',
      link: '/ioswhatsapp'
    },
    {
      title: 'iOS Instagram',
      link: '/ioswhatsapp'
    },
    {
      title: 'iOS Snapchat',
      link: '/ioswhatsapp'
    }
  ]
  return (
    <div>
      <Head>
        <title>Dhimaan</title>
        <link rel='icon' href='/favicon.ico' />
      
      </Head>
      <NextSeo
          title='Dhimaan'
          titleTemplate='Dhiman'
          defaultTitle='Dhiman'
          description='Dhiman Kamal is a multi-platform technology Channel. We make videos
          for everyone, not just for techies. And we post them everywhere.
          Subscribe for a decent helping of tech features, first look and
          hands-on videos, unboxings, gadget reviews, tips, tricks,Rom
          Review,Nova Setups and Android Customisations.'
          canonical='https://www.dhimaan.in/'
          openGraph={{
            url: 'https://www.dhimaan.in/',
            title: 'Turn Android Into iPhone',
            description: `Dhiman Kamal is a multi-platform technology Channel. We make videos
            for everyone, not just for techies. And we post them everywhere.
            Subscribe for a decent helping of tech features, first look and
            hands-on videos, unboxings, gadget reviews, tips, tricks,Rom
            Review,Nova Setups and Android Customisations.`
          }}
        />
      <main>
        <div className='flex items-center w-full justify-center text-center pt-10'>
          <h1 className='text-4xl font-bold'>Turn Android Into iPhone</h1>
        </div>

        <ul className='flex justify-between flex-col text-xl items-center py-10 space-y-4 text-center mx-10'>
          {data.map((value, index) => (
            <li key={index} className='w-full'>
              <Link href={value.link}>
                <a>
                  <div className='border px-2 py-8 border-black dark:border-white hover:bg-black dark:hover:bg-neutral-600 hover:text-white w-full text-sm md:text-2xl'>
                    {value.title}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className='p-4 text-center'>
          <h2 className='text-3xl font-bold'>About</h2>
          <p>
            Dhiman Kamal is a multi-platform technology Channel. We make videos
            for everyone, not just for techies. And we post them everywhere.
            Subscribe for a decent helping of tech features, first look and
            hands-on videos, unboxings, gadget reviews, tips, tricks,Rom
            Review,Nova Setups and Android Customisations.
          </p>
        </div>
      </main>
    </div>
  )
}
