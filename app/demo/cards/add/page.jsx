import DemoShell from '../../../../components/demo-shell';
import { AlertBanner, CardVisual, InputField, PrimaryButton, SecondaryButton, Tabs } from '../../../../components/ui';

export default function AddCardPage() {
  return (
    <DemoShell
      current="Add Card"
      eyebrow="Step 09"
      title="Card onboarding on the web should still feel app-native."
      description="This screen keeps the same premium mobile look while working naturally in the browser for demos and presentations."
      prevHref="/demo/dashboard"
      nextHref="/demo/cards/manage"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header compact-header">
          <div>
            <small>Bank cards</small>
            <h2>Add a card</h2>
          </div>
          <span className="text-link">Scan</span>
        </div>

        <Tabs items={['Scan card', 'Manual entry']} active="Manual entry" />
        <CardVisual brand="Mastercard" nickname="Premium card" number="•••• 4291" />
        <div className="form-stack">
          <InputField label="Cardholder name" placeholder="Ismoilbek S." />
          <InputField label="Card number" placeholder="4242 4242 4242 4242" />
          <div className="form-split">
            <InputField label="Expiry date" placeholder="09/29" />
            <InputField label="CVV" placeholder="483" type="password" />
          </div>
          <InputField label="Billing address" placeholder="Street, city, postal code" />
        </div>
        <AlertBanner title="Encrypted card storage" body="Cards are stored as tokens and can be assigned to ring or watch devices when verified." tone="info" />
        <PrimaryButton href="/demo/cards/manage">Add Card</PrimaryButton>
        <SecondaryButton href="/demo/cards/manage">Use existing cards</SecondaryButton>
      </div>
    </DemoShell>
  );
}
