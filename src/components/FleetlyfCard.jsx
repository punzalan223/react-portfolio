import Image from 'next/image'
import localFont from 'next/font/local'

import { profile } from '@/lib/portfolio'
import fleetlyfBackground from '@/images/fleetlyf-background.webp'

const fleetlyfInter = localFont({
  src: '../fonts/inter-latin-wght-normal.woff2',
  display: 'swap',
  weight: '100 900',
})

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

function FleetlyfLogo() {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Fleetlyf">
      <svg
        className="h-10 w-11 shrink-0"
        viewBox="0 0 57 57"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fleetlyf-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#333B4A" />
            <stop offset="55%" stopColor="#181C24" />
            <stop offset="100%" stopColor="#090B0F" />
          </linearGradient>
          <linearGradient id="fleetlyf-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA45C" />
            <stop offset="50%" stopColor="#FC6220" />
            <stop offset="100%" stopColor="#E8440A" />
          </linearGradient>
          <linearGradient id="fleetlyf-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <clipPath id="fleetlyf-f-clip">
            <polygon points="18,13 46,14 44,18 23,21 23,40 19,44 18,42" />
          </clipPath>
          <clipPath id="fleetlyf-orange-clip">
            <polygon points="25,26 42,26 39,32 25,32" />
          </clipPath>
          <filter id="fleetlyf-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0.8" stdDeviation="0.9" floodColor="#000000" floodOpacity="0.35" />
          </filter>
        </defs>
        <rect width="57" height="57" rx="10" fill="#FFFFFF" />
        <g transform="translate(0 2.5)">
          <polygon points="18,13 46,14 44,18 23,21 23,40 19,44 18,42" fill="url(#fleetlyf-dark)" filter="url(#fleetlyf-shadow)" />
          <g clipPath="url(#fleetlyf-f-clip)">
            <polygon points="18,13 46,14 46,20 18,20" fill="url(#fleetlyf-sheen)" />
          </g>
          <polygon points="25,26 42,26 39,32 25,32" fill="url(#fleetlyf-orange)" filter="url(#fleetlyf-shadow)" />
          <g clipPath="url(#fleetlyf-orange-clip)">
            <polygon points="25,26 42,26 41,28.5 25,28.5" fill="url(#fleetlyf-sheen)" />
          </g>
        </g>
      </svg>
      <span className={`${fleetlyfInter.className} text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl`}>
        Fleet<span className="text-[#FE551B]">lyf</span>
      </span>
    </span>
  )
}

export function FleetlyfCard({ className = '' }) {
  return (
    <section className={`group relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 ${className}`}>
      <Image
        src={fleetlyfBackground}
        alt=""
        fill
        sizes="(min-width: 1024px) 64rem, (min-width: 640px) 42rem, 100vw"
        className="object-cover object-center transition duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/30" />
      <a href={profile.fleetlyfUrl} target="_blank" rel="noreferrer" className="absolute top-5 right-5 z-10 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:top-6 sm:right-6">
        <ExternalLinkIcon className="mr-1.5 h-3.5 w-3.5" />
        Visit Fleetlyf
      </a>
      <div className="relative px-9 py-9 sm:px-11 sm:py-10 lg:px-12 lg:py-11">
        <div className="max-w-2xl pt-12 sm:pt-0">
          <h2>
            <FleetlyfLogo />
          </h2>
          <p className="mt-4 text-lg font-semibold leading-7 text-zinc-100">The Complete Operating Record for Every Vehicle</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">Fleetlyf keeps maintenance, documents, fuel, mileage, issues, trips, client balances, invoices, and decisions connected to the right vehicle. No tracking hardware required.</p>
        </div>
      </div>
    </section>
  )
}
