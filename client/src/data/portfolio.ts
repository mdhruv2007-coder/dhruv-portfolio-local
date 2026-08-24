/**
 * Vector Telemetry Atlas: content model for a precise, measurable engineering portfolio.
 */
export type Metric = {
  label: string;
  value: string;
  detail: string;
  tone: "cyan" | "lime" | "blue" | "violet";
};

export type SkillGroup = {
  title: string;
  signal: string;
  items: string[];
  tone: "cyan" | "lime" | "blue" | "violet";
};

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string; note: string }[];
  highlights: string[];
  stack: string[];
  architecture: string[];
  endpoint: string;
  payload: { key: string; value: string; tone?: "cyan" | "lime" | "neutral" }[];
  visual: string;
  visualAlt: string;
  tone: "battery" | "aero";
};

export const navigation = [
  { label: "Profile", href: "#profile" },
  { label: "Telemetry", href: "#telemetry" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Terminal", href: "#terminal" },
];

export const metrics: Metric[] = [
  {
    label: "P99 inference",
    value: "~2.3 ms",
    detail: "TCN runtime target",
    tone: "cyan",
  },
  {
    label: "TR false negatives",
    value: "0.0%",
    detail: "Across 90 positive tests",
    tone: "lime",
  },
  {
    label: "SoH model RMSE",
    value: "1.158%",
    detail: "ONNX-exported TCN",
    tone: "blue",
  },
  {
    label: "Aero analysis range",
    value: "≤ 2.0M",
    detail: "Reynolds number bound",
    tone: "violet",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & CS",
    signal: "LANG",
    tone: "cyan",
    items: ["Python 3.11", "C Programming", "Data Structures & Algorithms", "Linear Algebra"],
  },
  {
    title: "ML & Deep Learning",
    signal: "MODEL",
    tone: "lime",
    items: ["PyTorch", "Scikit-learn", "XGBoost", "ONNX Runtime", "Temporal CNNs"],
  },
  {
    title: "Backend & Systems",
    signal: "API",
    tone: "blue",
    items: ["FastAPI", "Pydantic", "Uvicorn", "REST APIs", "CAN Bus Ingestion", "Rate Limiting"],
  },
  {
    title: "Simulation & Tooling",
    signal: "SIM",
    tone: "violet",
    items: ["OpenFOAM (RANS)", "XFoil", "Git", "WSL2 / Conda", "Cloudflare Tunnels", "Vercel"],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "APEX.AI",
    subtitle: "Battery Intelligence System · EBISM Backend",
    tags: ["Formula Student EV", "Dual ML API"],
    description:
      "A real-time lithium-ion thermal and health engine built for Formula Student EV battery packs. The backend combines safety classification and state-of-health tracking so telemetry can be evaluated inside a sub-5ms runtime budget.",
    metrics: [
      { label: "P99 latency", value: "~2.3ms", note: "runtime" },
      { label: "TR false negatives", value: "0.0%", note: "90 tests" },
      { label: "SoH RMSE", value: "1.158%", note: "TCN model" },
    ],
    highlights: [
      "Paired an XGBoost thermal-runaway classifier with a PyTorch Temporal Convolutional Network exported to ONNX for state-of-health tracking.",
      "Mapped API outputs into GREEN, AMBER, RED, and ABORT safety tiers with API-key authentication and rate limiting.",
      "Connected the service to a real-time CAN bus ingestion flow and completed 19 integration tests.",
    ],
    stack: ["Python 3.11", "FastAPI", "XGBoost", "PyTorch TCN", "ONNX Runtime", "CAN Bus"],
    architecture: ["CAN telemetry ingest", "Pydantic validation", "Dual-model inference", "Alert-tier mapping", "Signed API response"],
    endpoint: "POST /api/v1/telemetry/evaluate",
    payload: [
      { key: "tr_risk_score", value: "0.0012", tone: "lime" },
      { key: "soh_percentage", value: "98.42", tone: "neutral" },
      { key: "latency_ms", value: "2.28", tone: "lime" },
      { key: "alert_state", value: "GREEN", tone: "lime" },
    ],
    visual: "/assets/apex-battery-system-visual.png",
    visualAlt: "Abstract battery telemetry illustration",
    tone: "battery",
  },
  {
    index: "02",
    title: "AERO.AI",
    subtitle: "Aerodynamic Coefficient Prediction Engine · MVP1 Backend",
    tags: ["FSAE Aerodynamics", "CFD Surrogate Model"],
    description:
      "A lightweight ML surrogate that replaces compute-heavy CFD iterations for FSAE 2D airfoil analysis. The FastAPI service predicts coefficient, stall-margin, and lift-to-drag outputs for NACA four-digit airfoils.",
    metrics: [
      { label: "Model weight", value: "~5.4 MB", note: "PyTorch binary" },
      { label: "Reynolds range", value: "≤ 2.0M", note: "flow condition" },
      { label: "Geometry", value: "NACA 4", note: "2D airfoil" },
    ],
    highlights: [
      "Produces Cₗ, C_d, C_m, stall-margin, and L/D balance estimates without launching a new CFD solve.",
      "Trained against OpenFOAM RANS CFD and XFoil simulation data for engineering-oriented surrogate inference.",
      "Uses structured Pydantic schemas and Cloudflare Tunnels to expose remote API access from a WSL2 / Conda workflow.",
    ],
    stack: ["Python 3.11", "PyTorch", "FastAPI", "OpenFOAM", "XFoil", "Cloudflare Tunnels"],
    architecture: ["NACA parameter input", "Flow-condition schema", "Neural surrogate", "Coefficient post-process", "Remote API response"],
    endpoint: "POST /api/v1/airfoil/predict",
    payload: [
      { key: "cl", value: "0.842", tone: "cyan" },
      { key: "cd", value: "0.0187", tone: "neutral" },
      { key: "cm", value: "-0.091", tone: "neutral" },
      { key: "ld_ratio", value: "45.02", tone: "cyan" },
    ],
    visual: "/assets/aero-airfoil-system-visual.png",
    visualAlt: "Abstract airfoil and CFD streamline illustration",
    tone: "aero",
  },
];
