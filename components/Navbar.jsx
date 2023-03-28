import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileMenu from './Nav/MobileMenu'
import LightDarkToggel from './Nav/LightDarkToggel'
import Logo from '../assets/logo.png'
import LogoWhite from '../assets/logowhite.png'

import Image from 'next/image'

export default function Navbar() {
  const activeClass = 'border-b-2 border-black dark:border-white transition-all'
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => setIsActive(!isActive)
  const { pathname } = useRouter()

  useEffect(() => {
    setIsActive(false)
  }, [pathname])

  const menu = [
    {
      title: 'Home',
      link: '/',
      key: 'home',
    },
    {
      title: 'Blog',
      link: '/blog',
      key: 'blog',
    },

    {
      title: 'About us',
      link: '/about',
      key: 'about',
    },
    {
      title: 'Disclaimer',
      link: '/disclaimer',
      key: 'disclaimer',
    },
    {
      title: 'Privacy Policy',
      link: '/privacypolicy',
      key: 'privacypolicy',
    },
  ]

  return (
    <>
      <nav className="sticky dark:bg-black/90 top-0 shadow-sm dark:shadow-stone-900 z-20 backdrop-blur-xl bg-white/80">
        <div className="container mx-auto flex justify-between py-2 md:py-4 items-center ">
          <Link href="/" className="text-3xl md:text-3xl font-bold z-10 px-2">
            <Image src={Logo} alt="logo" className="w-10 dark:hidden" />
            <Image
              src={LogoWhite}
              alt="logo"
              className="w-10 hidden dark:block"
            />
          </Link>
          <div className="z-10 lg:hidden">
            <MobileMenu isActive={isActive} handleClick={handleClick} />
          </div>

          <ul className="hidden lg:flex justify-between space-x-8 text-md items-center">
            {menu.map(({ title, link, key }) => (
              <li key={key} className={pathname === link ? activeClass : ''}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
            <li
              key={'contact'}
              className="border py-4 px-8 border-black dark:border-white"
            >
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <LightDarkToggel />
            </li>
          </ul>
        </div>
      </nav>
      {isActive && (
        <div className="bg-white dark:bg-black w-screen h-screen fixed top-0 bottom-0 left-0 z-10 flex items-center justify-center">
          <ul className="flex flex-col justify-between space-y-8 text-2xl items-center">
            {menu.map(({ title, link, key }) => (
              <li key={key} className={pathname === link ? activeClass : ''}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <LightDarkToggel />
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
