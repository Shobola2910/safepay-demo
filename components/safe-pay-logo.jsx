import Image from 'next/image';

export default function SafePayLogo({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''}`}>
      <Image
        src="/safepay-wordmark-transparent.png"
        alt="SafePay.uz"
        width={compact ? 280 : 420}
        height={compact ? 64 : 96}
        priority
        className="brand-wordmark-image"
      />
      {!compact && (
        <div className="brand-tag">
          Contactless payment for modern everyday life
        </div>
      )}
    </div>
  );
}
