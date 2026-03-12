import Link from 'next/link';
import SafePayLogo from '../components/safe-pay-logo';
import { CardOrbitVisual, PaymentVisual, RingPulseVisual } from '../components/visuals';

export default function HomePage() {
  return (
    <main className="marketing-page">
      <header className="marketing-nav">
        <SafePayLogo compact />
        <div className="marketing-nav__links">
          <a href="#features">Features</a>
          <a href="#flow">Flow</a>
          <Link href="/demo/splash" className="btn btn--secondary btn--small">Open Demo</Link>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow">Investor-ready web experience</div>
          <h1>Turn your SafePay app idea into a polished website demo.</h1>
          <p>
            This version presents SafePay in the browser with a realistic sequential flow: onboarding, auth,
            cards, wearables, payments, activity, security, settings, and support.
          </p>
          <div className="hero-actions">
            <Link href="/demo/splash" className="btn btn--primary btn--large">Start Product Walkthrough</Link>
            <Link href="/demo/dashboard" className="btn btn--secondary btn--large">Jump to Dashboard</Link>
          </div>
          <div className="hero-metrics">
            <div><strong>19+</strong><span>launch-ready screens</span></div>
            <div><strong>100%</strong><span>browser-based demo flow</span></div>
            <div><strong>Vercel</strong><span>deployable Next.js project</span></div>
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-stack">
            <div className="hero-card"><PaymentVisual /></div>
            <div className="hero-card hero-card--offset"><CardOrbitVisual /></div>
            <div className="hero-card hero-card--front"><RingPulseVisual /></div>
          </div>
        </div>
      </section>

      <section id="features" className="marketing-grid">
        <article className="glass-panel">
          <h2>What this web demo shows</h2>
          <ul className="feature-list">
            <li>Smart ring and smartwatch control center</li>
            <li>Premium fintech dashboard with connected device summary</li>
            <li>Sequential product journey from splash to payment receipt</li>
            <li>Card management, device pairing, lost mode, and security center</li>
            <li>Presentation-friendly design that feels like a real startup launch</li>
          </ul>
        </article>

        <article className="glass-panel">
          <h2>Built for presentation</h2>
          <p>
            Use it in class, during investor demos, for portfolio presentation, or as the visual front-end layer
            before building the real product backend.
          </p>
          <div className="status-grid">
            <span className="status-pill status-pill--success">Ready to present</span>
            <span className="status-pill status-pill--info">Interactive web flow</span>
            <span className="status-pill status-pill--warning">Easy to extend</span>
          </div>
        </article>
      </section>

      <section id="flow" className="flow-preview glass-panel">
        <div>
          <div className="eyebrow">Flow map</div>
          <h2>From splash screen to secure control center</h2>
        </div>
        <div className="flow-preview__grid">
          {[
            'Splash',
            'Onboarding',
            'Sign Up',
            'Login',
            'OTP',
            'Dashboard',
            'Cards',
            'Devices',
            'Payment Success',
            'Activity',
            'Security',
            'Settings',
          ].map((item) => (
            <div key={item} className="flow-chip">{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
