/**
 * Vector Telemetry Atlas: the contact area is a composed terminal record with direct, trustworthy actions.
 */
import { Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function TerminalContact() {
  const [copied, setCopied] = useState(false);
  const email = "mdhruv2007@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="terminal-contact" id="terminal" aria-labelledby="terminal-title">
      <div className="terminal-contact__rail" aria-hidden="true">
        <span>CONTACT</span>
        <i />
        <span>SYS.06</span>
      </div>
      <div className="terminal-contact__body">
        <div className="terminal-contact__windowbar">
          <span><i /> <i /> <i /></span>
          <span>contact_console.sh</span>
          <span>ready</span>
        </div>
        <div className="terminal-contact__content">
          <p className="terminal-prompt"><b>dhruv@systems:~$</b> <span>whoami</span></p>
          <h2 id="terminal-title">Building systems where milliseconds matter.</h2>
          <p className="terminal-copy">Open to machine learning, data science, and engineering opportunities that need thoughtful modeling, production-minded inference, and a measurable outcome.</p>

          <div className="contact-actions" id="contact">
            <a className="contact-email" href={`mailto:${email}`}><Mail size={17} /> {email}</a>
            <button className="copy-email" type="button" onClick={copyEmail} aria-live="polite"><Copy size={15} /> {copied ? "Copied" : "Copy address"}</button>
          </div>

          <div className="contact-links">
            <a href="https://github.com/mdhruv2007-coder" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/dhruv-m-105357400" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
