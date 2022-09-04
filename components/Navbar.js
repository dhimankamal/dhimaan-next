import React from 'react'
import Link from 'next/link'

export default function Navbar () {
  return (
    <nav className='mx-4 md:mx-10 flex justify-between py-10 border-b border-black items-center px-2'>
      <div className='text-3xl md:text-5xl font-bold'>
        <span>Dhiman</span>
      </div>
      <ul className='hidden md:flex justify-between space-x-8 text-xl items-center'>
        <li>
          <Link href='/ioswhatsapp'>
            <a>Whatsapp</a>
          </Link>
        </li>
        <li>
          <Link href='/iosinstagram'>
            <a>Instagram</a>
          </Link>
        </li>
        <li>
          <Link href='/iossnapchat'>
            <a>Snapchat</a>
          </Link>
        </li>
        <li className='border py-4 px-8 border-black'>
          <Link href='/ioswhatsapp'>
            <a>Contact us</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
