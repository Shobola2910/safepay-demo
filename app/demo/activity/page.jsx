import DemoShell from '../../../components/demo-shell';
import { AlertBanner, ChipRow, PrimaryButton, SearchField, SectionCard, TransactionRow } from '../../../components/ui';
import { groupedTransactions } from '../../../lib/data';

export default function ActivityPage() {
  return (
    <DemoShell
      current="Activity"
      eyebrow="Step 15"
      title="Activity and analytics keep the product credible."
      description="Search, filter, review grouped payments, and show monthly behavior in a compact but polished browser-based flow."
      prevHref="/demo/payments/success"
      nextHref="/demo/activity/receipt"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Activity</small>
            <h2>Transaction history</h2>
          </div>
        </div>

        <SearchField />
        <ChipRow items={['All', 'Transport', 'Food', 'Shopping']} />

        <SectionCard>
          <div className="chart-card">
            <div className="chart-card__labels">
              <div><strong>$284</strong><span>This week</span></div>
              <div><strong>61%</strong><span>Food & transport</span></div>
            </div>
            <div className="bar-chart">
              <span style={{ height: '28%' }} />
              <span style={{ height: '66%' }} />
              <span style={{ height: '48%' }} />
              <span style={{ height: '78%' }} />
              <span style={{ height: '38%' }} />
              <span style={{ height: '88%' }} />
            </div>
          </div>
        </SectionCard>

        <AlertBanner title="Smart insight" body="Most of your wearable spending this week happened during commuting and coffee runs." tone="info" />

        {groupedTransactions.map((group) => (
          <SectionCard key={group.title}>
            <div className="section-heading">
              <h3>{group.title}</h3>
            </div>
            <div className="list-stack">
              {group.items.map((item) => (
                <TransactionRow key={item.merchant + item.amount + group.title} {...item} />
              ))}
            </div>
          </SectionCard>
        ))}

        <PrimaryButton href="/demo/activity/receipt">Open latest receipt</PrimaryButton>
      </div>
    </DemoShell>
  );
}
