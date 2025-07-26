import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohamed Hossam | Full Stack Web Developer',
  description:
    'Portfolio of Mohamed Hossam — a passionate Full Stack Web Developer proficient in React.js, Node.js, MongoDB, and SQL. Explore my projects, experience, and technical skills.',
  generator: 'Next.js',
  keywords: [
    'Mohamed Hossam',
    'Full Stack Developer',
    'React',
    'Node.js',
    'MongoDB',
    'Express',
    'Portfolio',
    'Web Developer',
    'Frontend',
    'Backend',
    'Projects',
    'JavaScript',
    'TypeScript'
  ],
  authors: [{ name: 'Mohamed Hossam', url: 'https://mohamedhossam2003.vercel.app/' }],
  creator: 'Mohamed Hossam',
  metadataBase: new URL('https://mohamedhossam2003.vercel.app'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
