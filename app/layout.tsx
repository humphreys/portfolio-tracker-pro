import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "@/app/providers"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio Tracker Pro",
  description: "Investment portfolio management SaaS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Sidebar />
          <div className="md:ml-64 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 p-4 md:p-8 bg-gray-50">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}