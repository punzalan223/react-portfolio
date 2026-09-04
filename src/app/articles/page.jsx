import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { researchProjects } from '@/lib/portfolio'

export const metadata = {
  title: 'Research',
  description: 'Design projects and research completed by Patrick Lester M. Punzalan.',
}

export default function Research() {
  return (
    <SimpleLayout
      title="Research that keeps the build grounded."
      intro="These design projects and researches show the other side of my work: exploring data, algorithms, and the systems behind a useful outcome."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {researchProjects.map((project, index) => (
            <article key={project.title} className="md:grid md:grid-cols-4 md:items-baseline">
              <Card className="md:col-span-3">
                <Card.Title className="pl-3.5">{project.title}</Card.Title>
                <Card.Description className="pl-3.5">{project.description}</Card.Description>
                <Card.Eyebrow decorate>Research Project {String(index + 1).padStart(2, '0')}</Card.Eyebrow>
              </Card>
              <Card.Eyebrow className="mt-1 max-md:hidden">Completed</Card.Eyebrow>
            </article>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
