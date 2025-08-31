import React from 'react'
import { LoginHeroContent } from '@/components/auth/WorkspaceLogin/LoginHeroContent'
// import { ClaimLinkForm } from '@/components/auth/WorkspaceSignup/ClaimLinkForm'
import { ClaimLinkFormNew } from '@/components/auth/WorkspaceSignup/ClaimLinkFormNew'

export default function ClaimLink() {
  return (
    <div className='flex  h-screen md:flex-row'>
      <div className='hidden w-1/2 md:flex flex-1 flex-col bg-gray-100 justify-center items-center h-full'>
        <LoginHeroContent />
      </div>

      <div className='flex lg:w-1/2 w-full bg-white py-20 items-center justify-center'>
        {/* <ClaimLinkForm /> */}
        <ClaimLinkFormNew />
      </div>
    </div>
  )
}
