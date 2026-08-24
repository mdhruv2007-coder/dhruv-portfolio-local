/**
 * Vector Telemetry Atlas: project records behave like inspectable engineering reports, not generic cards.
 */
import { ArrowUpRight, Check, ChevronDown, Cpu, Network } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/portfolio";

type ProjectRecordProps = {
  project: Project;
};

export default function ProjectRecord({ project }: ProjectRecordProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`project-record project-record--${project.tone}`}>
      <div className="project-record__visual">
        <img src={project.visual} alt={project.visualAlt} />
        <div className="visual-scanline" aria-hidden="true" />
        <div className="project-index" aria-hidden="true">{project.index}</div>
      </div>

      <div className="project-record__body">
        <div className="project-kickers">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-title-row">
          <div>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>
          <Cpu size={24} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <p className="project-description">{project.description}</p>

        <div className="project-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.note}</small>
            </div>
          ))}
        </div>

        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}><Check size={15} aria-hidden="true" /> <span>{highlight}</span></li>
          ))}
        </ul>

        <div className="project-stack" aria-label={`${project.title} technology stack`}>
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>

        <div className="project-actions">
          <button type="button" onClick={() => setIsExpanded((value) => !value)} aria-expanded={isExpanded}>
            <Network size={15} aria-hidden="true" />
            {isExpanded ? "Hide architecture note" : "Inspect architecture note"}
            <ChevronDown size={15} className={isExpanded ? "chevron-open" : ""} aria-hidden="true" />
          </button>
          <a href="https://github.com/mdhruv2007-coder" target="_blank" rel="noreferrer">
            GitHub profile <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className={`architecture-note ${isExpanded ? "architecture-note--open" : ""}`}>
          <div className="architecture-note__flow">
            {project.architecture.map((step, index) => (
              <span key={step}>
                {step}
                {index < project.architecture.length - 1 && <i aria-hidden="true">→</i>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <aside className="project-record__payload">
        <div className="payload-heading">
          <span>live system sample</span>
          <span className="payload-status"><b /> nominal</span>
        </div>
        <div className="payload-tier-bar" aria-hidden="true">
          <span>green</span><span>amber</span><span>red</span><span>abort</span>
        </div>
        <pre aria-label={`Example response for ${project.endpoint}`}><code>
          <span className="code-comment">// {project.endpoint}</span>{"\n"}
          {"{"}{"\n"}
          {project.payload.map((item, index) => (
            <span className="code-line" key={item.key}>
              <span className="code-key">  &quot;{item.key}&quot;</span>: <span className={`code-value code-value--${item.tone ?? "neutral"}`}>{typeof item.value === "string" && item.key !== "latency_ms" && item.key !== "soh_percentage" && item.key !== "cl" && item.key !== "cd" && item.key !== "cm" && item.key !== "ld_ratio" ? `&quot;${item.value}&quot;` : item.value}</span>{index < project.payload.length - 1 ? "," : ""}{"\n"}
            </span>
          ))}
          {"}"}
        </code></pre>
        <div className="payload-footer">local package <b>{project.title.toLowerCase().replace(".", "-")}-backend</b></div>
      </aside>
    </article>
  );
}
