import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import NavBar from '@/components/navbar/NavBar'
import styles from './styles/layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Vinicius',
  description: 'Portifolio Pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${styles.body}`}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
