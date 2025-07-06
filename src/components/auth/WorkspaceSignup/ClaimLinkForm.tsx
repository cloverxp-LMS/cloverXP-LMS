'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
// import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage
// } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'

// const formSchema = z.object({
//     schoolName: z.string().min(2).max(80)
// })

export const ClaimLinkForm = () => {
    const router = useRouter()
    const [isAvailable, setIsAvailable] = useState(false)
    const [schoolName, setSchoolName] = useState('')

    useEffect(() => {
        if (schoolName === 'zlancers') {
            setIsAvailable(true)
        } else {
            setIsAvailable(false)
        }
    }, [schoolName])

    const handleSubmit = () => {
        console.log('proceeding with workspace username', schoolName)
        router.push(`/auth/signup?workspace=${schoolName}`)
    }

    return (
        <div className='bg-white w-3/4 md:w-2/4'>
            <h2 className='text-3xl font-bold mb-4 text-gray-800'>
                First, Claim your link
            </h2>
            <p className='text-gray-600 mb-6'>
                Check whether we can get you the best domain
            </p>

            <div className="flex items-center justify-center gap-2 mb-2 py-4 text-center">
                <input
                    type="text"
                    placeholder="Enter your school name"
                    className="px-4 py-3 border rounded-l-md w-64 bg-white"
                    onChange={(e) => {
                        e.preventDefault()

                        setSchoolName(e.target.value)
                    }}
                    value={schoolName}
                />
                <span className="bg-blue-600 text-white px-4 py-3 rounded-r-md">
                    .cloverxp.com
                </span>
            </div>
            {schoolName && schoolName.length > 3 && isAvailable && (
                <p className="text-md py-2 text-green-500 text-center"> :) It&apos;s available, claim now</p>
            )}

            {schoolName && schoolName.length > 3 && !isAvailable && (
                <p className="text-md py-2 text-red-600 text-center"> :) It&apos;s unavailable, please try again</p>
            )}
            <Button
                type='submit'
                disabled={!isAvailable}
                onClick={handleSubmit}
                className='w-full mb-4 bg-blue-500 text-white rounded-md px-4 py-2'>
                Claim your domain
            </Button>

            <p className='text-gray-600 mt-4'>
                Already have an account?{' '}
                <Link
                    href='/auth/login'
                    className='text-blue-500 hover:underline'>
                    Login
                </Link>
            </p>
        </div>
    )
}

export default ClaimLinkForm
