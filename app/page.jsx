'use client';

import SafePayLogo from '../components/safe-pay-logo';
import {
  CardOrbitVisual,
  PaymentVisual,
  RingPulseVisual,
  SecurityVisual,
} from '../components/visuals';

const trustItems = [
  {
    title: 'Wearable-first',
    text: 'Ring, watch and contactless payment experience in one clean system.',
  },
  {
    title: 'Built for trust',
    text: 'Fast approvals, visible controls, card safety and simple support flow.',
  },
  {
    title: 'Business-ready',
    text: 'Merchant onboarding, payment visibility and clear product structure.',
  },
];

const valueCards = [
  {
    title: 'Clearer than a generic wallet site',
    text: 'SafePay should open with a strong brand story around wearables, not with a crowded wall of features.',
  },
  {
    title: 'Modern for users',
    text: 'Users should instantly understand how to connect a card, pair a device and pay in seconds.',
  },
  {
    title: 'Serious for business',
    text: 'Merchants and partners should quickly see support, reporting, acceptance and operational confidence.',
  },
];

const experienceCards = [
  {
    title: 'Control center',
    text: 'Manage cards, freeze devices, track payments and control every connected wearable from one place.',
  },
  {
    title: 'Fast onboarding',
    text: 'A short, premium flow from account setup to first successful payment.',
  },
  {
    title: 'Visible security',
    text: 'Security should feel built-in, understandable and always close to the user.',
  },
];

const steps = [
  'Create your SafePay account',
  'Add and verify a payment card',
  'Pair a ring or wearable device',
  'Tap to pay and manage everything in one place',
];

const faqItems = [
  {
    q: 'What is the main idea of this website?',
    a: 'A clean, modern website focused on SafePay as a wearable payment platform, not just another fintech landing page.',
  },
  {
    q: 'Why is this version better for launch?',
    a: 'It gives more space, stronger visuals, clearer hierarchy and more confidence for both users and businesses.',
  },
  {
    q: 'Can this become the real launch website later?',
    a: 'Yes. This structure is made to grow into the real production website with downloads, terms, merchant pages and live integrations.',
  },
];

export default function HomePage() {
  const handlePointerMove = (event) => {
    const root = event.currentTarget;
    const rect = root.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 26;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 22;

    root.style.setProperty('--mx', `${x.toFixed(2)}px`);
    root.style.setProperty('--my', `${y.toFixed(2)}px`);
    root.style.setProperty('--rx', `${(-y * 0.35).toFixed(2)}deg`);
    root.style.setProperty('--ry', `${(x * 0.35).toFixed(2)}deg`);
  };

  const handlePointerLeave = (event) => {
    const root = event.currentTarget;
    root.style.setProperty('--mx', '0px');
    root.style.setProperty('--my', '0px');
    root.style.setProperty('--rx', '0deg');
    root.style.setProperty('--ry', '0deg');
  };

  return (
    <main
      className="site-page"
      id="top"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      <header className="site-nav">
        <SafePayLogo compact />
        <nav className="site-nav__links">
          <a href="#why">Why SafePay</a>
          <a href="#experience">Experience</a>
          <a href="#business">Business</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn btn--secondary btn--small">
            Contact
          </a>
        </nav>
      </header>

      <section className="site-hero">
        <div className="site-hero__copy">
          <div className="eyebrow">SAFEPAY.UZ • WEARABLE PAYMENT PLATFORM</div>

          <h1>
            Contactless payments,
            <br />
            designed around
            <br />
            speed, control
            <br />
            and everyday use.
          </h1>

          <p>
            SafePay brings card control, wearable access and fast payment into one
            modern experience. The website should feel clean, strong and instantly
            understandable from the first screen.
          </p>

          <div className="site-hero__actions">
            <a href="#experience" className="btn btn--primary btn--large interactive" style={{ '--depth': '.14' }}>
              Explore experience
            </a>
            <a href="#business" className="btn btn--secondary btn--large interactive" style={{ '--depth': '.1' }}>
              For business
            </a>
          </div>

          <div className="site-trust-strip">
            {trustItems.map((item, index) => (
              <div
                key={item.title}
                className="interactive"
                style={{ '--depth': `${0.08 + index * 0.03}` }}
              >
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="site-hero__visuals">
          <div className="site-showcase site-showcase--main interactive" style={{ '--depth': '.22' }}>
            <div className="site-showcase__label">Brand focus</div>
            <SafePayLogo />
            <p>
              Black background, strong spacing, focused visuals and a cleaner
              wearable payment story.
            </p>

            <div className="site-mini-badges">
              <span>Wearable-first</span>
              <span>Fast checkout</span>
              <span>Secure controls</span>
            </div>
          </div>

          <div className="site-showcase-grid">
            <div className="site-showcase interactive" style={{ '--depth': '.18' }}>
              <div className="site-showcase__label">Ring payment</div>
              <RingPulseVisual />
            </div>

            <div className="site-showcase interactive" style={{ '--depth': '.16' }}>
              <div className="site-showcase__label">Checkout motion</div>
              <PaymentVisual />
            </div>

            <div className="site-showcase site-showcase--wide interactive" style={{ '--depth': '.2' }}>
              <div className="site-showcase__label">Cards and device ecosystem</div>
              <CardOrbitVisual />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="site-section">
        <div className="site-section__intro">
          <div className="eyebrow">WHY THIS WEBSITE DIRECTION WORKS</div>
          <h2>
            SafePay should look more focused, more spacious and more premium
            without trying too hard.
          </h2>
          <p>
            The best payment websites are easy to scan, easy to trust and easy to
            remember. SafePay should use those strengths while keeping its own
            wearable identity.
          </p>
        </div>

        <div className="site-card-grid">
          {valueCards.map((card, index) => (
            <article
              key={card.title}
              className="site-card interactive"
              style={{ '--depth': `${0.1 + index * 0.02}` }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="site-section site-section--split">
        <div className="site-panel interactive" style={{ '--depth': '.16' }}>
          <div className="eyebrow">USER EXPERIENCE</div>
          <h2>One website, one clear story.</h2>

          <div className="site-pillar-list">
            {experienceCards.map((card, index) => (
              <div
                key={card.title}
                className="site-pillar interactive"
                style={{ '--depth': `${0.08 + index * 0.02}` }}
              >
                <span>0{index + 1}</span>
                <strong>{card.title}</strong>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="site-panel site-panel--accent interactive" style={{ '--depth': '.18' }}>
          <div className="eyebrow">PAYMENT FLOW</div>
          <h2>From first visit to first payment.</h2>

          <div className="site-step-list">
            {steps.map((step, index) => (
              <div
                key={step}
                className="site-step interactive"
                style={{ '--depth': `${0.08 + index * 0.02}` }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="site-section site-section--business">
        <div className="site-business-copy">
          <div className="eyebrow">FOR MERCHANTS AND PARTNERS</div>
          <h2>SafePay should also feel strong on the business side.</h2>
          <p>
            The website should clearly show that SafePay is not only a user-facing
            payment brand. It should also communicate acceptance, support,
            reporting, settlement visibility and future integration value.
          </p>

          <ul className="site-bullets">
            <li>Merchant onboarding with simple structure</li>
            <li>Fast understanding of payment acceptance options</li>
            <li>Transaction visibility and reporting direction</li>
            <li>Clear trust and support positioning</li>
          </ul>
        </div>

        <div className="site-business-stage">
          <div className="site-dashboard-card interactive" style={{ '--depth': '.22' }}>
            <div className="site-dashboard-card__top">
              <div className="site-dashboard-card__brand">
                <SafePayLogo compact />
              </div>
              <div className="site-console-badge">Merchant Console</div>
            </div>

            <div className="site-dashboard-bars">
              <div className="interactive" style={{ '--depth': '.08' }}>
                <small>Acceptance</small>
                <strong>Online • QR • Wearable</strong>
              </div>
              <div className="interactive" style={{ '--depth': '.1' }}>
                <small>Payments</small>
                <strong>Live activity overview</strong>
              </div>
              <div className="interactive" style={{ '--depth': '.12' }}>
                <small>Reporting</small>
                <strong>Daily • Weekly • Export-ready</strong>
              </div>
            </div>

            <div className="site-dashboard-card__visual interactive" style={{ '--depth': '.12' }}>
              <SecurityVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-banner interactive" style={{ '--depth': '.18' }}>
          <div>
            <div className="eyebrow">VISUAL DIRECTION</div>
            <h2>Deeper black, stronger blue, cleaner spacing.</h2>
            <p>
              The premium feel should come from layout, contrast, motion and
              confidence — not from overcrowded sections.
            </p>
          </div>

          <div className="site-banner__visual interactive" style={{ '--depth': '.12' }}>
            <RingPulseVisual />
          </div>
        </div>
      </section>

      <section id="faq" className="site-section">
        <div className="site-section__intro">
          <div className="eyebrow">FAQ</div>
          <h2>What this website already explains well.</h2>
        </div>

        <div className="site-faq-grid">
          {faqItems.map((item, index) => (
            <article
              key={item.q}
              className="site-faq-item interactive"
              style={{ '--depth': `${0.08 + index * 0.02}` }}
            >
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="site-cta interactive" style={{ '--depth': '.16' }}>
        <div>
          <div className="eyebrow">NEXT STEP</div>
          <h2>Website first. App next.</h2>
          <p>
            This version keeps the focus on the website. After this, the same
            visual language can continue into the real SafePay app and APK flow.
          </p>
        </div>

        <div className="site-cta__actions">
          <a href="#top" className="btn btn--primary btn--large interactive" style={{ '--depth': '.08' }}>
            Back to top
          </a>
          <a href="mailto:hello@safepay.uz" className="btn btn--secondary btn--large interactive" style={{ '--depth': '.08' }}>
            hello@safepay.uz
          </a>
        </div>
      </section>
    </main>
  );
}
