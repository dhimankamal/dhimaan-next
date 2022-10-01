import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosWhatsappData } from 'utils/data'
import { NextSeo } from 'next-seo'

export default function Whatsapp () {
  console.log("image+++++++",  iosWhatsappData.imageUrl)
  return (
    <>
      <NextSeo
        title={iosWhatsappData.title}
        titleTemplate={iosWhatsappData.title}
        defaultTitle={iosWhatsappData.title}
        description={`Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${iosWhatsappData.title}`}
        canonical='https://www.dhimaan.in/'
        openGraph={{
          url: 'https://www.dhimaan.in/',
          title: iosWhatsappData.title,
          description: `Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${iosWhatsappData.title}`,
          images: [
            {
              url: 'https://dhimaan-next.vercel.app/' + iosWhatsappData.imageUrl.src,
              width: 1920,
              height: 1080,
              alt: iosWhatsappData.title
            }
          ]
        }}
      />
      <PostLayout pageData={iosWhatsappData} />
    </>
  )
}
