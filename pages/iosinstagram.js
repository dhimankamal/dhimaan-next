import React from 'react'
import PostLayout from '../components/PostLayout'
import WhatsAppImage from '../assets/update.jpg'

export default function Ioswhatsapp () {
  let pageData = {
    title: 'iOS Instagram On Any Android',
    dateUpdated: '13 Aug 2022',
    imageUrl: WhatsAppImage,
    dataLinks: [
      {
        title: 'iOS WhatsApp (v9.35) On Any Android',
        link:
          'https://www.dhimankamal.com/2022/08/ios-whatsapp-vv935-on-any-android.html'
      },
      {
        title: 'iOS WhatsApp (v9.30.1) On Any Android',
        link:
          'https://www.dhimankamal.com/2022/06/ios-whatsapp-v8301-on-any-android.html'
      },
      {
        title: 'iOS 15 WhatsApp For Android // v9.25.1',
        link:
          'https://www.dhimankamal.com/2022/03/ios-15-whatsapp-for-android-v9251.html'
      },
      {
        title: 'iOS 15 WhatsApp For Android // v9.12.1',
        link:
          'https://www.dhimankamal.com/2022/02/ios-15-whatsapp-for-android-v9121.html'
      }
    ],
    tags:
      'Dhiman Kamal,iOS WhatsApp For Android,iPhone WhatsApp For Android,iOS WhatsApp On Android,iPhone 13 WhatsApp For Android,iOS 15 Theme For WhatsApp,iOS WhatsApp,iOS WhatsApp New Update,iPhone WhatsApp,WhatsApp Update,WhatsApp Hidden Features'
  }

  return (
    <>
      <PostLayout pageData={pageData} />
    </>
  )
}
