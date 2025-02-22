import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
    title: 'TimeWise',
    description: 'TimeWise is a web-based Pomodoro timer. Customize work and break durations, manage tasks, and stay focused!',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={GeistSans.className}>
            <body className={GeistSans.className}>{children}</body>
        </html>
    )
}
