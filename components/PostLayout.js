import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PostLayout ({ pageData }) {
  return (
    <main className='px-4 text-center py-10 md:w-10/12 my-0 mx-auto'>
      <div>
        <h1 className='text-4xl font-bold mb-4'>{pageData.title}</h1>
        <span className=''>Last Updated: {pageData.dateUpdated}</span>
      </div>

      <div className='py-10'>
        <Image src={pageData.imageUrl} alt='Picture of the author' />
      </div>

      <div>
        <h2 className='text-3xl font-bold'>Latest Version</h2>
        <ul className='flex justify-between flex-col text-xl items-center py-10 space-y-4'>
          {pageData.dataLinks.map((value, index) => (
            <li key={index} className='w-full'>
              <Link href={value.link}>
                <a>
                  <div className='border px-2 py-8 border-black hover:bg-black hover:text-white w-full text-sm md:text-2xl'>
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
        <div className='py-6 '>
          <div className='iframe-container'>
            <iframe
              width='100%'
              height='600'
              src='https://www.youtube.com/embed/PI6TyFVMfPQ?controls=0'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
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
  )
}
