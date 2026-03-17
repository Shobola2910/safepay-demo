import Link from 'next/link';
import Image from 'next/image';
import SafePayLogo from '../components/safe-pay-logo';
import { CardOrbitVisual, PaymentVisual, RingPulseVisual, SecurityVisual } from '../components/visuals';

const valueCards = [
  {
    title: 'Wearable-first payments',
    text: 'Build the story around the ring and smartwatch experience, not around another generic wallet homepage.',
  },
  {
    title: 'Control in one place',
    text: 'Card assignment, instant freeze, activity history and device controls should feel simple from the first screen.',
  },
  {
    title: 'Consumer + merchant clarity',
    text: 'A strong payment website should explain value for users and for businesses without making the page feel crowded.',
  },
];

const pillars = [
  {
    label: 'For users',
    title: 'Tap, track, and manage',
    text: 'Show a fast payment experience, clear card control, and a smooth flow from onboarding to transaction history.',
  },
  {
    label: 'For business',
    title: 'Merchant-ready structure',
    text: 'Keep merchant onboarding, QR acceptance, transaction monitoring and support visible as dedicated business value.',
  },
  {
    label: 'For trust',
    title: 'Security that is easy to understand',
    text: 'Explain verification, anti-fraud actions, device freeze, lost mode and secure approvals with plain language.',
  },
];

const steps = [
  'Create your SafePay profile',
  'Add and verify a payment card',
  'Pair a ring or wearable device',
  'Tap to pay and manage everything from the app',
];

const faqItems = [
  {
    q: 'What makes this website direction stronger?',
    a: 'It keeps the trust-building structure of a payment brand, but shifts the homepage around SafePay’s actual advantage: wearable payment control.',
  },
  {
    q: 'Why not copy other payment sites directly?',
    a: 'Because SafePay needs a sharper identity. The goal is to learn from strong patterns and then present a cleaner, more focused brand story.',
  },
  {
    q: 'Can this become the real launch website later?',
    a: 'Yes. The layout is designed so you can later add pricing, merchant onboarding, app download links, FAQs, terms and a full product demo.',
  },
];

export default function HomePage() {
  return (
    <main className="site-page" id="top">
      <header className="site-nav">
        <SafePayLogo compact />
        <nav className="site-nav__links">
          <a href="#why">Why SafePay</a>
          <a href="#experience">Experience</a>
          <a href="#business">Business</a>
          <a href="#faq">FAQ</a>
          <Link href="/demo/dashboard" className="btn btn--secondary btn--small">Preview demo</Link>
        </nav>
      </header>

      <section className="site-hero">
        <div className="site-hero__copy">
          <div className="eyebrow">SafePay.uz • wearable payment website concept</div>
          <h1>
            A cleaner payment website for a brand built around rings, wearables, and fast everyday taps.
          </h1>
          <p>
            SafePay should feel modern, secure and instantly understandable. This concept keeps the trust of a serious
            fintech brand while making the wearable payment idea the center of the story.
          </p>

          <div className="site-hero__actions">
            <a href="#why" className="btn btn--primary btn--large">Explore website</a>
            <Link href="/demo/dashboard" className="btn btn--secondary btn--large">Open product preview</Link>
          </div>

          <div className="site-trust-strip">
            <div>
              <strong>Device-first</strong>
              <span>Ring and wearable payment positioning</span>
            </div>
            <div>
              <strong>Clear trust</strong>
              <span>Security and support made visible</span>
            </div>
            <div>
              <strong>Business-ready</strong>
              <span>Merchant and transaction flow sections</span>
            </div>
          </div>
        </div>

        <div className="site-hero__visuals">
          <div className="site-showcase site-showcase--main">
            <div className="site-showcase__label">Brand focus</div>
            <div className="site-showcase__wordmark">
              <Image src="/safepay-wordmark-transparent.png" alt="SafePay.uz logo" width={776} height={200} priority />
            </div>
            <p>
              The homepage should open with a stronger brand image, not with crowded feature overload.
            </p>
          </div>

          <div className="site-showcase-grid">
            <div className="site-showcase">
              <div className="site-showcase__label">Wearable payment</div>
              <RingPulseVisual />
            </div>
            <div className="site-showcase">
              <div className="site-showcase__label">Checkout moment</div>
              <PaymentVisual />
            </div>
            <div className="site-showcase site-showcase--wide">
              <div className="site-showcase__label">Card and device ecosystem</div>
              <CardOrbitVisual />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="site-section">
        <div className="site-section__intro">
          <div className="eyebrow">What the best payment websites teach us</div>
          <h2>SafePay should combine trust, simplicity and product focus — without looking like a copy.</h2>
          <p>
            A strong fintech homepage needs fast orientation, visible credibility, clear product value and separate space
            for business tools. SafePay should borrow those patterns and then present them through a wearable payment lens.
          </p>
        </div>

        <div className="site-card-grid">
          {valueCards.map((card) => (
            <article key={card.title} className="site-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="site-section site-section--split">
        <div className="site-panel">
          <div className="eyebrow">Ideal website structure</div>
          <h2>One homepage, three clear layers.</h2>
          <div className="site-pillar-list">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="site-pillar">
                <span>{pillar.label}</span>
                <strong>{pillar.title}</strong>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="site-panel site-panel--accent">
          <div className="eyebrow">How the user story should flow</div>
          <h2>From first visit to first successful payment.</h2>
          <div className="site-step-list">
            {steps.map((step, index) => (
              <div key={step} className="site-step">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="site-section site-section--business">
        <div className="site-business-copy">
          <div className="eyebrow">For merchants and partners</div>
          <h2>Give businesses a reason to trust the platform too.</h2>
          <p>
            SafePay should not look like only a consumer app. The site should also explain merchant acceptance,
            analytics, support, settlement visibility and future integration paths.
          </p>
          <ul className="site-bullets">
            <li>Merchant onboarding section with clear benefits</li>
            <li>Transaction visibility and reporting blocks</li>
            <li>QR and contactless payment acceptance storytelling</li>
            <li>Support, compliance and operational trust signals</li>
          </ul>
        </div>

        <div className="site-business-stage">
          <div className="site-dashboard-card">
            <div className="site-dashboard-card__top">
              <Image src="/safepay-mark.png" alt="SafePay mark" width={44} height={44} />
              <div>
                <strong>Merchant Console</strong>
                <span>Transactions • Settlements • Support</span>
              </div>
            </div>
            <div className="site-dashboard-bars">
              <div>
                <small>Acceptance</small>
                <strong>Online / QR / Wearable</strong>
              </div>
              <div>
                <small>Overview</small>
                <strong>Live payment activity</strong>
              </div>
              <div>
                <small>Reporting</small>
                <strong>Daily, weekly and export-ready</strong>
              </div>
            </div>
            <div className="site-dashboard-card__visual">
              <SecurityVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-banner">
          <div>
            <div className="eyebrow">Website tone</div>
            <h2>Black background. Blue signal. Minimal copy. Strong confidence.</h2>
            <p>
              The page should feel premium through spacing, contrast and clarity — not through heavy words or too many effects.
            </p>
          </div>
          <SafePayLogo />
        </div>
      </section>

      <section id="faq" className="site-section">
        <div className="site-section__intro">
          <div className="eyebrow">FAQ</div>
          <h2>Questions this website already answers well.</h2>
        </div>
        <div className="site-faq-grid">
          {faqItems.map((item) => (
            <article key={item.q} className="site-faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-cta">
        <div>
          <div className="eyebrow">Next phase</div>
          <h2>Website first. APK next.</h2>
          <p>
            This gives SafePay a cleaner homepage direction now, while keeping the product demo and future app work easy to extend.
          </p>
        </div>
        <div className="site-cta__actions">
          <Link href="/demo/dashboard" className="btn btn--primary btn--large">Open preview</Link>
          <a href="#top" className="btn btn--secondary btn--large">Back to top</a>
        </div>
      </section>
    </main>
  );
}
