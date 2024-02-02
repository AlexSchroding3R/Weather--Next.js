import { Inter } from 'next/font/google'
import './globals.css'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather App',
  description: 'Created By The one and only Alex schrondinger',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
