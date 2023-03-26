import React from 'react'
import { iosWhatsappData as pageData } from 'utils/data'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useRouter } from 'next/router'
import Breadcrumb from 'components/Breadcrumbs'

export default function Whatsapp() {
  const router = useRouter()
  const canonicalUrl = router.pathname
  return (
    <>
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
              alt: pageData.title,
            },
          ],
        }}
      />
      <div className="py-4">
        <Breadcrumb
          crumbs={[
            { name: 'Home', href: '/' },
            { name: pageData?.title, href: '/' },
          ]}
          dateUpdated={pageData?.dateUpdated}
        />
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="col-span-2 space-y-4">
            <div className="p-4 border border-black dark:border-white">
              <Image
                src={pageData.imageUrl}
                alt={pageData.title}
                sizes="100vw"
              />
            </div>

            <div className="p-4 border border-black">
              <div className='bg-neutral-100 dark:bg-neutral-900 p-6'>
                <h2 className="text-3xl font-bold">Latest Version</h2>
              </div>

              <ul className="flex justify-between flex-col text-xl items-center p-4 space-y-4">
                {pageData.dataLinks.map((value, index) => (
                  <li key={index} className="w-full flex items-center gap-4">
                    <div className='w-2 h-2 bg-black'></div>
                    <Link href={value.link} target="_blank" className='w-full'>
                      <div className="p-4 bg-neutral-100 hover:bg-black dark:hover:bg-neutral-600 hover:text-white w-full text-sm md:text-xl transition-color duration-500">
                        {value.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-4">
              <h2 className="text-3xl font-bold">Watch Video</h2>
              <p>
                Hey Whats going on everybody, its Dhiman back with most
                requested video on our channel {pageData.title}
              </p>
              <div className="my-6 p-4 border border-black dark:border-white">
                <LiteYouTubeEmbed
                  id={pageData.videoId}
                  title={pageData.title}
                />
              </div>
            </div>
            <div className="py-4">
              <h2 className="text-3xl font-bold">About</h2>
              <p>
                Dhiman Kamal is a multi-platform technology Channel. We make
                videos for everyone, not just for techies. And we post them
                everywhere. Subscribe for a decent helping of tech features,
                first look and hands-on videos, unboxings, gadget reviews, tips,
                tricks,Rom Review,Nova Setups and Android Customisations.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-3xl font-bold">Tags</h2>
              <p>{pageData.tags}</p>
            </div>
          </div>
          <div className="border border-black"></div>
        </div>
      </div>
    </>
  )
}
