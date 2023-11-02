import React from 'react'

const Footer = () => {
  return (
    <footer className="px-24 mb-4 text-white flex flex-col items-center justify-center gap-2 font-monos">
      <p>Designed & Built by <a href='www.linkedin.com/in/otmaneechchafyky' className='font-monos text-emerald-400 font-semibold'>Otmane Echchafyky</a></p>
      <a href="https://github.com/echchafykyotmane/Portfolio/fork" className='flex gap-2 hover:text-emerald-400'>
        <p>Git fork the code from here</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9m6 3v3" />
          </g>
        </svg>
      </a>
    </footer>
  )
}

export default Footer
