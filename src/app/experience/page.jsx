import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { experiences, skillGroups } from '@/lib/portfolio'

function Role({ experience }) {
  return (
    <article className="grid grid-cols-1 gap-4 md:grid-cols-[9rem_1fr] md:items-start">
      <Card.Eyebrow className="mt-1" as="time" dateTime={experience.startDate}>{experience.period}</Card.Eyebrow>
      <Card>
        <Card.Title>{experience.role}</Card.Title>
        <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">{experience.company} / {experience.location}</p>
        <Card.Description>{experience.summary}</Card.Description>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 marker:text-zinc-900 dark:text-zinc-400 dark:marker:text-zinc-100">
          {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </Card>
    </article>
  )
}

export const metadata = {
  title: 'Experience',
  description: 'Professional experience of Patrick Lester M. Punzalan.',
}

export default function Experience() {
  return (
    <SimpleLayout
      title="Experience across data, products, and full-stack systems."
      intro="From freelance data engineering and database administration to client delivery and government AI assistants, this is the full professional timeline from my current resume."
    >
      <div className="space-y-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {experiences.slice().reverse().map((experience) => <Role key={`${experience.company}-${experience.role}`} experience={experience} />)}
          </div>
        </div>
        <Section title="Technical skills">
          <div className="space-y-6">
            {skillGroups.map((group) => <div key={group.label}><h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{group.label}</h3><p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{group.items.join(', ')}</p></div>)}
          </div>
        </Section>
      </div>
    </SimpleLayout>
  )
}
