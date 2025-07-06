'use client'
import React from 'react'
import Image from 'next/image'

export const LoginHeroContent = () => {
    return (
        <div className='text-center items-center'>
            <Image
                src='/images/login-bg.png'
                alt='login-bg'
                width={500}
                height={500}
                className='object-cover mx-auto'
            />
            <h2 className='text-3xl font-bold mb-4 pt-8 text-gray-800'>
                Welcome to Clover XP
            </h2>
            <p className='text-xl'>
                Connecting Educators and Learners together
            </p>
        </div>
    )
}

export default LoginHeroContent