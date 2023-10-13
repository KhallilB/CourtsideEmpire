import type { Metadata } from 'next'
import { Roboto, Nunito } from 'next/font/google'

import '@/styles/globals.css'

const nunito = Nunito({ weight: ['200', '300', '400'], subsets: ['latin'] })
const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Courtside Empire',
  description: 'Create a basketball dynasty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={(nunito.className, roboto.className)}>{children}</body>
    </html>
  )
}
