import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import '../../styles/globals.css'
import { Navbar } from '@/components/Navbar/Navbar'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin']
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin']
// })

export const metadata: Metadata = {
  title: 'Clover XP - Your branded LMS, Smarter and Faster',
  keywords: [
    'Clover XP',
    'Learning Management System',
    'LMS',
    'Online Learning',
    'E-learning',
    'Course Management',
    'Education Technology',
    'EdTech',
    'Online Courses',
    'Coaching Institutes',
    'Course Creation',
    'Sell Courses',
    'Learning Platform',
    'Branded LMS',
    'Student Management',
    'Educators',
    'Coaching',
    'Industries',
    'Learning Solutions',
    'Online Education',
    'Course Marketplace',
    'Learning Experience',
    'Digital Learning',
    'Training Management',
    'Learning Analytics',
    'Student Engagement',
    'Course Monetization',
    'Learning Tools',
    'Online Training',
    'Learning Resources',
    'Course Delivery',
    'Learning Management Software',
    'LMS Platform',
    'Learning Management System for Educators',
    'Learning Management System for Coaching Institutes',
    'Learning Management System for Industries',
    'Learning Management System for Online Courses',
    'Learning Management System for Course Creation',
    'Learning Management System for Selling Courses',
    'Learning Management System for Student Management',
    'Learning Management System for Educators and Coaching Institutes',
    'Learning Management System for Industries and Online Courses',
    'Learning Management System for Course Creation and Selling',
    'Learning Management System for Learning Solutions',
    'Learning Management System for Online Education',
    'Learning Management System for Course Marketplace'
  ],
  openGraph: {
    title: 'Clover XP - White-labelled LMS solution powered by Generative AI',
    description:
      'Clover XP is a all-in-one Learning Management System (LMS) built for educators, coaching institutes, businesses and creators. Power-up your own branded learning community with ease. Create, manage and sell courses, with smart AI suggestions.',
    url: 'https://cloverxp.com',
    siteName: 'Clover XP',
    images: [
      {
        url: 'https://cloverxp.s3.us-east-1.amazonaws.com/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Clover XP - Your branded LMS, Smarter and Faster'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
