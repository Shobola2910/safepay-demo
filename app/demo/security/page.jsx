import DemoShell from '../../../components/demo-shell';
import { AlertBanner, PrimaryButton, SectionCard, SettingsRow, StatusPill, ToggleRow } from '../../../components/ui';
import { securityItems } from '../../../lib/data';

export default function SecurityPage() {
  return (
    <DemoShell
      current="Security"
      eyebrow="Step 18"
      title="Security Center should feel powerful and reassuring."
      description="This is where SafePay earns trust: biometrics, 2FA, trusted devices, fraud detection, and emergency block controls."
      prevHref="/demo/notifications"
      nextHref="/demo/settings"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Security Center</small>
            <h2>Protect every payment</h2>
          </div>
          <StatusPill tone="success">Protected</StatusPill>
        </div>

        <AlertBanner title="Fraud detection active" body="High-risk transactions require additional confirmation before approval." tone="success" />

        <SectionCard>
          <ToggleRow label="Biometric login" hint="Face ID or fingerprint required" defaultOn />
          <ToggleRow label="Transaction confirmation threshold" hint="Require approval above $100" defaultOn />
          <ToggleRow label="Freeze all cards" hint="Instantly block all card-linked payments" />
          <ToggleRow label="Freeze wearable instantly" hint="Stop ring and watch taps now" />
        </SectionCard>

        <SectionCard>
          {securityItems.map((item) => (
            <SettingsRow key={item.label} label={item.label} value={item.value} />
          ))}
          <SettingsRow label="Emergency block" value="All cards and devices" danger />
        </SectionCard>

        <PrimaryButton href="/demo/settings">Continue to Settings</PrimaryButton>
      </div>
    </DemoShell>
  );
}
