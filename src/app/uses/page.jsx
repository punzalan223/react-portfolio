import Image from 'next/image'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { skillGroups, techIcons } from '@/lib/portfolio'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software, frameworks, data libraries, and deployment tools used by Patrick Punzalan.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="The tools I use to build, connect, and ship."
      intro="My technical range spans AI and LLM integration, application development, data work, cloud infrastructure, and the tools that keep delivery moving."
    >
      <div className="space-y-20">
        <ToolsSection title="Core stack">
          <Tool title="Languages">Python, PHP, JavaScript, C/C++, and Assembly.</Tool>
          <Tool title="Frameworks & CMS">Laravel, Filament, Node.js, Vue.js, React, Livewire, Fastify, and WordPress.</Tool>
          <Tool title="Data libraries">pandas, NumPy, Matplotlib, OpenCV, SciPy, and Seaborn.</Tool>
        </ToolsSection>
        <ToolsSection title="AI & LLM integration">
          <Tool title="Current practice">OpenAI Codex, Claude Code, and LLM APIs (GPT/Claude) for assistants, automated text insights, summaries, and rule-based system predictions.</Tool>
        </ToolsSection>
        <ToolsSection title="Cloud & DevOps">
          <Tool title="Delivery">DigitalOcean, AWS (S3), Git, GitHub, Linux/WSL, and application deployment.</Tool>
        </ToolsSection>
        <ToolsSection title="Original portfolio stack">
          <li className="grid grid-cols-3 gap-6 sm:grid-cols-6">
            {techIcons.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-3">
                <Image src={tech.image} alt={`${tech.name} logo`} width={48} height={48} className={`h-12 w-12 object-contain ${tech.invertOnDark ? 'dark:invert' : ''}`} />
                <span className="text-center text-xs text-zinc-500 dark:text-zinc-400">{tech.name}</span>
              </div>
            ))}
          </li>
        </ToolsSection>
        <ToolsSection title="Full skills index">
          <Tool title="Everything in one place">{skillGroups.map((group) => `${group.label}: ${group.items.join(', ')}`).join(' | ')}</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
