import DemoShell from '../../../components/demo-shell';
import { AlertBanner, CardVisual, MetricCard, PrimaryButton, QuickAction, SectionCard, StatusPill, TransactionRow } from '../../../components/ui';
import { recentTransactions } from '../../../lib/data';

export default function DashboardPage() {
  return (
    <DemoShell
      current="Dashboard"
      eyebrow="Step 08"
      title="This is the website version of the app’s main control screen."
      description="It brings the mobile-style UI into a browser-ready experience while preserving the same product logic and visual hierarchy."
      prevHref="/demo/auth/otp"
      nextHref="/demo/cards/add"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Hello, Ismoilbek</small>
            <h2>SafePay Dashboard</h2>
          </div>
          <StatusPill tone="info">3 Alerts</StatusPill>
        </div>

        <SectionCard>
          <div className="device-summary">
            <div>
              <small>Connected Device</small>
              <strong>SafePay Ring</strong>
              <span>Ready to Pay • Battery 87%</span>
            </div>
            <StatusPill tone="success">Connected</StatusPill>
          </div>
        </SectionCard>

        <CardVisual brand="Mastercard" nickname="Daily Ring" number="•••• 4291" />

        <div className="metric-grid">
          <MetricCard value="$284" label="Spent this week" />
          <MetricCard value="4" label="Cards saved" accent="green" />
          <MetricCard value="2" label="Wearables active" accent="amber" />
        </div>

        <div className="quick-grid">
          <QuickAction label="Add Card" meta="Tokenize securely" href="/demo/cards/add" />
          <QuickAction label="Pair Device" meta="Ring or watch" href="/demo/devices/pair" />
          <QuickAction label="Freeze Device" meta="Instant control" href="/demo/devices/control" />
          <QuickAction label="Transactions" meta="View activity" href="/demo/activity" />
        </div>

        <AlertBanner title="Security alert" body="Your ring is connected and ready to pay. Low battery warning is active for SafeWatch Pro." tone="warning" />

        <SectionCard>
          <div className="section-heading">
            <h3>Recent transactions</h3>
            <PrimaryButton href="/demo/activity" fullWidth={false} className="btn--tiny">View all</PrimaryButton>
          </div>
          <div className="list-stack">
            {recentTransactions.slice(0, 3).map((item) => (
              <TransactionRow key={item.merchant + item.amount} {...item} />
            ))}
          </div>
        </SectionCard>
      </div>
    </DemoShell>
  );
}
