import Link from 'next/link';
import PhoneFrame from './phone-frame';
import SafePayLogo from './safe-pay-logo';
import { demoFlow } from '../lib/data';

export default function DemoShell({ current, eyebrow, title, description, children, showNav = false, prevHref, nextHref, prevLabel, nextLabel }) {
  return (
    <main className="demo-shell">
      <section className="demo-shell__sidebar">
        <div className="glass-panel">
          <SafePayLogo />
          <div className="sidebar-copy">
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div className="progress-list">
            {demoFlow.map((item, index) => (
              <Link key={item.href} href={item.href} className={`progress-list__item ${current === item.label ? 'is-current' : ''}`}>
                <span className="progress-list__index">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="sidebar-actions">
            <Link href="/" className="mini-link">Back to website</Link>
            <div className="step-actions">
              {prevHref ? <Link href={prevHref} className="btn btn--secondary">{prevLabel || 'Previous'}</Link> : <span />}
              {nextHref ? <Link href={nextHref} className="btn btn--primary">{nextLabel || 'Next step'}</Link> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="demo-shell__stage">
        <PhoneFrame showNav={showNav}>{children}</PhoneFrame>
      </section>
    </main>
  );
}
