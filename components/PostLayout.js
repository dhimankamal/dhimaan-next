import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useRouter } from 'next/router'
import Script from 'next/script'

export default function PostLayout({ pageData }) {
  const router = useRouter()
  const canonicalUrl = router.pathname

  return (
    <>
      <Script
        type='text/javascript'
        src='//sophomoreprimarilyprey.com/59/fc/0f/59fc0feead007c83836dff2e17d4c6d4.js'
      ></Script>
      <main className='px-4 text-center py-10 md:w-10/12 my-0 mx-auto'>
        <NextSeo
          title={pageData.title + '- dhimaan'}
          titleTemplate={pageData.title}
          defaultTitle={pageData.title}
          imageUrl={pageData.imageUrl.src}
          description={`Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${pageData.title}`}
          canonical={'https://www.dhimaan.in' + canonicalUrl}
          openGraph={{
            url: 'https://www.dhimaan.in/',
            title: pageData.title,
            description: `Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${pageData.title}`,
            images: [
              {
                url: 'https://dhimaan-next.vercel.app' + pageData.imageUrl.src,
                width: 1920,
                height: 1080,
                alt: pageData.title
              }
            ]
          }}
        />

        <div>
          <h1 className='text-4xl font-bold mb-4'>{pageData.title}</h1>
          <span className=''>Last Updated: {pageData.dateUpdated}</span>
        </div>

        <div className='my-10 p-4 border border-black dark:border-white'>
          <Image src={pageData.imageUrl} alt={pageData.title} sizes='100vw' />
        </div>

        <div>
          <h2 className='text-3xl font-bold'>Latest Version</h2>
          <ul className='flex justify-between flex-col text-xl items-center py-10 space-y-4'>
            {pageData.dataLinks.map((value, index) => (
              <li key={index} className='w-full'>
                <Link href={value.link}>
                  <a>
                    <div className='border px-2 py-8 border-black dark:border-white hover:bg-black dark:hover:bg-neutral-600 hover:text-white w-full text-sm md:text-2xl transition-color duration-500'>
                      {value.title}
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='py-4'>
          <h2 className='text-3xl font-bold'>Watch Video</h2>
          <p>
            Hey Whats going on everybody, its Dhiman back with most requested
            video on our channel {pageData.title}
          </p>
          <div className='my-6 p-4 border border-black dark:border-white'>
            <LiteYouTubeEmbed id={pageData.videoId} title={pageData.title} />
          </div>
        </div>
        <div className='py-4'>
          <h2 className='text-3xl font-bold'>About</h2>
          <p>
            Dhiman Kamal is a multi-platform technology Channel. We make videos
            for everyone, not just for techies. And we post them everywhere.
            Subscribe for a decent helping of tech features, first look and
            hands-on videos, unboxings, gadget reviews, tips, tricks,Rom
            Review,Nova Setups and Android Customisations.
          </p>
        </div>
        <div className='py-4'>
          <h2 className='text-3xl font-bold'>Tags</h2>
          <p>{pageData.tags}</p>
        </div>
      </main>
    </>
  )
}
