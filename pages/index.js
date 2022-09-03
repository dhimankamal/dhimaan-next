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
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <ul className='flex justify-between flex-col space-y-8 text-xl items-center py-10'>
          {data.map((value, index) => (
            <li key={index} className='border py-4 px-8 border-black hover:bg-black hover:text-white'>
              <Link href={value.link}>
                <a>{value.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
