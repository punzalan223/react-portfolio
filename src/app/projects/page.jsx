import Image from 'next/image'

import { Card } from '@/components/Card'
import { FleetlyfCard } from '@/components/FleetlyfCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import { projects } from '@/lib/portfolio'

export const metadata = {
  title: 'Projects',
  description: 'A selection of projects built by Patrick Lester M. Punzalan.',
}

export default function Projects() {
  return (
  <SimpleLayout
    containerClassName="mt-24 sm:mt-40"
    contentClassName="mt-16"
      title="Projects I’ve built across products, data, and operations."
      intro="Much of my work has been built for companies or as private internal systems, so it cannot all be shared publicly. Here are a few selected examples from the broader body of projects I’ve built and contributed to over the years."
    >
      <FleetlyfCard className="mb-16" />
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-0">
              <Image src={project.image} alt={`${project.name} project screenshot`} className="aspect-[16/9] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            </div>
            <Card.Eyebrow decorate>Project {String(index + 1).padStart(2, '0')}</Card.Eyebrow>
            <Card.Title className="mt-3">{project.name}</Card.Title>
            <Card.Description>{project.description}</Card.Description>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
