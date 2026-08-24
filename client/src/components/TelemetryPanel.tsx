/**
 * Vector Telemetry Atlas: an instrument-like status panel visualizes measurable system evidence.
 */
import { Activity, MapPin, ShieldCheck, Timer, Zap } from "lucide-react";

const readings = [
  { label: "Inference latency (p99)", value: "~2.3 ms", icon: Timer, tone: "cyan" },
  { label: "Thermal runaway FN rate", value: "0.0% (0/90)", icon: ShieldCheck, tone: "lime" },
  { label: "State-of-health RMSE", value: "1.158%", icon: Activity, tone: "cyan" },
  { label: "Model binaries", value: "2.3–5.4 MB", icon: Zap, tone: "neutral" },
  { label: "Base location", value: "Bengaluru, India", icon: MapPin, tone: "neutral" },
];

export default function TelemetryPanel() {
  return (
    <aside className="telemetry-panel" aria-label="Current engineering telemetry">
      <div className="telemetry-panel__image" aria-hidden="true" />
      <div className="telemetry-panel__topbar">
        <div className="window-controls" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>inference_daemon.py</span>
        <span className="system-online"><b /> online</span>
      </div>

      <div className="telemetry-panel__content">
        <div className="terminal-label">
          <span>system telemetry</span>
          <span>v1.0.0</span>
        </div>

        <div className="telemetry-readings">
          {readings.map(({ label, value, icon: Icon, tone }) => (
            <div className="telemetry-reading" key={label}>
              <span className={`telemetry-reading__icon telemetry-reading__icon--${tone}`}>
                <Icon size={14} strokeWidth={1.8} />
              </span>
              <span className="telemetry-reading__label">{label}</span>
              <strong className={tone === "lime" ? "text-lime" : ""}>{value}</strong>
            </div>
          ))}
        </div>

        <div className="runtime-log" aria-label="Runtime health checks">
          <p><span>$</span> system.check --all</p>
          <p><b>✓</b> FastAPI server responding</p>
          <p><b>✓</b> CAN ingestion active</p>
          <p><b>✓</b> Secure remote route available</p>
        </div>
      </div>
    </aside>
  );
}
