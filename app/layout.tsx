import type React from "react"
import type { Metadata, Viewport } from "next"
import {Poppins} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Poppins({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cybersecurity Portfolio Antonio Battaglia",
  description: "Portfolio showcasing my work and expertise as a cybersecurity engineer",
  openGraph: {
    title: 'Cybersecurity Portfolio Antonio Battaglia',
    description: 'Portfolio showcasing my work and expertise as a cybersecurity engineer',
    url: 'https://antubattle.dev',
    siteName: 'Antonio Battaglia Portfolio',
    images: [{ url: 'https://antubattle.dev/images/battaglia_antonio_foto.jpg' }]
  },
  authors: [{ name: "Antonio Battaglia"}],
  keywords: "portfolio, curriculum, blog, penetration testing, cybersecurity, cybersec, pentest, engineer",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'