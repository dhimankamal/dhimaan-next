import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosInstagramData } from 'utils/data'
import { NextSeo } from 'next-seo'

export default function Instagram () {
  return (
    <>
      <NextSeo
        title={iosInstagramData.title}
        titleTemplate={iosInstagramData.title}
        defaultTitle={iosInstagramData.title}
        description={`Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${iosInstagramData.title}`}
        canonical='https://www.dhimaan.in/'
        openGraph={{
          url: 'https://www.dhimaan.in/',
          title: iosInstagramData.title,
          description: `Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${iosInstagramData.title}`,
          images: [
            {
              url: iosInstagramData.imageUrl,
              width: 1920,
              height: 1080,
              alt: iosInstagramData.title
            }
          ]
        }}
      />
      <PostLayout pageData={iosInstagramData} />
    </>
  )
}
