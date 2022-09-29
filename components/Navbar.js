import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar () {
  const activeClass = 'border-b-2 border-black transition-all'
  const { pathname } = useRouter()

  return (
    <nav className='mx-4 md:mx-10 flex justify-between py-10 border-b border-black items-center px-2'>
      <div className='text-3xl md:text-5xl font-bold'>
        <span>Dhiman</span>
      </div>
      <ul className='hidden md:flex justify-between space-x-8 text-xl items-center'>
        <li className={pathname === '/ioswhatsapp' ? activeClass : ''}>
          <Link href='/ioswhatsapp'>
            <a>Whatsapp</a>
          </Link>
        </li>
        <li className={pathname === '/iosinstagram' ? activeClass : ''}>
          <Link href='/iosinstagram'>
            <a>Instagram</a>
          </Link>
        </li>
        <li className={pathname === '/iossnapchat' ? activeClass : ''}>
          <Link href='/iossnapchat'>
            <a>Snapchat</a>
          </Link>
        </li>
        <li className='border py-4 px-8 border-black'>
          <Link href='/'>
            <a>Contact us</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
