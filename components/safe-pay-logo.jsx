export default function SafePayLogo({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''}`}>
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="safeGradient" x1="8" y1="6" x2="46" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6AA8FF" />
            <stop offset="1" stopColor="#0A74FF" />
          </linearGradient>
        </defs>
        <path d="M28 7c6.6 0 12.9 2.4 17.7 6.7l-6.3 5.1A17.4 17.4 0 0 0 28 14c-5.1 0-9.7 2-13.1 5.2l4.3 3.4A11 11 0 0 1 28 18c2.7 0 5.2 1 7.1 2.7l4.7-3.7A18.8 18.8 0 0 0 28 11.4c-4.9 0-9.5 1.8-13.1 5.1A19 19 0 0 0 9 28c0 5.4 2.2 10.3 5.8 13.8 3.6 3.5 8.4 5.7 13.2 5.7 5.7 0 11.1-2.9 14.2-7.6l-6.1-4.4A11.3 11.3 0 0 1 28 40c-6.1 0-11-5.4-11-12 0-.9.1-1.8.3-2.6L8.5 18.5A26.8 26.8 0 0 0 7 28c0 11.6 9.4 21 21 21 9.1 0 17.3-5.8 20.2-14.4.3-.8.5-1.8.7-2.9h-8c-.8 5-5.3 8.8-10.9 8.8-3.6 0-6.7-1.6-8.8-4.2l27.8-.1c.1-1 .2-2 .2-3.1 0-14.4-9.6-26.1-21.2-26.1Z" fill="url(#safeGradient)"/>
      </svg>
      <div>
        <div className="brand-name">SafePay</div>
        {!compact && <div className="brand-tag">Tap Smarter. Pay Safer.</div>}
      </div>
    </div>
  );
}
