import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { CategoryProvider } from './context/CategoryContext'
import { Providers } from './context/Providers'
import './globals.css'

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  )
}
