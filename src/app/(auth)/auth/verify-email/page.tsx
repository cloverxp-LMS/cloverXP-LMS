import React from 'react'
import { LoginHeroContent } from '@/components/auth/WorkspaceLogin/LoginHeroContent'
import { VerifyOTPForm } from '@/components/auth/WorkspaceSignup/VerifyOTPForm'

export default function VerifyEmail() {
  return (
    <div className='flex h-screen md:flex-row'>
      <div className='hidden w-1/2 md:flex flex-1 flex-col bg-gray-100 justify-center items-center h-full'>
        <LoginHeroContent />
      </div>

      <div className='flex flex-col lg:w-1/2 w-full bg-white py-20 items-center justify-center'>
        {/* <ResetPasswordForm /> */}
        <div className='bg-white w-3/4 md:w-2/4 mx-auto'>
          {/* <p> We have sent a 6 digit verification code to your Email. Enter it below, to activate your account</p> */}

          <VerifyOTPForm />
        </div>
      </div>
    </div>
  )
}
