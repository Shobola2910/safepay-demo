import DemoShell from '../../../../components/demo-shell';
import { AlertBanner, CardVisual, PrimaryButton, SectionCard, StatusPill, ToggleRow } from '../../../../components/ui';
import { RingRender } from '../../../../components/visuals';

export default function DeviceControlPage() {
  return (
    <DemoShell
      current="Wearable Control"
      eyebrow="Step 13"
      title="This is the true control center of SafePay."
      description="Freeze or unfreeze payments, switch cards, activate Lost Mode, and manage wearable behavior in real time."
      prevHref="/demo/devices/details"
      nextHref="/demo/payments/success"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Wearable control</small>
            <h2>Ring controls</h2>
          </div>
          <StatusPill tone="success">Active</StatusPill>
        </div>

        <div className="center-visual-block center-visual-block--tight">
          <RingRender large />
        </div>

        <AlertBanner title="Security status" body="Your ring is connected and ready to pay. Freeze instantly if it is missing." tone="info" />

        <SectionCard>
          <ToggleRow label="Tap payments" hint="Allow contactless payments with the ring" defaultOn />
          <ToggleRow label="Freeze device" hint="Stop all wearable payments instantly" />
          <ToggleRow label="Lost Mode" hint="Hide payment access and surface recovery alerts" danger />
          <ToggleRow label="Low power mode" hint="Extend battery for the rest of the day" />
          <ToggleRow label="Transit mode" hint="Faster public transport taps" defaultOn />
        </SectionCard>

        <CardVisual brand="Mastercard" nickname="Assigned card" number="•••• 4291" />
        <PrimaryButton href="/demo/payments/success">Simulate Payment Success</PrimaryButton>
      </div>
    </DemoShell>
  );
}
