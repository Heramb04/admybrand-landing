interface SectionHeaderProps {
  title: string
  subtitle: string
  description: string
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-geist tracking-tight">{title}</h2>
      <p className="text-xl text-blue-300 mb-6 font-medium">{subtitle}</p>
      <p className="text-gray-300 text-lg leading-relaxed font-normal">{description}</p>
    </div>
  )
}
