import DemoShell from '../../../components/demo-shell';
import { PrimaryButton, SectionCard, SettingsRow, StatusPill } from '../../../components/ui';

export default function SettingsPage() {
  return (
    <DemoShell
      current="Settings"
      eyebrow="Step 19"
      title="Settings tie the product together."
      description="Profile, cards, devices, notifications, language, support, and policy links all sit in a clean structure ready for real expansion."
      prevHref="/demo/security"
      nextHref="/demo/help"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Settings</small>
            <h2>Preferences</h2>
          </div>
          <StatusPill tone="info">Dark mode</StatusPill>
        </div>

        <SectionCard>
          <SettingsRow label="Profile" value="Verified" href="/demo/profile" />
          <SettingsRow label="Payment methods" value="3 cards" href="/demo/cards/manage" />
          <SettingsRow label="Wearable devices" value="2 connected" href="/demo/devices/control" />
          <SettingsRow label="Notifications" value="Manage" href="/demo/notifications" />
          <SettingsRow label="Language" value="English" />
          <SettingsRow label="Appearance" value="Dark" />
          <SettingsRow label="Help Center" value="Open" href="/demo/help" />
          <SettingsRow label="Privacy Policy" value="View" />
          <SettingsRow label="Terms" value="View" />
          <SettingsRow label="Logout" value="Secure sign out" danger />
        </SectionCard>

        <PrimaryButton href="/demo/help">Open Help & Support</PrimaryButton>
      </div>
    </DemoShell>
  );
}
