/**
 * Vector Telemetry Atlas: a dark, asymmetric engineering portfolio built around evidence and system records.
 */
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, Github, GraduationCap, Linkedin, Server, Wind } from "lucide-react";
import ProjectRecord from "@/components/ProjectRecord";
import SectionHeading from "@/components/SectionHeading";
import SiteHeader from "@/components/SiteHeader";
import TelemetryPanel from "@/components/TelemetryPanel";
import TerminalContact from "@/components/TerminalContact";
import { metrics, projects, skillGroups } from "@/data/portfolio";

const skillIcons = [Code2, BrainCircuit, Server, Wind];

export default function Home() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main>
        <section className="hero-section" id="profile" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-status"><i /> AVAILABLE FOR ML &amp; DATA SCIENCE INTERNSHIPS</div>
              <p className="hero-coordinate">[ 12.9716° N · 77.5946° E ]</p>
              <h1 id="hero-title">Train for the model.<br /><em>Ship for the millisecond.</em></h1>
              <p className="hero-intro">I’m <strong>M Dhruv</strong>, a third-semester AI &amp; Data Science undergraduate at REVA University. I build low-latency ML surrogate models, real-time API inference engines, and Formula Student engineering systems that are designed to be measured.</p>

              <div className="hero-tags" aria-label="Focus technologies">
                <span>Python 3.11</span><span>PyTorch</span><span>FastAPI</span><span>ONNX Runtime</span><span>OpenFOAM</span>
              </div>

              <div className="hero-actions">
                <a className="primary-button" href="#work">Inspect project records <ArrowDown size={16} /></a>
                <a className="icon-button" href="https://github.com/mdhruv2007-coder" target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub</span></a>
                <a className="icon-button" href="https://www.linkedin.com/in/dhruv-m-105357400" target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn</span></a>
              </div>
            </div>
            <TelemetryPanel />
          </div>
        </section>

        <section className="metrics-section" id="telemetry" aria-label="Key telemetry metrics">
          <div className="metric-section-label"><span>SYS.01</span><i /> <span>performance envelope</span></div>
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article className={`metric-card metric-card--${metric.tone}`} key={metric.label}>
                <p>{metric.label}</p>
                <strong>{metric.value}</strong>
                <span>{metric.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section" id="stack" aria-labelledby="stack-title">
          <SectionHeading index="02" eyebrow="Technical architecture" title="A stack shaped for real-world inference." description="Tools selected for efficient modeling, mathematical simulation, and production-minded backend work." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[index];
              return (
                <article className={`skill-panel skill-panel--${group.tone}`} key={group.title}>
                  <div className="skill-panel__top"><span>{group.signal}</span><Icon size={22} strokeWidth={1.5} /></div>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              );
            })}
          </div>
          <div className="education-strip">
            <GraduationCap size={20} strokeWidth={1.5} aria-hidden="true" />
            <div><span>Current academic record</span><strong>REVA University · B.Tech in Artificial Intelligence &amp; Data Science · Semester III</strong></div>
            <p>Coursework: Data Structures &amp; Algorithms, C/Python Programming, Applied Mathematics.</p>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <SectionHeading index="03" eyebrow="Featured engineering records" title="Applied ML systems built for motion." description="Two focused backends for battery safety intelligence and aerodynamic model acceleration." />
          <div className="project-list">
            {projects.map((project) => <ProjectRecord project={project} key={project.title} />)}
          </div>
        </section>

        <TerminalContact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} M Dhruv</span>
        <span>Built as a systems record</span>
        <a href="#profile">Return to origin <ArrowUpRight size={13} /></a>
      </footer>
    </div>
  );
}
