import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hava Durumu Uygulaması',
  description: 'OpenWeatherMap API ile hava durumu bilgilerini gösteren uygulama',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}