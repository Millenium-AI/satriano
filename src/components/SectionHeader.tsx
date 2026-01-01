interface SectionHeaderProps {
  title: string;
  highlightedText?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  highlightedText, 
  subtitle,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-burgundy mb-4">
        {title}{' '}
        {highlightedText && <span className="text-gold">{highlightedText}</span>}
      </h2>
      {subtitle && (
        <p className="text-xl text-burgundy max-w-3xl mx-auto mt-6">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-6"></div>
    </div>
  );
}
