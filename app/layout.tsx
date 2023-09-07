import './globals.css'
import '../styles/iconFont.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To do list',
  description: 'A teaching repository for our mates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 style={{textAlign:'center'}}>Agrega tu card de iconos</h1>
        {children}
      </body>
    </html>
  )
}
