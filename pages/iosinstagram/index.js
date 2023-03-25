import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function HomeInstagram() {
  let data = [
    {
      title: 'iOS Instagram',
      link: '/iosinstagram/ig',
    },
    {
      title: 'iOS Instander',
      link: '/iosinstagram/instander',
    },
    {
      title: 'iOS Insta Flow',
      link: '/iosinstagram/instaflow',
    },
  ]
  return (
    <div>
      <Head>
        <title>Ios instagram for android - dhimaan</title>
      </Head>
      <NextSeo
        title="Ios instagram for android - dhimaan"
        titleTemplate="Ios instagram for android - dhimaan"
        defaultTitle="Ios instagram for android - dhimaan"
        description="Dhiman Kamal is a multi-platform technology Channel. We make videos
            for everyone, not just for techies."
        openGraph={{
          url: 'https://www.dhimaan.in/iosinstagram',
          title: 'Ios instagram for android',
          description: `Dhiman Kamal is a multi-platform technology Channel. We make videos
              for everyone, not just for techies. And we post them everywhere.
              Subscribe for a decent helping of tech features, first look and
              hands-on videos, unboxings, gadget reviews, tips, tricks,Rom
              Review,Nova Setups and Android Customisations.`,
        }}
      />
      <main>
        <div className="flex items-center w-full justify-center text-center pt-10">
          <h1 className="text-4xl font-bold">Download Links</h1>
        </div>

        <ul className="flex justify-between flex-col text-xl items-center py-10 space-y-4 text-center mx-10">
          {data.map((value, index) => (
            <li key={index} className="w-full">
              <Link href={value.link}>{value.title}</Link>
            </li>
          ))}
        </ul>

        <div className="p-4 text-center">
          <h2 className="text-3xl font-bold">About</h2>
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
