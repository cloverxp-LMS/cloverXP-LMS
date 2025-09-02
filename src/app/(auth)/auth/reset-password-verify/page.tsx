import React from 'react'
import Link from 'next/link'
import { LoginHeroContent } from '@/components/auth/WorkspaceLogin/LoginHeroContent'

export default function PasswordReset() {
  return (
    <div className='flex h-screen md:flex-row'>
      <div className='hidden w-1/2 md:flex flex-1 flex-col bg-gray-100 justify-center items-center h-full'>
        <LoginHeroContent />
      </div>

      <div className='flex flex-col lg:w-1/2 w-full bg-white py-20 items-center justify-center'>
        {/* <ResetPasswordForm /> */}
        <div className='bg-white w-3/4 md:w-2/4 mx-auto'>
          <h2 className='text-3xl font-bold mb-4 text-gray-800'>
            Reset Password
          </h2>
          <p className='text-gray-600 mb-6'>
            {/* Please log in to access your dashboard and manage your courses. */}
            {/* Enter your Workspace ID to get started. */}
            Password reset instructions sent, check your Email.
          </p>
          <p>
            {' '}
            If you registered using your email and password, you will receive a
            password reset email.
          </p>
          <p className='text-gray-600 mt-4'>
            Din&apos;t receive the email ?
            <Link
              href='/auth/login'
              className='text-blue-500 hover:underline px-2'>
              Resend Email
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
