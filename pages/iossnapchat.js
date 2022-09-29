import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosSnapchatData } from 'utils/data'
import { NextSeo } from 'next-seo'

export default function SnapChat () {
  return (
    <>
      <NextSeo
        title={iosSnapchatData.title}
        titleTemplate={iosSnapchatData.title}
        defaultTitle={iosSnapchatData.title}
        description={`Hey Whats going on everybody, its Dhiman back with most requested
    video on our channel ${iosSnapchatData.title}`}
        canonical='https://www.dhimaan.in/'
        openGraph={{
          url: 'https://www.dhimaan.in/',
          title: iosSnapchatData.title,
          description: `Hey Whats going on everybody, its Dhiman back with most requested
    video on our channel ${iosSnapchatData.title}`,
          images: [
            {
              url: iosSnapchatData.imageUrl,
              width: 1920,
              height: 1080,
              alt: iosSnapchatData.title
            }
          ]
        }}
      />
      <PostLayout pageData={iosSnapchatData} />
    </>
  )
}
