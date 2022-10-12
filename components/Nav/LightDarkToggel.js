import { useTheme } from 'next-themes'
import React from 'react'

export default function LightDarkToggel () {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <button
        aria-label='Toggle Dark Mode'
        type='button'
        className='p-3 h-12 w-12 order-2 md:order-3'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme == 'light' ? (
          <svg
            id='darkmode'
            width='40'
            height='40'
            viewBox='0 0 55 55'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className='sun'
              d='M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z'
              fill='#FBC539'
            />
          </svg>
        ) : (
          <svg
            id='darkmode'
            width='40'
            height='40'
            viewBox='0 0 55 55'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className='sun'
              d='M15.1881 29.3293C19.4644 43.9027 35.2643 51.5767 35.6866 53.016C21.1133 57.2923 5.83258 48.9449 1.5563 34.3715C-2.71998 19.7981 5.62748 4.5174 20.2009 0.241121C20.2009 0.241121 10.9118 14.7559 15.1881 29.3293Z'
              fill='#FBC539'
            />
          </svg>
        )}
      </button>
    </>
  )
}
