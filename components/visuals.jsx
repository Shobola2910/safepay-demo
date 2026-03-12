export function PaymentVisual() {
  return (
    <div className="visual visual--payment">
      <div className="terminal" />
      <div className="hand" />
      <div className="ring-glow" />
    </div>
  );
}

export function CardOrbitVisual() {
  return (
    <div className="visual visual--cards">
      <div className="orbit orbit--one" />
      <div className="orbit orbit--two" />
      <div className="floating-card floating-card--one" />
      <div className="floating-card floating-card--two" />
      <div className="floating-card floating-card--three" />
    </div>
  );
}

export function SecurityVisual() {
  return (
    <div className="visual visual--security">
      <div className="shield-core">✓</div>
      <div className="shield-glow" />
      <div className="device-slab" />
    </div>
  );
}

export function RingPulseVisual() {
  return (
    <div className="visual visual--ring">
      <div className="pulse pulse--one" />
      <div className="pulse pulse--two" />
      <div className="ring-render" />
    </div>
  );
}

export function RingRender({ large = false }) {
  return <div className={`ring-render ${large ? 'ring-render--large' : ''}`} />;
}

export function WatchRender() {
  return <div className="watch-render" />;
}

export function SuccessVisual() {
  return (
    <div className="success-visual">
      <div className="success-visual__check">✓</div>
    </div>
  );
}
