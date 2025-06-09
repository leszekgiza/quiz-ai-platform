import './globals.css'

export const metadata = {
  title: 'Quiz AI Platform',
  description: 'Interactive AI quiz platform built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
