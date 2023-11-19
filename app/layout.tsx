import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import MuiProvider from '@/theme/MuiTheme'
import './styles/globals.css'
import AppLayout from './components/AppLayout'

const poppins = Poppins({ weight: ['500', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kosmic AI',
  description: 'Ui Development taks'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        <MuiProvider>
          <AppLayout>{children}</AppLayout>
        </MuiProvider>
      </body>
    </html>
  )
}
