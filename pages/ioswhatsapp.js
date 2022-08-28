import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import WhatsAppImage from '../assets/update.jpg'

export default function Ioswhatsapp () {
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
    <main className='text-center py-10 md:w-10/12 my-0 mx-auto'>
      <div>
        <h1 className='text-4xl font-bold mb-4'>iOS WhatsApp On Any Android</h1>
        <span className=''>Last Updated: 13 Aug 2022</span>
      </div>

      <div className='py-10'>
        <Image src={WhatsAppImage} alt='Picture of the author' />
      </div>

      <div>
        <h2 className='text-3xl font-bold'>Latest Version</h2>
        <ul className='flex justify-between flex-col text-xl items-center py-10'>
          {data.map((value, index) => (
            <li key={index} className='w-full'>
              <Link href={value.link}>
                <a>
                  <div className='border py-8 border-black hover:bg-black hover:text-white w-full text-2xl'>
                    {value.title}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
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
        <p>
          Dhiman Kamal,iOS WhatsApp For Android,iPhone WhatsApp For Android,iOS
          WhatsApp On Android,iPhone 13 WhatsApp For Android,iOS 15 Theme For
          WhatsApp,iOS WhatsApp,iOS WhatsApp New Update,iPhone WhatsApp,WhatsApp
          Update,WhatsApp Hidden Features
        </p>
      </div>
    </main>
  )
}
