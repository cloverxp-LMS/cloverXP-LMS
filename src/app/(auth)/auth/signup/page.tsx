import React, { Suspense } from 'react'
import Link from 'next/link'
import { LoginHeroContent } from '@/components/auth/WorkspaceLogin/LoginHeroContent'
import { WorkspaceSignupForm } from '@/components/auth/WorkspaceSignup/WorkspaceSignupForm'

export default async function Signup({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const workspaceSlug = (await searchParams).workspace as string
  console.log('workspaceId', workspaceSlug)
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='hidden w-1/2 md:flex flex-1 flex-col bg-gray-100 justify-center items-center h-full'>
        <LoginHeroContent />
      </div>
      <div className='flex flex-col lg:w-1/2 w-full bg-white py-20 items-center justify-center'>
        <Suspense>
          <WorkspaceSignupForm workspaceSlug={workspaceSlug} />
          <p className='bg-white w-3/4 md:w-2/4 py-2 text-sm text-gray-400'>
            By continuing, you agree that we create an account for you (unless
            already created), and accept our{' '}
            <Link href='/terms' className='text-gray-600'>
              Terms and Conditions
            </Link>{' '}
            and{' '}
            <Link href='/privacy-policy' className='text-gray-600'>
              Privacy Policy
            </Link>
            .
          </p>
        </Suspense>
      </div>
    </div>
  )
}
