'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import { AuthUserIcon } from '@/components/auth/AuthUserIcon/AuthUserIcon'

export const AuthNav = () => {

    const isLoggedIn = true

    return (
        <header className='py-4 shadow-sm fixed top-0 w-full z-10 bg-background/95'>
            <nav className='flex px-4 mx-4  items-center'>
                <div className='flex-1 text-black text-lg font-bold'>
                    <Link href='/auth/login' className='flex items-center'>
                        <Image
                            src='/images/clover-xp-logo.png'
                            alt='Clover XP'
                            width={150}
                            height={40}
                        />
                    </Link>
                </div>
                {isLoggedIn && (
                    <div className='hidden md:flex md:px-8 items-center space-x-4'>
                        <Link href="/dashboard">
                            Dashboard
                        </Link>

                        <Link href="/workspaces">
                            My Workspaces
                        </Link>

                        <Link href="/team">
                            Team
                        </Link>
                    </div>
                )}

                <div className='flex items-center space-x-2'>
                    <AuthUserIcon />
                </div>
            </nav>
        </header>
    )
}

export default AuthNav
