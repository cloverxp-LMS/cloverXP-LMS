import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { User2Icon, CheckCircle } from 'lucide-react'

export default function Dashboard() {
  return (
    <div>
      <div className='flex py-24 px-auto w-[94%] mx-auto justify-between'>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold'> Hello Sujay </h1>
          <p> Welcome back</p>
        </div>
        <div className="flex flex-row">

          <Link href='https://www.cloverxp.com/#contact'>
            <Button className='text-white bg-indigo-500 hover:bg-indigo-600 hover:text-white mx-2 font-bold py-2 px-4 rounded'>
              Onboarding Guide
              <CheckCircle />
            </Button>
          </Link>


          <Link href='https://www.cloverxp.com/#contact'>
            <Button className='text-white bg-blue-500 hover:bg-blue-600 hover:text-white font-bold mx-2 py-2 px-4 rounded'>
              Invite users
              <User2Icon />
            </Button>
          </Link>

        </div>
      </div>
      {/* <div className='flex  h-screen md:flex-row'> */}

      {/* <div className='hidden md:flex flex-1  flex-col bg-gray-100 h-screen'>
          <h1 className='text-2xl font-bold pt-40 px-10 text-gray-800'>
            Your branded LMS, Now smarter with AI
          </h1>
          <p className='text-gray-600 mt-2 px-10'>
            Clover XP is an all-in-one Learning Management System (LMS) built
            for educators, coaching institutes, businesses, and creators.
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
                    learning community with discussion forums and social
                    features.
                  </p>
                </li>
                <li>
                  <p className='text-gray-600 mt-2 px-10'>
                    - <strong>Monetization Options</strong>: Sell your courses
                    and manage payments seamlessly.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
      {/* 
        <div className='flex lg:w-1/2 w-full bg-white py-20 items-center justify-center'> */}
      {/* <WorkspaceLoginForm /> */}
      {/* <h1> Welcome to Dashboard</h1>
        </div>
      </div> */}
    </div>
  )
}
