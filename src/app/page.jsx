import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { FacebookIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import { careerObjective, experiences, profile, projects, researchProjects } from '@/lib/portfolio'
import fleetlyfImage from '@/images/fleetlyf.png'

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2v-9Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        strokeWidth="1.5"
      />
      <path
        d="M8 6.5V5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 5v1.5M5 13h5.2c.4 0 .8.1 1.1.4l.7.6.7-.6c.3-.3.7-.4 1.1-.4H19"
        className="stroke-zinc-400 dark:stroke-zinc-500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <a
      className="p-1 -m-1 group"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noreferrer' : undefined}
      {...props}
    >
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}

function ResearchCard({ project, index }) {
  return (
    <Card as="article">
      <Card.Eyebrow decorate>Research Project {String(index + 1).padStart(2, '0')}</Card.Eyebrow>
      <Card.Title className="pl-3.5">{project.title}</Card.Title>
      <Card.Description className="pl-3.5">{project.description}</Card.Description>
    </Card>
  )
}

function ContactPanel() {
  return (
    <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="flex-none w-6 h-6 fill-zinc-500" />
        <span className="ml-3">Contact</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        For product work, technical collaboration, or a useful conversation.
      </p>
      <div className="mt-5 space-y-3 text-sm">
        <a href={`mailto:${profile.email}`} className="block font-medium text-zinc-800 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white">{profile.email}</a>
        <p className="text-zinc-500 dark:text-zinc-400">{profile.phone}</p>
        <p className="text-zinc-500 dark:text-zinc-400">{profile.address}</p>
      </div>
    </div>
  )
}

function Role({ role }) {
  return (
    <li>
      <div className="flex items-start justify-between gap-4">
        <dl className="min-w-0 space-y-1">
          <dt className="sr-only">Company</dt>
          <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.role}</dd>
        </dl>
        <dl className="text-right shrink-0">
          <dt className="sr-only">Date</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            <time dateTime={role.startDate}>{role.period}</time>
          </dd>
        </dl>
      </div>
    </li>
  )
}

function Resume() {
  return (
    <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {experiences.slice().reverse().map((role) => <Role key={`${role.company}-${role.role}`} role={role} />)}
      </ol>
      <Button href="/resume.pdf" variant="secondary" download className="w-full mt-6 group">
        Download resume
        <ArrowDownIcon className="w-4 h-4 transition text-zinc-400 group-active:text-zinc-600 dark:group-hover:text-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let featuredProjectNames = ['Filipino Classifieds', 'Lurtsema HR Portal', 'Northwest Nurses', 'The Alaska List']
  let photos = [
    ...featuredProjectNames.map((name) => {
      let project = projects.find((project) => project.name === name)
      return { image: project.image, name: project.name }
    }),
    { image: fleetlyfImage, name: 'Fleetlyf' },
  ]
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <Container>
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Selected projects
        </h2>
        <p className="mt-2 mb-16 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          A few examples of products and platforms I’ve built. Most of my corporate work remains private.
        </p>
      </Container>
      <div className="mt-6">
        <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
          {photos.map((photo, photoIndex) => (
            <div key={photo.name} className={clsx('relative w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-80 sm:rounded-2xl lg:w-96 dark:bg-zinc-800', rotations[photoIndex % rotations.length])}>
              <div className="aspect-[4/3]">
                <Image src={photo.image} alt={`${photo.name} preview`} sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 13rem" quality={100} className="absolute inset-0 object-cover w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Patwicku',
  description: 'Portfolio of Patrick Lester M. Punzalan, senior full-stack developer and builder of Fleetlyf.com.',
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">{profile.headlineRole}</h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’m {profile.name}. I build and maintain web applications, data systems, and LLM-powered workflow tools across Laravel, Vue.js/React, Fastify, Node.js, MySQL, and Python. My current role is Information Technology Officer II (Senior Full Stack Developer) at DSWD Government.</p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">{careerObjective}</p>
          <div className="flex gap-6 mt-6">
            <SocialLink href={profile.githubUrl} aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink href={profile.linkedinUrl} aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
            <SocialLink href={profile.facebookUrl} aria-label="Follow on Facebook" icon={FacebookIcon} />
            <SocialLink href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} icon={MailIcon} />
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button href="/projects">View projects</Button>
            <Button href="/resume.pdf" variant="secondary" download>Download resume</Button>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {researchProjects.map((project, index) => <ResearchCard key={project.title} project={project} index={index} />)}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ContactPanel />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
