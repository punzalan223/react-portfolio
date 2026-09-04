import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { profile } from '@/lib/portfolio'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: `%s - ${profile.siteName}`,
    default:
      `${profile.siteName} - Full Stack Engineer`,
  },
  description:
    'Portfolio of Patrick Lester M. Punzalan, a senior full-stack developer building web applications, data systems, and LLM-powered workflow tools.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
