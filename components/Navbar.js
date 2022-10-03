import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileMenu from './Nav/MobileMenu'

export default function Navbar () {
  const activeClass = 'border-b-2 border-black transition-all'
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => setIsActive(!isActive)
  const { pathname } = useRouter()

  return (
    <>
      <nav className='mx-4 md:mx-10 flex justify-between py-10 border-b border-black items-center px-2 z-10'>
        <div className='text-3xl md:text-5xl font-bold z-10'>
          <span>Dhiman</span>
        </div>
        <div className='z-10'>
          <MobileMenu isActive={isActive} handleClick={handleClick} />
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
      {isActive && (
        <div className='bg-white w-screen h-screen absolute top-0 left-0'>
          test
        </div>
      )}
    </>
  )
}
