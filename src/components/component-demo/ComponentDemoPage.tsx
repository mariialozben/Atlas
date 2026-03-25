interface ComponentDemoPageProps {
  name: string
  description: string
  children: React.ReactNode
}

export default function ComponentDemoPage({ name, description, children }: ComponentDemoPageProps) {
  return (
    <main
      data-el={`comp-${name.toLowerCase().replace(/\s+/g, '-')}`}
      className="px-4 py-6 md:px-8 md:py-10 max-w-[900px]"
    >
      <h1
        className="text-2xl font-bold mb-2"
        style={{ color: 'var(--text-primary)', fontFamily: '"Lato", sans-serif' }}
      >
        {name}
      </h1>
      <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
        {description}
      </p>
      {children}
    </main>
  )
}
