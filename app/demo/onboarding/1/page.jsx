import DemoShell from '../../../../components/demo-shell';
import { PrimaryButton, SecondaryButton } from '../../../../components/ui';
import { PaymentVisual } from '../../../../components/visuals';

export default function OnboardingOne() {
  return (
    <DemoShell
      current="Onboarding 1"
      eyebrow="Step 02"
      title="Explain wearable payments clearly and beautifully."
      description="This screen frames the core concept in one glance: smart wearable payments controlled from the SafePay app."
      prevHref="/demo/splash"
      nextHref="/demo/onboarding/2"
    >
      <div className="screen">
        <PaymentVisual />
        <div className="screen-copy">
          <h2>Wearable payments, simplified.</h2>
          <p>Tap with your ring or watch, while your phone remains the secure control center.</p>
        </div>
        <div className="progress-dots"><span className="is-active" /><span /><span /></div>
        <div className="stack-actions">
          <PrimaryButton href="/demo/onboarding/2">Next</PrimaryButton>
          <SecondaryButton href="/demo/auth/login">Skip to Login</SecondaryButton>
        </div>
      </div>
    </DemoShell>
  );
}
