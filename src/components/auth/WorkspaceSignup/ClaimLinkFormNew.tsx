'use client'

import React, { useState, useEffect, useActionState } from 'react'
// import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
// import { redirect } from 'next/navigation'
import { Check, X } from 'lucide-react'
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { checkAvailability } from '@/actions/claimLinkAction'

export const ClaimLinkFormSchema = z.object({
  workspace: z
    .string()
    .min(4, { message: 'Workspace must be at least 4 characters.' })
    .max(20, { message: 'Workspace cannot exceed 20 characters.' })
    .regex(/^\S+$/, { message: 'Spaces are not allowed.' })
})

export const ClaimLinkFormNew = () => {
  const [state, formAction] = useActionState(checkAvailability, {
    success: false,
    message: ''
  })

  const form = useForm<z.infer<typeof ClaimLinkFormSchema>>({
    resolver: zodResolver(ClaimLinkFormSchema),
    mode: 'onChange', // 👈 important
    defaultValues: {
      workspace: ''
    }
  })
  const {
    control,
    watch, // used for watching a particular form id
    formState: { isValid, isSubmitting, isDirty }
  } = form

  console.log('state', state)

  return (
    <div className='bg-white w-3/4 md:w-2/4'>
      <h2 className='text-3xl font-bold mb-4 text-gray-800'>
        First, Claim your link
      </h2>
      <p className='text-gray-600 mb-6'>
        Check whether we can get you the best domain
      </p>
      <div className='flex gap-2 mb-2 text-center'>
        <Form {...form}>
          <form action={formAction} className='space-y-4'>
            <FormField
              control={control}
              name='workspace'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Claim your unique subdomain</FormLabel>

                  <FormControl>
                    <div className='flex rounded-md shadow-sm border border-input focus-within:ring-2 focus-within:ring-ring'>
                      <Input
                        {...field}
                        id='workspace'
                        className='flex-1 rounded-none rounded-l-md border-0 focus-visible:ring-0 focus-visible:ring-offset-0'
                        placeholder='eg. tech_academy'
                      />
                      <span className='flex items-center px-3 text-sm bg-muted text-muted-foreground rounded-r-md border-l'>
                        @cloverxp.com
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {state.success && (
              <p className='text-md py-2 text-green-500 text-center'>
                {' '}
                :) It&apos;s available, claim now
              </p>
            )}

            {!state.success && (
              <p className='text-md py-2 text-red-600 text-center'>
                {' '}
                :( It&apos;s unavailable, please try again
              </p>
            )}
            {state.message === '' ? (
              <Button
                type='submit'
                className='w-full'
                disabled={!isValid || !isDirty || isSubmitting}>
                {isSubmitting ? 'Checking...' : 'Check Availability'}
              </Button>
            ) : (
              <Button
                type='button'
                className='w-full bg-blue-600 text-white'
                disabled={!isValid || isSubmitting || !state.success}>
                Claim Domain
                {state.success && (
                  <Check className='text-green-600 ml-2 w-5 h-5' />
                )}
                {!state.success && <X className='text-red-600 ml-2 w-5 h-5' />}
              </Button>
            )}

            {/* <Button
                type='submit'
                disabled={!isAvailable}
                onClick={handleSubmit}
                className='w-full mb-4 bg-blue-500 text-white rounded-md px-4 py-2'>
                Claim your domain
              </Button> */}
          </form>
        </Form>
      </div>
    </div>
  )
}
