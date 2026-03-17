export default function SafePayLogo({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''}`}>
      <div className="brand-name">
        <span className="brand-name__safe">Safe</span>
        <span className="brand-name__pay">Pay</span>
        <span className="brand-name__uz">.uz</span>
      </div>

      {!compact && (
        <div className="brand-tag">
          Contactless payment for modern everyday life
        </div>
      )}
    </div>
  );
}
