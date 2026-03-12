import DemoShell from '../../../../components/demo-shell';
import { PrimaryButton, SecondaryButton } from '../../../../components/ui';
import { CardOrbitVisual } from '../../../../components/visuals';

export default function OnboardingTwo() {
  return (
    <DemoShell
      current="Onboarding 2"
      eyebrow="Step 03"
      title="Show speed, convenience, and daily practicality."
      description="No wallet search, no card digging, no queue friction — just instant tap payments in fast-moving everyday moments."
      prevHref="/demo/onboarding/1"
      nextHref="/demo/onboarding/3"
    >
      <div className="screen">
        <CardOrbitVisual />
        <div className="screen-copy">
          <h2>Control every card in one place.</h2>
          <p>Add cards, assign defaults, and pay faster in transport, cafes, stores, and crowded spaces.</p>
        </div>
        <div className="progress-dots"><span /><span className="is-active" /><span /></div>
        <div className="stack-actions">
          <PrimaryButton href="/demo/onboarding/3">Next</PrimaryButton>
          <SecondaryButton href="/demo/auth/login">Skip to Login</SecondaryButton>
        </div>
      </div>
    </DemoShell>
  );
}
