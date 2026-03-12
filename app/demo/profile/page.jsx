import DemoShell from '../../../components/demo-shell';
import { PrimaryButton, SectionCard, SettingsRow, StatusPill } from '../../../components/ui';

export default function ProfilePage() {
  return (
    <DemoShell
      current="Profile"
      eyebrow="Step 21"
      title="Finish with a profile screen that feels production-ready."
      description="Verification status, account details, preferences, and subscription-style structure make the final screen feel complete and realistic."
      prevHref="/demo/help"
      nextHref="/demo/dashboard"
      nextLabel="Loop back to Dashboard"
      showNav
    >
      <div className="screen with-nav">
        <div className="profile-hero">
          <div className="profile-avatar">IS</div>
          <div>
            <h2>Ismoilbek Shorustamov</h2>
            <p>Premium wearable payments account</p>
          </div>
          <StatusPill tone="success">Verified</StatusPill>
        </div>

        <SectionCard>
          <SettingsRow label="Phone" value="+998 90 123 45 67" />
          <SettingsRow label="Email" value="ismoilbek@example.com" />
          <SettingsRow label="Account status" value="Active" />
          <SettingsRow label="Membership" value="SafePay Plus" />
          <SettingsRow label="Preferred language" value="English" />
          <SettingsRow label="Marketing preferences" value="Minimal" />
        </SectionCard>

        <PrimaryButton href="/demo/dashboard">Return to Dashboard</PrimaryButton>
      </div>
    </DemoShell>
  );
}
