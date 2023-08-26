import './globals.css'
import { Source_Code_Pro } from 'next/font/google'
const srCdPro = Source_Code_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Damon Ma',
  description: 'Damon Ma\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={srCdPro.className}>{children}</body>
    </html>
  )
}
