"use client"

import Link from "next/link"
import Container from "@/components/ui/Container"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="font-bold text-lg tracking-tight">
            AUOTAM
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#">What We Build</Link>
            <Link href="#">Industries</Link>
            <Link href="#">Work</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </nav>

        </div>
      </Container>
    </header>
  )
}
