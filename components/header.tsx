'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathName = usePathname()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-50 via-white to-purple-50 shadow-lg border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-4 group">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transform transition-all duration-300 hover:from-blue-700 hover:to-cyan-700">
              LOGO
            </h1>
          </Link>
          <div className="flex items-center space-x-10">
            <Link href='/' className={`flex items-center justify-center font-bold transition-all duration-300 ease-out ${pathName === '/' ? 'text-blue-600 scale-105' : 'text-gray-700 hover:text-blue-600'}`}>
              <span className='text-2xl'></span>
              <p className='ml-2 text-lg'>LINK 1</p>
            </Link>
            <Link href='/' className={`flex items-center justify-center font-bold transition-all duration-300 ease-out ${pathName === '/pdf-converter' ? 'text-blue-600 scale-105' : 'text-gray-700 hover:text-blue-600'}`}>
              <span className='text-2xl'></span>
              <p className='ml-2 text-lg'>LINK 2</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header