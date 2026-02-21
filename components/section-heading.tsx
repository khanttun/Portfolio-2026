export default function SectionHeading({
  label,
  title,
}: {
  label: string
  title: string
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{label}</span>
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <div className="hidden h-px flex-1 bg-border sm:block" />
    </div>
  )
}
