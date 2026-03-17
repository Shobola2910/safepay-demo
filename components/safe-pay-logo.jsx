import Image from 'next/image';

export default function SafePayLogo({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''}`}>
      <div className="brand-lockup__copy">
        <Image
          src="/safepay-wordmark-transparent.png"
          alt="SafePay.uz"
          width={compact ? 240 : 340}
          height={compact ? 58 : 78}
          priority
          className="brand-wordmark-image"
        />
        {!compact && (
          <div className="brand-tag">
            Wearable and contactless payment platform
          </div>
        )}
      </div>
    </div>
  );
}
