import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosMessengerData } from 'utils/data'
import { NextSeo } from 'next-seo'

export default function Messenger () {
  return (
    <>
      <NextSeo
        title={iosMessengerData.title}
        titleTemplate={iosMessengerData.title}
        defaultTitle={iosMessengerData.title}
        description={`Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${iosMessengerData.title}`}
        canonical='https://www.dhimaan.in/'
        openGraph={{
          url: 'https://www.dhimaan.in/',
          title: iosMessengerData.title,
          description: `Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${iosMessengerData.title}`,
          images: [
            {
              url: iosMessengerData.imageUrl,
              width: 1920,
              height: 1080,
              alt: iosMessengerData.title
            }
          ]
        }}
      />
      <PostLayout pageData={iosMessengerData} />
    </>
  )
}
