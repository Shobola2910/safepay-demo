import Image from 'next/image';

export default function SafePayLogo({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''}`}>
      <Image
        src="/safepay-mark.png"
        alt="SafePay icon"
        width={compact ? 34 : 44}
        height={compact ? 34 : 44}
        className="brand-mark-image"
      />
      <div className="brand-lockup__copy">
        <Image
          src="/safepay-wordmark-transparent.png"
          alt="SafePay.uz"
          width={compact ? 170 : 250}
          height={compact ? 44 : 64}
          className="brand-wordmark-image"
        />
        {!compact && <div className="brand-tag">Wearable and contactless payment experience</div>}
      </div>
    </div>
  );
}
