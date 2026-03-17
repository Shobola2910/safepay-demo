import DemoShell from '../../../components/demo-shell';
import { faqs } from '../../../lib/data';
import { AlertBanner, PrimaryButton, SectionCard, SettingsRow, StatusPill } from '../../../components/ui';

export default function HelpPage() {
  return (
    <DemoShell
      current="Help"
      eyebrow="Step 20"
      title="Support screens matter in fintech demos too."
      description="FAQ, live chat entry points, lost wearable reporting, and unauthorized payment support make the web flow feel complete."
      prevHref="/demo/settings"
      nextHref="/demo/profile"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Help & support</small>
            <h2>We are here to help</h2>
          </div>
          <StatusPill tone="success">24/7</StatusPill>
        </div>

        <AlertBanner title="Need urgent help?" body="Freeze your device first, then report a lost wearable or unauthorized payment below." tone="warning" />

        <SectionCard>
          <SettingsRow label="Live chat support" value="Available" />
          <SettingsRow label="Report lost wearable" value="Start" />
          <SettingsRow label="Report unauthorized payment" value="Start" />
          <SettingsRow label="Ticket status" value="2 open" />
          <SettingsRow label="Email support" value="support@safepay.uz" />
        </SectionCard>

        <SectionCard>
          <div className="section-heading"><h3>FAQ</h3></div>
          <div className="faq-stack">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <strong>{faq.q}</strong>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <PrimaryButton href="/demo/profile">Open Profile</PrimaryButton>
      </div>
    </DemoShell>
  );
}
