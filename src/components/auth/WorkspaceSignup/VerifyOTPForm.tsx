'use client'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from "zod"
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters."
    })
})

export function VerifyOTPForm() {
    const [isVerified, setIsVerified] = useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: ""
        }
    })

    function onSubmit(values: z.infer<typeof FormSchema>) {
        console.log('values', values)
        toast("You submitted the following values", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })

        // check if email otp is valid
        if (values.pin === '123456') {
            setIsVerified(true)
            toast("Verified OTP")
        } else {
            setIsVerified(false)
            toast('Incorrect OTP')
        }


    }

    if (isVerified) {
        return (
            <div>
                <h2 className='text-3xl font-bold mb-4 text-gray-800'>
                    Wohoo, Email Verified !
                </h2>

                <p className='text-gray-600 mb-6'>Thank you for verifying your email address. You can sign in to continue</p>

                <p className='text-gray-600 mt-4'>
                    Continue setting up your workspace {' '}
                    <Link
                        href='/auth/login'
                        className='text-blue-500 hover:underline'>
                        Login
                    </Link>
                </p>
            </div>
        )
    }

    return (
        <>
            <div>
                <h2 className='text-3xl font-bold mb-4 text-gray-800'>
                    Verification Code
                </h2>
                <p className='text-gray-600 mb-6'>
                    You have successfully signed up. Please check your email to confirm your account before signing in.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 my-4">
                        <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>One-Time Password</FormLabel>
                                    <FormControl>
                                        <InputOTP maxLength={6} pattern='^\d+$' {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the one-time password sent to your email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type='submit'
                            disabled={false}
                            className='w-full mb-4 bg-blue-500 text-white rounded-md px-4 py-2'>
                            Continue
                        </Button>
                        <p>
                            Din&apos;t get a code ? <Link href="/" className='text-blue-500'>Resend</Link>
                        </p>
                        <p>
                            Resent Verification OTP, Please check your email
                        </p>
                        {/* <Button type="submit">Submit</Button> */}
                    </form>
                </Form>

            </div>
        </>
    )
}
