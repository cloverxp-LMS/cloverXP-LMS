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
      {/* <div className='hidden w-1/2 md:flex flex-1 flex-col bg-gray-100 justify-center items-center h-full'>
        <LoginHeroContent />
      
      </div> */}
      <div className='hidden w-1/2 flex-1 md:flex flex-col bg-gray-100 h-screen'>
        <h1 className='text-2xl font-bold pt-40 px-10 text-gray-800'>
          Your branded LMS, Now smarter with AI
        </h1>
        <p className='text-gray-600 mt-2 px-10'>
          Clover XP is an all-in-one Learning Management System (LMS) built for
          educators, coaching institutes, businesses, and creators.
        </p>
        <p className='text-gray-600 mt-2 px-10'>
          Power-up your own branded learning community with ease. Create,
          manage, and sell courses, with smart AI suggestions.
        </p>
        <ul>
          <li>
            <p className='text-gray-600 mt-2 px-10'>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>
                <p className='text-gray-600 mt-2 px-10'>
                  - <strong>Course Creation</strong>: Easily create and manage
                  courses with our intuitive platform.
                </p>
              </li>
              <li>
                <p className='text-gray-600 mt-2 px-10'>
                  - <strong>AI-Powered Insights</strong>: Leverage AI to gain
                  insights into learner behavior and course effectiveness.
                </p>
              </li>
              <li>
                <p className='text-gray-600 mt-2 px-10'>
                  - <strong>Custom Branding</strong>: Fully customize your LMS
                  to reflect your brand identity.
                </p>
              </li>
              <li>
                <p className='text-gray-600 mt-2 px-10'>
                  - <strong>Analytics and Reporting</strong>: Track learner
                  progress and course performance with detailed analytics.
                </p>
              </li>
              <li>
                <p className='text-gray-600 mt-2 px-10'>
                  - <strong>Community Engagement</strong>: Foster a vibrant
                  learning community with discussion forums and social features.
                </p>
              </li>
              <li>
                <p className='text-gray-600 mt-2 px-10'>
                  - <strong>Monetization Options</strong>: Sell your courses and
                  manage payments seamlessly.
                </p>
              </li>
            </ul>
          </li>
        </ul>
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
