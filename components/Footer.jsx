import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="container mx-4 md:mx-auto border-t border-bleack py-8 text-center flex flex-col md:flex-row justify-between items-center">
      <Link href="/privacypolicy">Privacy Policy</Link>
      <span className="text-center">Design by kamal</span>
    </footer>
  )
}
