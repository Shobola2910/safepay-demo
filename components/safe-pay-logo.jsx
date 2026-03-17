export default function SafePayLogo({ compact = false }) {
  return (
    <div className={`sp-brand ${compact ? 'sp-brand--compact' : ''}`}>
      <div className="sp-brand__mark" aria-hidden="true">
        <span className="sp-brand__mark-s">S</span>
      </div>

      <div className="sp-brand__text">
        <div className="sp-brand__name">
          <span className="sp-brand__safe">Safe</span>
          <span className="sp-brand__pay">Pay</span>
          <span className="sp-brand__uz">.uz</span>
        </div>

        {!compact && (
          <div className="sp-brand__tagline">
            Contactless payment for modern everyday life
          </div>
        )}
      </div>
    </div>
  );
}
