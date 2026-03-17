import SafePayLogo from '../components/safe-pay-logo';
import {
  CardOrbitVisual,
  PaymentVisual,
  RingPulseVisual,
  SecurityVisual,
} from '../components/visuals';

const quickItems = [
  {
    title: 'Fast payments',
    text: 'Pay in seconds with a wearable, card or digital flow.',
  },
  {
    title: 'Simple control',
    text: 'Manage cards, access and payment activity in one place.',
  },
  {
    title: 'Built for growth',
    text: 'Structured for users today and merchants tomorrow.',
  },
];

const features = [
  {
    title: 'Wearable-first experience',
    text: 'SafePay should immediately show that this is more than a normal payment website.',
  },
  {
    title: 'Clear and trusted design',
    text: 'Large spacing, strong typography and clean contrast help the brand feel reliable.',
  },
  {
    title: 'Made for daily use',
    text: 'Transport, stores, cafes and everyday payments should feel natural in the story.',
  },
];

const experience = [
  {
    number: '01',
    title: 'Connect your card',
    text: 'A simple starting point with a clear onboarding structure.',
  },
  {
    number: '02',
    title: 'Pair your wearable',
    text: 'Bring the ring or device into the flow without confusion.',
  },
  {
    number: '03',
    title: 'Pay and manage',
    text: 'Track payments, control access and keep everything visible.',
  },
];

const faqItems = [
  {
    q: 'Why does this version look cleaner?',
    a: 'Because the layout uses fewer competing elements, more spacing and a stronger visual hierarchy.',
  },
  {
    q: 'Will it look good on mobile?',
    a: 'Yes. This version is designed to collapse cleanly on phones without sections breaking apart.',
  },
  {
    q: 'Can video be added later?',
    a: 'Yes. The hero section is ready to be replaced with a large background video when you send the file.',
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container topbar__inner">
          <SafePayLogo compact />

          <nav className="topbar__nav">
            <a href="#why">Why SafePay</a>
            <a href="#experience">Experience</a>
            <a href="#business">Business</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="#contact" className="btn btn--ghost">
            Contact
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="eyebrow">SAFEPAY.UZ • CONTACTLESS PAYMENT PLATFORM</div>

            <h1>
              A cleaner payment
              <br />
              website for a brand
              <br />
              built around
              <br />
              wearables and speed.
            </h1>

            <p>
              SafePay should feel modern, secure and instantly understandable.
              This version keeps the brand calm, premium and focused without
              making the page feel crowded.
            </p>

            <div className="hero__actions">
              <a href="#why" className="btn btn--primary">
                Explore website
              </a>
              <a href="#business" className="btn btn--secondary">
                For business
              </a>
            </div>
          </div>

          <div className="hero__stage">
            <div className="hero-card hero-card--main">
              <div className="card-label">Brand focus</div>
              <SafePayLogo />
              <p>
                The homepage should open with clarity, confidence and strong
                spacing — not with too many small blocks fighting each other.
              </p>

              <div className="hero-tags">
                <span>Wearable-first</span>
                <span>Fast checkout</span>
                <span>Secure control</span>
              </div>
            </div>

            <div className="hero-card-grid">
              <div className="hero-card">
                <div className="card-label">Ring payment</div>
                <RingPulseVisual />
              </div>

              <div className="hero-card">
                <div className="card-label">Checkout moment</div>
                <PaymentVisual />
              </div>

              <div className="hero-card hero-card--wide">
                <div className="card-label">Card and device ecosystem</div>
                <CardOrbitVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-strip">
        <div className="container quick-strip__grid">
          {quickItems.map((item) => (
            <div key={item.title} className="info-card">
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">WHY THIS WEBSITE WORKS</div>
            <h2>
              SafePay should combine trust,
              <br />
              simplicity and product focus.
            </h2>
            <p>
              A strong fintech website should be easy to scan, easy to trust and
              easy to remember. This version keeps the look premium without
              becoming too busy.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section section--split">
        <div className="container split">
          <div className="split__copy">
            <div className="eyebrow">USER EXPERIENCE</div>
            <h2>
              One website,
              <br />
              one clear story.
            </h2>
            <p>
              SafePay should explain the idea in large, confident sections. The
              page needs room to breathe so the brand feels more established and
              easier to trust.
            </p>
          </div>

          <div className="stack-list">
            {experience.map((item) => (
              <div key={item.number} className="stack-card">
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="section">
        <div className="container business-grid">
          <div className="business-copy">
            <div className="eyebrow">FOR BUSINESS</div>
            <h2>SafePay should already feel ready for merchants.</h2>
            <p>
              Even before the full business tools arrive, the website should show
              direction for acceptance, support, reporting and future scale.
            </p>

            <ul>
              <li>Merchant onboarding direction</li>
              <li>Wearable and online acceptance structure</li>
              <li>Clear support and trust positioning</li>
              <li>Reporting-ready visual language</li>
            </ul>
          </div>

          <div className="business-panel">
            <div className="business-panel__top">
              <SafePayLogo compact />
              <div className="card-label">Merchant console</div>
            </div>

            <div className="business-stats">
              <div>
                <small>Acceptance</small>
                <strong>Wearable • Online • QR</strong>
              </div>
              <div>
                <small>Overview</small>
                <strong>Live payment activity</strong>
              </div>
              <div>
                <small>Reporting</small>
                <strong>Daily • Weekly • Export</strong>
              </div>
            </div>

            <div className="business-panel__visual">
              <SecurityVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="statement">
            <div>
              <div className="eyebrow">VISUAL DIRECTION</div>
              <h2>Black background. Blue signal. Cleaner spacing.</h2>
              <p>
                The premium feel should come from balance, contrast and layout —
                not from forcing too many things into one screen.
              </p>
            </div>

            <div className="statement__visual">
              <RingPulseVisual />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">FAQ</div>
            <h2>Questions this version answers well.</h2>
          </div>

          <div className="faq-grid">
            {faqItems.map((item) => (
              <article key={item.q} className="faq-card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="cta">
            <div>
              <div className="eyebrow">NEXT STEP</div>
              <h2>Website first. App later.</h2>
              <p>
                This stage keeps the focus on the website. After this, the same
                visual language can continue into the SafePay mobile app.
              </p>
            </div>

            <div className="cta__actions">
              <a href="#top" className="btn btn--primary">
                Back to top
              </a>
              <a href="mailto:hello@safepay.uz" className="btn btn--secondary">
                hello@safepay.uz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
