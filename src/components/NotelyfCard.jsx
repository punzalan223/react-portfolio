import Image from 'next/image'

import { profile } from '@/lib/portfolio'
import notelyfHome from '@/images/notelyf-home.png'

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 3.75h-2a1 1 0 0 0-1 1v6.5a1 1 0 0 0 1 1h6.5a1 1 0 0 0 1-1v-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 3.75h4v4M12.25 3.75 7.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NotelyfCard({ className = '' }) {
  return (
    <section
      className={`overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200 bg-[#fbfaf6] sm:aspect-[16/7] dark:border-zinc-800">
        <Image
          src={notelyfHome}
          alt="Notelyf customizable workspace home page"
          fill
          priority
          sizes="(min-width: 1024px) 64rem, (min-width: 640px) 42rem, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Notelyf
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            A customizable workspace that brings notes, to-dos, calendars,
            music, and focus tools together through flexible widgets.
          </p>
        </div>
        <a
          href={profile.notelyfUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit shrink-0 items-center rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:ring-offset-zinc-950"
        >
          <ExternalLinkIcon className="mr-1.5 h-3.5 w-3.5" />
          Visit Notelyf
        </a>
      </div>
    </section>
  )
}
