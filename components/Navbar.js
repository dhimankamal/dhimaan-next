import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileMenu from './Nav/MobileMenu'
import LightDarkToggel from './Nav/LightDarkToggel'

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
      title: 'Whatsapp',
      link: '/ioswhatsapp',
      key: 'ioswhatsapp',
    },
    {
      title: 'Instagram',
      link: '/iosinstagram',
      kay: 'iosinstagram',
    },
    {
      title: 'Snapchat',
      link: '/iossnapchat',
      key: 'iossnapchat',
    },
    {
      title: 'Messenger',
      link: '/iosmessenger',
      key: 'iosmessenger',
    },
  ]

  return (
    <>
      <nav className="mx-4 sticky bg-white dark:bg-black top-0 md:mx-10 flex justify-between py-2 md:py-4 border-b border-black dark:border-white items-center px-2 z-20">
        <div className="text-3xl md:text-3xl font-bold z-10">
          <span>Dhimaan</span>
        </div>
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
      </nav>
      {isActive && (
        <div className="bg-white dark:bg-black w-screen h-screen absolute top-0 left-0 z-10 flex items-center justify-center">
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
