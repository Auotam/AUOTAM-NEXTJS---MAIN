"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Container from "../ui/Container"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 text-sm font-medium">
          {/* Brand */}
          <Link
            href="/"
            className="font-bold tracking-tight text-black text-lg"
          >
            AUOTAM
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-black">
            <Link href="#what-we-build">What We Build</Link>
            <Link href="#industries">Industries</Link>
            <Link href="#work">Work</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
