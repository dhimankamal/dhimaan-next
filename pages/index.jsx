import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  iosInstagramData,
  iosMessengerData,
  iosSnapchatData,
  iosWhatsappData,
} from 'utils/data'

export default function Home() {
  let data = [
    {
      title: 'iOS Whatsapp',
      link: '/ioswhatsapp',
    },
    {
      title: 'iOS Instagram',
      link: '/iosinstagram',
    },
    {
      title: 'iOS Snapchat',
      link: '/iossnapchat',
    },
    {
      title: 'iOS Messenger',
      link: '/iosmessenger',
    },
  ]

  let allData = [
    iosWhatsappData,
    iosSnapchatData,
    iosInstagramData,
    iosMessengerData,
  ]
  return (
    <div>
      <Head>
        <title>Covert any andoid phone to iphone - dhimaan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Covert any andoid phone to iphone - dhimaan"
        titleTemplate="Covert any andoid phone to iphone - dhimaan"
        defaultTitle="Covert any andoid phone to iphone - dhimaan"
        description="Dhiman Kamal is a multi-platform technology Channel. We make videos
          for everyone, not just for techies."
        openGraph={{
          url: 'https://www.dhimaan.in/',
          title: 'Covert any andoid phone to iphone - dhimaan',
          description: `Dhiman Kamal is a multi-platform technology Channel. We make videos
            for everyone, not just for techies. And we post them everywhere.
            Subscribe for a decent helping of tech features, first look and
            hands-on videos, unboxings, gadget reviews, tips, tricks,Rom
            Review,Nova Setups and Android Customisations.`,
        }}
      />
      <main className="">
        <div className="p-8 mt-4 bg-neutral-100 dark:bg-neutral-900">
          <h1 className="text-4xl font-bold">Turn Android Into iPhone</h1>
          <p>
            Website dedicated to providing users with detailed information on
            how to customize their Android device to look and feel like an
            iPhone.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          {allData.map(
            ({ title, imageUrl, description, dateUpdated, slug }, key) => {
              return (
                <div
                  className="border p-4 text-left grid grid-cols-2 gap-4"
                  key={key}
                >
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <div className="border-b pb-4">
                        <h2 className="text-2xl font-semibold">{title}</h2>
                        <span className="text-sm">
                          Last Updated: {dateUpdated}
                        </span>
                      </div>
                      <div className="space-y-4 mt-4">
                        <p>{description}</p>
                      </div>
                    </div>
                    <div className="!mt-8">
                      <Link
                        href={slug || '/'}
                        className="border py-4 px-8 border-black dark:border-white hover:bg-black transition-all duration-300 hover:text-white"
                      >
                        Download Here
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Image src={imageUrl} alt={title} sizes="100vw" />
                  </div>
                </div>
              )
            },
          )}
        </div>

        <div className="p-8 my-4 bg-neutral-100 dark:bg-neutral-900 ">
          <div className="w-5/6">
            <h2 className="text-3xl font-bold">About</h2>
            <p>
              Dhiman Kamal is a multi-platform technology Channel. We make
              videos for everyone, not just for techies. And we post them
              everywhere. Subscribe for a decent helping of tech features, first
              look and hands-on videos, unboxings, gadget reviews, tips,
              tricks,Rom Review,Nova Setups and Android Customisations.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
