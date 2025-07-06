"use client"

import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/Navbar/Navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()
  const leftCardRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 40
      const y = (clientY / window.innerHeight - 0.5) * 40

      if (leftCardRef.current) {
        leftCardRef.current.style.transform = `translate(${-x}px, ${-y}px) rotate(-5deg)`
      }
      if (rightCardRef.current) {
        rightCardRef.current.style.transform = `translate(${x}px, ${y}px) rotate(5deg)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const [schoolName, setSchoolName] = useState('')
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    if (schoolName === 'zlancers') {
      setIsAvailable(true)
    } else {
      setIsAvailable(false)
    }
  }, [schoolName])

  const handleClick = () => {
    console.log('proceeding with schoolname', schoolName)
    router.push(`/auth/signup?workspace=${schoolName}`)
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Navbar />

      <div className="flex flex-col justify-center items-center">

        <div className="z-10 text-center px-4 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Launch and sell your courses in minutes
          </h1>
          <p className="mb-6 text-lg">Build your own eLearning community</p>
        </div>
        <Image src="/images/login-bg.png"
          alt="Card 1"
          width={300}
          height={300}
          className="rounded-xl right-0 items-center justify-center" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-2 mb-2 py-4 text-center">
          <input
            type="text"
            placeholder="Enter your school name"
            className="px-4 py-3 border rounded-l-md w-64 bg-white"
            onChange={(e) => {
              e.preventDefault()

              setSchoolName(e.target.value)
            }}
            value={schoolName}
          />
          <span className="bg-blue-600 text-white px-4 py-3 rounded-r-md">
            .cloverxp.com
          </span>
        </div>
        {schoolName && schoolName.length > 3 && isAvailable && (
          <p className="text-md py-2 text-green-500 text-center"> :) It&apos;s available, claim now</p>
        )}

        {schoolName && schoolName.length > 3 && !isAvailable && (
          <p className="text-md py-2 text-red-600 text-center"> :) It&apos;s unavailable, please try again</p>
        )}

        <Button size="lg" onClick={handleClick} disabled={!isAvailable}>Start Building - it&apos;s free</Button>
        <p className="mt-2 text-sm text-center py-2">claim your domain before its too late !</p>
      </div>

      {/* Parallax Cards */}
      <div
        ref={leftCardRef}
        className="absolute left-10 bottom-20 hidden md:block"
      >
        <Image
          src="/images/left-banner.svg"
          alt="Card 1"
          width={400}
          height={300}
          className="rounded-xl"
        />
      </div>

      <div
        ref={rightCardRef}
        className="absolute right-10 bottom-20 hidden md:block"
      >
        <Image
          src="/images/right-banner.svg"
          alt="Card 2"
          width={400}
          height={300}
          className="rounded-xl"
        />
      </div>
    </main >
  )
}