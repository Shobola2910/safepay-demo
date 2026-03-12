import DemoShell from '../../../../components/demo-shell';
import { PrimaryButton, SecondaryButton, SectionCard, StatusPill } from '../../../../components/ui';
import { SuccessVisual } from '../../../../components/visuals';

export default function PaymentSuccessPage() {
  return (
    <DemoShell
      current="Payment Success"
      eyebrow="Step 14"
      title="A strong confirmation screen completes the wearable payment story."
      description="This page proves the end-to-end flow works visually: tap, approval, receipt, and issue reporting."
      prevHref="/demo/devices/control"
      nextHref="/demo/activity"
      showNav
    >
      <div className="screen with-nav success-screen">
          <SuccessVisual />
          <div className="screen-copy screen-copy--tight center-text">
            <h2>Payment approved</h2>
            <p>Your wearable payment was completed successfully.</p>
          </div>
          <SectionCard>
            <div className="info-row"><span>Merchant</span><strong>Pret A Manger</strong></div>
            <div className="info-row"><span>Amount</span><strong>$12.50</strong></div>
            <div className="info-row"><span>Card used</span><strong>Mastercard • •••• 4291</strong></div>
            <div className="info-row"><span>Device used</span><strong>SafePay Ring</strong></div>
            <div className="info-row"><span>Status</span><StatusPill tone="success">Approved</StatusPill></div>
          </SectionCard>
          <PrimaryButton href="/demo/activity/receipt">View Receipt</PrimaryButton>
          <SecondaryButton href="/demo/activity">Go to Activity</SecondaryButton>
      </div>
    </DemoShell>
  );
}
