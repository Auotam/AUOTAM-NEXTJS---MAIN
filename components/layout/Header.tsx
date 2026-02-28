import Container from "../ui/Container"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#fff1f2] sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            AUOTAM
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#what-we-build">What We Build</Link>
            <Link href="#industries">Industries</Link>
            <Link href="#work">Work</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>

            <a
              href="https://calendly.com/auotam/meeting"
              target="_blank"
              className="ml-4 px-5 py-2 bg-[#b91c1c] text-white rounded-full text-sm font-medium hover:bg-[#991b1b] transition"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile CTA only */}
          <div className="md:hidden">
            <a
              href="https://calendly.com/auotam/meeting"
              target="_blank"
              className="px-4 py-2 bg-[#b91c1c] text-white rounded-full text-xs font-medium"
            >
              Book
            </a>
          </div>

        </div>
      </Container>
    </header>
  )
}
