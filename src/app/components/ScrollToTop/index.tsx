'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-8 right-3 z-50'>
      <div className='flex flex-row items-center gap-2.5'>
        {/* Chat Now button for desktop: always visible */}
        <Link
          href='https://wa.me/919562857669'
          target='_blank'
          className='hidden md:inline-block bg-green-600 text-white hover:bg-green-700 text-sm px-4 py-3.5 leading-none rounded-lg font-medium text-nowrap'>
          Chat Now
        </Link>

        {/* Chat Now and scroll to top for mobile (only when visible) */}
        {isVisible && (
          <>
            <Link
              href='https://wa.me/919562857669'
              target='_blank'
              className='inline-block md:hidden bg-green-600 text-white hover:bg-green-700 text-sm px-4 py-3.5 leading-none rounded-lg font-medium text-nowrap'>
              Chat Now
            </Link>

            <div
              onClick={scrollToTop}
              aria-label='scroll to top'
              className='back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#102C46] text-white shadow-md transition duration-300 ease-in-out hover:bg-dark'>
              <span className='mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white'></span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
