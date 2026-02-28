"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Container from "../ui/Container"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 text-sm font-medium">
          
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg tracking-tight text-black"
          >
            AUOTAM
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-black">
            <Link href="#what-we-build" className="hover:opacity-70 transition">
              What We Build
            </Link>
            <Link href="#industries" className="hover:opacity-70 transition">
              Industries
            </Link>
            <Link href="#work" className="hover:opacity-70 transition">
              Work
            </Link>
            <Link href="#about" className="hover:opacity-70 transition">
              About
            </Link>
            <Link href="#contact" className="hover:opacity-70 transition">
              Contact
            </Link>
          </nav>

        </div>
      </Container>
    </header>
  )
}
