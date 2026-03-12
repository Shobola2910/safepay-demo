import Link from 'next/link';
import Switch from './switch';

export function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

export function PrimaryButton({ href, children, className = '', fullWidth = true }) {
  const classes = `btn btn--primary ${fullWidth ? 'btn--full' : ''} ${className}`.trim();
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type="button" className={classes}>{children}</button>;
}

export function SecondaryButton({ href, children, className = '', fullWidth = true }) {
  const classes = `btn btn--secondary ${fullWidth ? 'btn--full' : ''} ${className}`.trim();
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type="button" className={classes}>{children}</button>;
}

export function TextLink({ href, children }) {
  return <Link href={href} className="text-link">{children}</Link>;
}

export function InputField({ label, placeholder, type = 'text', rightLabel }) {
  return (
    <label className="field">
      <div className="field__meta">
        <span>{label}</span>
        {rightLabel ? <span>{rightLabel}</span> : null}
      </div>
      <input className="field__input" type={type} placeholder={placeholder} defaultValue="" />
    </label>
  );
}

export function SearchField({ placeholder = 'Search transactions or merchants' }) {
  return (
    <div className="search-field">
      <span aria-hidden="true">⌕</span>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export function OtpBoxes({ values = ['0', '5', '8', '', '', ''] }) {
  return (
    <div className="otp-grid">
      {values.map((value, index) => (
        <div key={`${value}-${index}`} className="otp-box">{value || '•'}</div>
      ))}
    </div>
  );
}

export function StatusPill({ children, tone = 'info' }) {
  return <span className={`status-pill status-pill--${tone}`}>{children}</span>;
}

export function SectionCard({ children, className = '' }) {
  return <section className={`section-card ${className}`.trim()}>{children}</section>;
}

export function CardVisual({ brand, nickname, number, expiry = '09/29', holder = 'Ismoilbek S.', color = 'silver' }) {
  return (
    <div className={`bank-card bank-card--${color}`}>
      <div className="bank-card__row">
        <span>{brand}</span>
        <span className="bank-card__chip">◫</span>
      </div>
      <div className="bank-card__number">{number}</div>
      <div className="bank-card__footer">
        <div>
          <div className="bank-card__label">Nickname</div>
          <div>{nickname}</div>
        </div>
        <div>
          <div className="bank-card__label">Expires</div>
          <div>{expiry}</div>
        </div>
        <div>
          <div className="bank-card__label">Holder</div>
          <div>{holder}</div>
        </div>
      </div>
    </div>
  );
}

export function MetricCard({ value, label, accent = 'blue' }) {
  return (
    <div className={`metric-card metric-card--${accent}`}>
      <div className="metric-card__value">{value}</div>
      <div className="metric-card__label">{label}</div>
    </div>
  );
}

export function QuickAction({ label, meta, href }) {
  return (
    <Link href={href} className="quick-action">
      <span>{label}</span>
      <small>{meta}</small>
    </Link>
  );
}

export function TransactionRow({ merchant, meta, amount, status }) {
  return (
    <div className="list-row">
      <div className="list-row__avatar">{merchant[0]}</div>
      <div className="list-row__content">
        <strong>{merchant}</strong>
        <span>{meta}</span>
      </div>
      <div className="list-row__trailing">
        <strong>{amount}</strong>
        <span>{status}</span>
      </div>
    </div>
  );
}

export function NotificationRow({ title, message, tone = 'info' }) {
  return (
    <div className={`notice-row notice-row--${tone}`}>
      <div className="notice-row__icon" aria-hidden="true">•</div>
      <div>
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
    </div>
  );
}

export function SettingsRow({ label, value, href = '#', danger = false }) {
  return (
    <Link href={href} className={`settings-row ${danger ? 'settings-row--danger' : ''}`}>
      <span>{label}</span>
      <span>{value || '›'}</span>
    </Link>
  );
}

export function DeviceInfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function ToggleRow({ label, hint, defaultOn = false, danger = false }) {
  return (
    <div className="toggle-row">
      <div>
        <strong>{label}</strong>
        <p>{hint}</p>
      </div>
      <Switch label={label} defaultOn={defaultOn} danger={danger} />
    </div>
  );
}

export function AlertBanner({ title, body, tone = 'info' }) {
  return (
    <div className={`alert-banner alert-banner--${tone}`}>
      <strong>{title}</strong>
      <p>{body}</p>
    </div>
  );
}

export function StepActions({ prevHref, nextHref, prevLabel = 'Previous', nextLabel = 'Next step' }) {
  return (
    <div className="step-actions">
      {prevHref ? <SecondaryButton href={prevHref} fullWidth={false}>{prevLabel}</SecondaryButton> : <span />}
      {nextHref ? <PrimaryButton href={nextHref} fullWidth={false}>{nextLabel}</PrimaryButton> : null}
    </div>
  );
}

export function Tabs({ items, active }) {
  return (
    <div className="tabs">
      {items.map((item) => (
        <span key={item} className={`tabs__item ${item === active ? 'is-active' : ''}`}>{item}</span>
      ))}
    </div>
  );
}

export function ChipRow({ items }) {
  return (
    <div className="chip-row">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className={`chip ${index === 0 ? 'chip--active' : ''}`}>{item}</span>
      ))}
    </div>
  );
}
