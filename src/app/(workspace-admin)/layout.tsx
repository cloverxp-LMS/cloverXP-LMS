import type { Metadata } from 'next'
import '../../styles/globals.css'
// import { Navbar } from '@/components/Navbar/Navbar'
import { AuthNav } from '@/components/auth/AuthNav/AuthNav'
import { Footer } from '@/components/Footer/Footer'

export const metadata: Metadata = {
    title: 'Clover XP - Your branded LMS, Smarter and Faster',
    keywords: [
        'Dashboard'
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
            <AuthNav />
            {children}
            <Footer />
        </div>
    )
}
