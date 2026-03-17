import DemoShell from '../../../../components/demo-shell';
import { PrimaryButton, SecondaryButton, SectionCard, StatusPill } from '../../../../components/ui';

export default function ReceiptPage() {
  return (
    <DemoShell
      current="Receipt"
      eyebrow="Step 16"
      title="Receipts make the product feel complete."
      description="Merchant, amount, time, location, card, and device details are all presented in a polished receipt card fit for demos."
      prevHref="/demo/activity"
      nextHref="/demo/notifications"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Receipt</small>
            <h2>Payment detail</h2>
          </div>
          <StatusPill tone="success">Approved</StatusPill>
        </div>

        <SectionCard className="receipt-card">
          <div className="receipt-header">
            <strong>Pret A Manger</strong>
            <span>Receipt #SP-294108</span>
          </div>
          <div className="receipt-total">$12.50</div>
          <div className="receipt-grid">
            <div><span>Date</span><strong>11 Mar 2026</strong></div>
            <div><span>Time</span><strong>09:41 AM</strong></div>
            <div><span>Device</span><strong>SafePay Ring</strong></div>
            <div><span>Card</span><strong>Mastercard • •••• 4291</strong></div>
            <div><span>Location</span><strong>Downtown Station</strong></div>
            <div><span>Notes</span><strong>Contactless wearable payment</strong></div>
          </div>
        </SectionCard>

        <PrimaryButton href="/demo/notifications">Share receipt</PrimaryButton>
        <SecondaryButton href="/demo/help">Report an issue</SecondaryButton>
      </div>
    </DemoShell>
  );
}
