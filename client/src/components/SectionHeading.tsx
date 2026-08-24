/**
 * Vector Telemetry Atlas: section headings use compact coordinate labels and declarative hierarchy.
 */
type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__index" aria-hidden="true">{index}</div>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <div className="section-heading__description">{description}</div>}
    </div>
  );
}
