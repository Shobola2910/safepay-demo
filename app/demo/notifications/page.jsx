import DemoShell from '../../../components/demo-shell';
import { notifications } from '../../../lib/data';
import { NotificationRow, PrimaryButton, SectionCard, StatusPill } from '../../../components/ui';

export default function NotificationsPage() {
  return (
    <DemoShell
      current="Notifications"
      eyebrow="Step 17"
      title="Real-time updates keep the ecosystem alive."
      description="Notifications show payment approvals, suspicious activity, battery warnings, and device events in a clean investor-facing way."
      prevHref="/demo/activity/receipt"
      nextHref="/demo/security"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Notifications</small>
            <h2>Live updates</h2>
          </div>
          <StatusPill tone="warning">4 New</StatusPill>
        </div>

        <SectionCard>
          <div className="list-stack">
            {notifications.map((notice) => (
              <NotificationRow key={notice.title} {...notice} />
            ))}
          </div>
        </SectionCard>

        <PrimaryButton href="/demo/security">Open Security Center</PrimaryButton>
      </div>
    </DemoShell>
  );
}
