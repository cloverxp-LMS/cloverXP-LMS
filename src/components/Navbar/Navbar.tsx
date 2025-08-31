'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const Navbar = () => {
  return (
    <header className='py-4 shadow-sm fixed top-0 w-full z-40 bg-white'>
      <nav className='flex px-4 mx-4 justify-between items-center'>
        <div className='flex text-black text-lg font-bold items-center'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/clover-xp-logo.png'
              alt='Clover XP'
              width={150}
              height={40}
            />
          </Link>
          <Link href='/how-it-works' className='px-8'>
            {' '}
            How it works
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link href='/auth/login'>
            <Button className='text-white bg-blue-500 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded'>
              LOGIN
            </Button>
          </Link>
          <Link href='/auth/claim-link'>
            <Button className='text-white bg-black hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded'>
              START FOR FREE
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
