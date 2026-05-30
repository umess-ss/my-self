type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = ""
}: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
