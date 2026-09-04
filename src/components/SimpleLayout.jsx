import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
  containerClassName = 'mt-16 sm:mt-32',
  contentClassName = 'mt-16 sm:mt-20',
}) {
  return (
    <Container className={containerClassName}>
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className={contentClassName}>{children}</div>}
    </Container>
  )
}
