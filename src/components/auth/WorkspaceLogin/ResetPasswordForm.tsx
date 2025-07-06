'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
// import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
// import { AlertCircleIcon } from 'lucide-react'
// import {
//     Alert,
//     AlertDescription,
//     AlertTitle
// } from '@/components/ui/alert'

const formSchema = z.object({
    email: z.string().min(2).max(100).email()
})

export const ResetPasswordForm = () => {
    // const router = useRouter()

    const [isPasswordSent, setIsPasswordSent] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)

        // if exists redirect to the next step with the workspace id

        if (values.email) {
            // router.push(`/dashboard`)
            setIsPasswordSent(true)
        }
    }


    if (isPasswordSent) {
        return (
            <div className='bg-white w-3/4 md:w-2/4 '>
                <h2 className='text-3xl font-bold mb-4 text-gray-800'>
                    Check your email
                </h2>
                <p className='text-gray-600 mb-6'>
                    If you registered using your email and password, you will receive a password reset email.
                </p>
                <h4>
                    Password reset instructions sent
                </h4>
                <p className='text-gray-600 mt-4'>
                    Din&apos;t Receive Email ?
                    <Link
                        href='/auth/login'
                        className='text-blue-500 hover:underline px-2'>
                        Resend Email
                    </Link>
                </p>
            </div>
        )
    }


    return (
        <div className='bg-white w-3/4 md:w-2/4 '>
            <h2 className='text-3xl font-bold mb-4 text-gray-800'>
                Reset your password
            </h2>
            <p className='text-gray-600 mb-6'>
                {/* Please log in to access your dashboard and manage your courses. */}
                {/* Enter your Workspace ID to get started. */}
                Type in your email and we&apos;ll send you a link to reset your password
            </p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        id='email'
                                        type='text'
                                        placeholder='eg. arvi@gmail.com'
                                        {...field}
                                    />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                    <FormMessage />
                    <Button
                        type='submit'
                        className='w-full mb-4 bg-blue-500 text-white rounded-md px-4 py-2'>
                        Send reset email
                    </Button>
                </form>
            </Form>
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

export default ResetPasswordForm
