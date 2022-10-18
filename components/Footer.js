import Link from 'next/link'
import React from 'react'

export default function Footer () {
  return (
    <footer className='mx-4 md:mx-10 border-t border-bleack py-8 text-center flex justify-between items-center'>
      <Link href="/privacypolicy">
        <a> Privacy Policy</a>
      </Link>
      <span className='text-center'>Design by kamal</span>
    </footer>
  )
}
