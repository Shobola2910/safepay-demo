import DemoShell from '../../../../components/demo-shell';
import { DeviceInfoRow, PrimaryButton, SectionCard, StatusPill } from '../../../../components/ui';
import { RingRender } from '../../../../components/visuals';

export default function DeviceDetailsPage() {
  return (
    <DemoShell
      current="Device Details"
      eyebrow="Step 12"
      title="After pairing, show concrete wearable details."
      description="Battery, firmware, assigned card, and connection quality make the product feel real and investor-ready."
      prevHref="/demo/devices/pair"
      nextHref="/demo/devices/control"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Paired device</small>
            <h2>SafePay Ring</h2>
          </div>
          <StatusPill tone="success">Connected</StatusPill>
        </div>

        <div className="center-visual-block">
          <RingRender large />
        </div>

        <SectionCard>
          <DeviceInfoRow label="Battery" value="87%" />
          <DeviceInfoRow label="Connection strength" value="Strong" />
          <DeviceInfoRow label="Firmware" value="v2.4.1" />
          <DeviceInfoRow label="Assigned card" value="Daily Ring • Mastercard" />
          <DeviceInfoRow label="Rename device" value="Available" />
        </SectionCard>

        <PrimaryButton href="/demo/devices/control">Open Wearable Controls</PrimaryButton>
      </div>
    </DemoShell>
  );
}
