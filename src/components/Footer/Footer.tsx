'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Footer = () => {
    return (
        <footer className='py-4 shadow-sm bottom-0 w-full z-10 bg-background/95'>
            <div className='flex px-4 mx-4 justify-between items-center'>
                <h1> Clover XP, 2025 </h1>
                <Link href='https://www.cloverxp.com/#contact'>
                    <Button className='text-white bg-blue-500 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded'>
                        Need Help ?
                    </Button>
                </Link>
            </div>
        </footer>
    )
}

export default Footer