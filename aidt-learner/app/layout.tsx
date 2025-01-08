import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { SideNav } from "@/components/side-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIDT Learning Platform",
  description: "Online learning platform for AIDT",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <MainNav />
          <div className="flex flex-1">
            <div className="hidden md:block">
              <SideNav />
            </div>
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

