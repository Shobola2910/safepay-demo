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
    title: 'Fast checkout',
    text: 'Pay in seconds with a ring, wearable or digital flow.',
  },
  {
    title: 'Clear control',
    text: 'Manage cards, freeze access and monitor activity from one system.',
  },
  {
    title: 'Built for scale',
    text: 'Structured for users, merchants and future partner integrations.',
  },
];

const featureCards = [
  {
    title: 'Wearable payment, made understandable',
    text: 'The homepage should explain the product immediately: connect, control and pay.',
  },
  {
    title: 'A serious financial look',
    text: 'The design should feel trusted and modern without looking overloaded.',
  },
  {
    title: 'More room, less noise',
    text: 'Large sections, stronger hierarchy and clear spacing make the brand feel bigger.',
  },
];

const productPoints = [
  {
    label: '01',
    title: 'One website, one clear product story',
    text: 'SafePay is not another generic wallet page. It should feel built around wearables and contactless usage.',
  },
  {
    label: '02',
    title: 'Made for real daily payments',
    text: 'Transport, cafes, stores and everyday spending should be part of the story from the first screen.',
  },
  {
    label: '03',
    title: 'Ready for business later',
    text: 'The website should already leave space for merchant acceptance, analytics and partner growth.',
  },
];

const businessItems = [
  'Merchant onboarding structure',
  'Acceptance for wearable and digital flows',
  'Visible reporting and settlement direction',
  'Support and trust positioning',
];

const faqItems = [
  {
    q: 'Why does this version feel bigger?',
    a: 'Because the layout uses wider sections, larger visual hierarchy, stronger spacing and fewer cramped content blocks.',
  },
  {
    q: 'Is this closer to a real launch website?',
    a: 'Yes. This version is much closer to a real homepage structure that can later expand with pricing, downloads and business tools.',
  },
  {
    q: 'Can the app come later?',
    a: 'Yes. For now this version keeps the focus only on the SafePay website. The app flow can be built in the next stage.',
  },
];

export default function HomePage() {
  const handlePointerMove = (event) => {
    const root = event.currentTarget;
    const rect = root.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 24;

    root.style.setProperty('--mx', `${x.toFixed(2)}px`);
    root.style.setProperty('--my', `${y.toFixed(2)}px`);
    root.style.setProperty('--rx', `${(-y * 0.3).toFixed(2)}deg`);
    root.style.setProperty('--ry', `${(x * 0.3).toFixed(2)}deg`);
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
          <a href="#contact" className="btn btn--secondary btn--small interactive" style={{ '--depth': '.08' }}>
            Contact
          </a>
        </nav>
      </header>

      <section className="hero-block">
        <div className="hero-block__copy">
          <div className="eyebrow">SAFEPAY.UZ • CONTACTLESS PAYMENT PLATFORM</div>

          <h1>
            A bigger,
            <br />
            cleaner website
            <br />
            for a payment brand
            <br />
            built around wearables.
          </h1>

          <p>
            SafePay should feel modern from the first second. Large sections, strong
            spacing, clear messaging and product-focused visuals make the website
            feel more serious, more premium and easier to trust.
          </p>

          <div className="hero-block__actions">
            <a href="#why" className="btn btn--primary btn--large interactive" style={{ '--depth': '.12' }}>
              Explore website
            </a>
            <a href="#business" className="btn btn--secondary btn--large interactive" style={{ '--depth': '.1' }}>
              For business
            </a>
          </div>

          <div className="hero-trust-grid">
            {trustItems.map((item, index) => (
              <div
                key={item.title}
                className="hero-trust-card interactive"
                style={{ '--depth': `${0.08 + index * 0.02}` }}
              >
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-block__stage">
          <div className="hero-stage-main interactive" style={{ '--depth': '.18' }}>
            <div className="site-showcase__label">Brand direction</div>
            <SafePayLogo />
            <p>
              The homepage should open with space, confidence and a clear identity,
              not with a cramped product wall.
            </p>

            <div className="hero-mini-tags">
              <span>Wearable-first</span>
              <span>Secure payment</span>
              <span>Fast everyday use</span>
            </div>
          </div>

          <div className="hero-stage-grid">
            <div className="hero-stage-card interactive" style={{ '--depth': '.14' }}>
              <div className="site-showcase__label">Ring payment</div>
              <RingPulseVisual />
            </div>

            <div className="hero-stage-card interactive" style={{ '--depth': '.16' }}>
              <div className="site-showcase__label">Checkout flow</div>
              <PaymentVisual />
            </div>

            <div className="hero-stage-card hero-stage-card--wide interactive" style={{ '--depth': '.18' }}>
              <div className="site-showcase__label">Cards and ecosystem</div>
              <CardOrbitVisual />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="wide-section wide-section--intro">
        <div className="wide-section__intro">
          <div className="eyebrow">WHY THIS STRUCTURE WORKS BETTER</div>
          <h2>
            SafePay should feel larger, clearer and more established
            — even before the full product launches.
          </h2>
        </div>

        <div className="big-card-grid">
          {featureCards.map((card, index) => (
            <article
              key={card.title}
              className="big-card interactive"
              style={{ '--depth': `${0.08 + index * 0.02}` }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="split-spotlight">
        <div className="split-spotlight__copy">
          <div className="eyebrow">PRODUCT EXPERIENCE</div>
          <h2>
            The page should explain the
            product in large, confident blocks.
          </h2>
          <p>
            Strong payment websites do not rush everything into one small area.
            They create clear sections for value, trust and product understanding.
            SafePay should do the same while keeping its own visual identity.
          </p>
        </div>

        <div className="split-spotlight__stack">
          {productPoints.map((item, index) => (
            <div
              key={item.title}
              className="stack-card interactive"
              style={{ '--depth': `${0.1 + index * 0.02}` }}
            >
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="statement-banner interactive" style={{ '--depth': '.14' }}>
        <div className="statement-banner__copy">
          <div className="eyebrow">VISUAL LANGUAGE</div>
          <h2>Black background. Blue signal. More breathing room.</h2>
          <p>
            The premium feeling should come from scale, contrast, movement and
            clarity — not from crowding the page with too many small blocks.
          </p>
        </div>

        <div className="statement-banner__visual interactive" style={{ '--depth': '.1' }}>
          <RingPulseVisual />
        </div>
      </section>

      <section id="business" className="business-section">
        <div className="business-section__copy">
          <div className="eyebrow">FOR BUSINESS</div>
          <h2>SafePay should already look merchant-ready.</h2>
          <p>
            Even if the business tools come later, the website should already feel
            prepared for integrations, acceptance, support and future reporting.
          </p>

          <ul className="site-bullets">
            {businessItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="business-section__stage">
          <div className="dashboard-panel interactive" style={{ '--depth': '.18' }}>
            <div className="dashboard-panel__top">
              <SafePayLogo compact />
              <div className="site-showcase__label">Merchant console</div>
            </div>

            <div className="dashboard-panel__stats">
              <div className="interactive" style={{ '--depth': '.08' }}>
                <small>Acceptance</small>
                <strong>Wearable • Online • QR</strong>
              </div>
              <div className="interactive" style={{ '--depth': '.1' }}>
                <small>Overview</small>
                <strong>Live payment activity</strong>
              </div>
              <div className="interactive" style={{ '--depth': '.12' }}>
                <small>Reporting</small>
                <strong>Daily • Weekly • Export</strong>
              </div>
            </div>

            <div className="dashboard-panel__visual interactive" style={{ '--depth': '.12' }}>
              <SecurityVisual />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="wide-section">
        <div className="wide-section__intro">
          <div className="eyebrow">FAQ</div>
          <h2>Questions this new version answers better.</h2>
        </div>

        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <article
              key={item.q}
              className="faq-card interactive"
              style={{ '--depth': `${0.08 + index * 0.02}` }}
            >
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="site-cta interactive" style={{ '--depth': '.14' }}>
        <div>
          <div className="eyebrow">NEXT STEP</div>
          <h2>Website first. App later.</h2>
          <p>
            This version keeps the attention on the website only. After this, the
            same visual system can continue into the SafePay mobile app.
          </p>
        </div>

        <div className="site-cta__actions">
          <a href="#top" className="btn btn--primary btn--large interactive" style={{ '--depth': '.08' }}>
            Back to top
          </a>
          <a
            href="mailto:hello@safepay.uz"
            className="btn btn--secondary btn--large interactive"
            style={{ '--depth': '.08' }}
          >
            hello@safepay.uz
          </a>
        </div>
      </section>
    </main>
  );
}
