/**
 * Vector Telemetry Atlas: a sharp cyan vector monogram anchors the identity rail.
 */
type BrandMarkProps = {
  compact?: boolean;
};

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <a className="brand-mark" href="#profile" aria-label="M Dhruv — return to profile">
      <span className="brand-mark__icon" aria-hidden="true">
        <img src="/assets/dhruv-md-vector-logo.png" alt="" />
      </span>
      {!compact && (
        <span className="brand-mark__copy">
          <strong>M Dhruv</strong>
          <small>AI &amp; Systems Engineer</small>
        </span>
      )}
    </a>
  );
}
