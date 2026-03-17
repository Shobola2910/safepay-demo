import DemoShell from '../../../../components/demo-shell';
import { cards } from '../../../../lib/data';
import { AlertBanner, CardVisual, ChipRow, PrimaryButton, SectionCard, SettingsRow, StatusPill } from '../../../../components/ui';

export default function ManageCardsPage() {
  return (
    <DemoShell
      current="Manage Cards"
      eyebrow="Step 10"
      title="Card management must look practical and polished."
      description="Users can review saved cards, change defaults, freeze payments, and set limits — all in a clean launch-ready layout."
      prevHref="/demo/cards/add"
      nextHref="/demo/devices/pair"
      showNav
    >
      <div className="screen with-nav">
        <div className="screen-header">
          <div>
            <small>Cards</small>
            <h2>Manage cards</h2>
          </div>
          <StatusPill tone="success">3 active</StatusPill>
        </div>

        <div className="carousel-stack">
          {cards.slice(0, 2).map((card) => (
            <CardVisual key={card.nickname} {...card} />
          ))}
        </div>

        <ChipRow items={['Default for Ring', 'Default for Watch', 'Limits']} />

        <SectionCard>
          <SettingsRow label="Daily Ring" value="Default for ring" />
          <SettingsRow label="Travel Watch" value="Default for watch" />
          <SettingsRow label="Freeze / unfreeze" value="Manage" />
          <SettingsRow label="Spending limit" value="$500 / day" />
          <SettingsRow label="Remove card" value="Optional" danger />
        </SectionCard>

        <AlertBanner title="Verification complete" body="Your latest card was tokenized successfully and is ready for device assignment." tone="success" />
        <PrimaryButton href="/demo/devices/pair">Assign card to device</PrimaryButton>
      </div>
    </DemoShell>
  );
}
