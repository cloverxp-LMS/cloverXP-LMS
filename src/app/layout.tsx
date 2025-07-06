import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../styles/globals.css'
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Clover XP',
  description:
    'An all-in-one Learning management system built for educators, coaching institutes and industries to create, managem and sell their courses with ease.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-gray-100 text-gray-900 antialiased`}
        suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
