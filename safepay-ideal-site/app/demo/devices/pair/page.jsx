import DemoShell from '../../../../components/demo-shell';
import { AlertBanner, PrimaryButton, SectionCard, StatusPill, Tabs } from '../../../../components/ui';
import { RingPulseVisual } from '../../../../components/visuals';

export default function PairDevicePage() {
  return (
    <DemoShell
      current="Pair Device"
      eyebrow="Step 11"
      title="Device pairing is one of the strongest SafePay moments."
      description="This step makes the wearable story believable: searching, finding, connecting, and assigning a payment device."
      prevHref="/demo/cards/manage"
      nextHref="/demo/devices/details"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header compact-header">
          <div>
            <small>Wearable devices</small>
            <h2>Pair a device</h2>
          </div>
          <StatusPill tone="info">Bluetooth on</StatusPill>
        </div>

        <Tabs items={['Smart Ring', 'Smartwatch']} active="Smart Ring" />
        <RingPulseVisual />
        <AlertBanner title="Searching for nearby devices" body="Keep your ring or watch close to your phone to complete pairing." tone="info" />

        <SectionCard>
          <div className="device-list-item">
            <div>
              <strong>SafePay Ring</strong>
              <span>Found • NFC + Bluetooth • Strong signal</span>
            </div>
            <StatusPill tone="success">Ready</StatusPill>
          </div>
          <div className="device-list-item">
            <div>
              <strong>SafeWatch Pro</strong>
              <span>Found • Bluetooth • Battery 64%</span>
            </div>
            <StatusPill tone="warning">Optional</StatusPill>
          </div>
        </SectionCard>

        <PrimaryButton href="/demo/devices/details">Connect SafePay Ring</PrimaryButton>
      </div>
    </DemoShell>
  );
}
