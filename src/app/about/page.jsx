import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FacebookIcon, GitHubIcon, GlobeIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import { careerObjective, profile, reference, researchProjects, skillGroups } from '@/lib/portfolio'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon, external = false }) {
  return (
    <li className={clsx(className, 'flex')}>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-950 dark:fill-zinc-400 dark:group-hover:fill-white" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  )
}

export const metadata = {
  title: 'About',
  description: 'About Patrick Lester M. Punzalan, senior full-stack developer and builder of Fleetlyf.com.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt={`Portrait of ${profile.name}`}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">I’m {profile.name}. I build useful systems.</h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>I’m a {profile.role.toLowerCase()} working across interfaces, backend services, data, deployment, and the conversations that shape the right solution.</p>
            <p>My current role is Information Technology Officer II (Senior Full Stack Developer) at DSWD Government. I build and maintain government web applications, internal AI assistants, and intelligent data features that generate insights, summaries, and rule-based system predictions.</p>
            <p>I built <a href={profile.fleetlyfUrl} target="_blank" rel="noreferrer" className="font-medium text-zinc-900 hover:text-zinc-950 dark:text-zinc-100 dark:hover:text-white">Fleetlyf.com</a> alongside my professional work.</p>
            <p>Outside technical work, I read, keep active at the gym, follow new technology, and play games to unwind.</p>
            <p>{careerObjective}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/resume.pdf" variant="secondary" download>Download resume</Button>
            <Button href={`mailto:${profile.email}`}>Email Patrick</Button>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={profile.githubUrl} icon={GitHubIcon} external>Follow on GitHub</SocialLink>
            <SocialLink href={profile.linkedinUrl} icon={LinkedInIcon} className="mt-4" external>Connect on LinkedIn</SocialLink>
            <SocialLink href={profile.facebookUrl} icon={FacebookIcon} className="mt-4" external>Find me on Facebook</SocialLink>
            <SocialLink href={profile.fleetlyfUrl} icon={GlobeIcon} className="mt-4" external>Visit Fleetlyf.com</SocialLink>
            <SocialLink href={`mailto:${profile.email}`} icon={MailIcon} className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">{profile.email}</SocialLink>
          </ul>
        </div>
      </div>

      <div className="mt-24 space-y-20 sm:mt-32">
        <Section title="Education">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{profile.education} at {profile.school}.</p>
        </Section>
        <Section title="Design projects completed / researches">
          <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
            {researchProjects.map((project) => <li key={project.title} className="flex gap-3"><span className="text-zinc-900 dark:text-zinc-100" aria-hidden="true">•</span><span>{project.title}</span></li>)}
          </ul>
        </Section>
        <Section title="Technical skills">
          <div className="space-y-5">
            {skillGroups.map((group) => <div key={group.label}><h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{group.label}</h3><p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{group.items.join(', ')}</p></div>)}
          </div>
        </Section>
        <Section title="Reference">
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{reference.name} / {reference.phone} / {reference.role}</p>
        </Section>
      </div>
    </Container>
  )
}
