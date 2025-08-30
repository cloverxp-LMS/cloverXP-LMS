'use client'
import React from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

import { z } from 'zod'
// import { AlertCircleIcon } from 'lucide-react'
// import {
//     Alert,
//     AlertDescription,
//     AlertTitle
// } from '@/components/ui/alert'

const formSchema = z.object({
  email: z.string().min(2).max(100).email(),
  password: z.string().min(6).max(12),
  confirmPassword: z.string().min(6).max(12),
  agreeToTerms: z.boolean()
})

export const WorkspaceSignupForm = () => {
  const router = useRouter()
  const queryParams = useSearchParams()

  const workspace = queryParams.get('workspace')

  const isAvailable = true // TODO: need to check if its available based on the workspace

  if (!workspace) {
    router.push('/auth/claim-link')
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    }
  })
  // const [isInvalidWorkspaceId, setIsInvalidWorkspaceId] = useState<boolean>(false)

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)

    // check if the workspace Id exists in the database or not

    // if does not exist throw error - Workspace not found
    // if (values.email !== 'zlancers9898@gmail.com') { // backend logic will go here
    //     setIsInvalidWorkspaceId(true)
    // }

    // if exists redirect to the next step with the workspace id

    if (values.email) {
      // setIsInvalidWorkspaceId(false)
      router.push(`/auth/verify-code`)
    }
  }

  return (
    // You could have a loading skeleton as the `fallback` too

    <div className='bg-white w-3/4 md:w-2/4'>
      {workspace && isAvailable && (
        <>
          <h2 className='text-3xl font-bold mb-4 text-gray-800'>
            Now create your account
          </h2>
          <p className='text-gray-600 mb-6'>
            Just a step away from claiming{' '}
            <strong>{workspace}.cloverxp.com</strong>
          </p>
        </>
      )}

      {/* 
            <h2 className='text-3xl font-bold mb-4 text-gray-800'>
                Sign up
            </h2>
            <p className='text-gray-600 mb-6'>
                Register with your email to create, manage, and sell eLearning courses – all in one place!
            </p> */}

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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <div className='flex items-center'>
                  <FormLabel>Password</FormLabel>
                </div>
                <FormControl>
                  <Input
                    id='password'
                    type='password'
                    placeholder='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <div className='flex items-center'>
                  <FormLabel>Repeat Password</FormLabel>
                </div>
                <FormControl>
                  <Input
                    id='confirmPassword'
                    type='password'
                    placeholder='confirm password'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormMessage />
          <FormField
            control={form.control}
            name='agreeToTerms'
            render={({ field }) => (
              <FormItem>
                <div className='flex items-center gap-2'>
                  <Checkbox
                    id='terms'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor='terms'> I accept terms and conditions</Label>
                </div>
              </FormItem>
            )}
          />
          <Button
            type='submit'
            disabled={false}
            className='w-full mb-4 bg-blue-500 text-white rounded-md px-4 py-2'>
            Sign up
          </Button>
        </form>
      </Form>

      <div className='mt-6'>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-2 bg-white text-gray-500'>
              Or continue with
            </span>
          </div>
        </div>
        <div className='mt-4 grid grid-col gap-3'>
          <Button variant='outline' className='w-full'>
            <svg className='w-4 h-4 mr-2' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='currentColor'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='currentColor'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              />
              <path
                fill='currentColor'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              />
            </svg>
            Google
          </Button>
          {/* <Button variant="outline" className="w-full">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button> */}
        </div>
      </div>

      <p className='text-gray-600 mt-4'>
        Already have an account?{' '}
        <Link href='/auth/login' className='text-blue-500 hover:underline'>
          Login
        </Link>
      </p>
    </div>
  )
}

export default WorkspaceSignupForm
