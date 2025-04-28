"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {

    const [entry] = window.performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
    
    if (pathname !== "/" || entry.type === "reload") {
      setNavbarVisible(true)
      setScrolled(true)
      return
    }

    const handleScroll = () => {

      let scrolled = false;
      if(!scrolled){
        scrolled = scrolled ? true : window.scrollY > 10
      }
      setNavbarVisible(window.scrollY > window.innerHeight)
      setScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => pathname === path

  // Base classes for visible vs not-visible
  const headerClasses = navbarVisible
    ? `opacity-100 pointer-events-auto transition-all duration-200 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`
    : "opacity-100 bg-black text-black pointer-events-none transition-all duration-200"

  // A helper to pick link colors
  const linkColorClass = navbarVisible ? "text-foreground/80 hover:text-accent" : "text-black"

  return (
    <header className={`sticky top-0 z-50 w-full ${headerClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className={`h-8 w-8 ${
                navbarVisible ? "text-accent" : "text-black"
              }`}
              width={800} 
              height={800}
            />
            <span
              className={`text-xl font-bold ${
                navbarVisible ? "text-foreground" : "text-black"
              }`}
            >
              Antonio Battaglia
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? navbarVisible
                      ? "text-accent"
                      : "text-black"
                    : linkColorClass
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X
                  className={`h-6 w-6 ${
                    navbarVisible ? "text-foreground" : "text-black"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    navbarVisible ? "text-foreground" : "text-black"
                  }`}
                />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? navbarVisible
                        ? "text-accent"
                        : "text-black"
                      : linkColorClass
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
