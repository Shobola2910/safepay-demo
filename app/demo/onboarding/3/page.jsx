import DemoShell from '../../../../components/demo-shell';
import { PrimaryButton, SecondaryButton } from '../../../../components/ui';
import { SecurityVisual } from '../../../../components/visuals';

export default function OnboardingThree() {
  return (
    <DemoShell
      current="Onboarding 3"
      eyebrow="Step 04"
      title="Close onboarding with trust and control."
      description="SafePay must feel refined and secure. This screen highlights alerts, freeze controls, and Lost Mode confidence."
      prevHref="/demo/onboarding/2"
      nextHref="/demo/auth/signup"
      nextLabel="Go to Sign Up"
    >
      <div className="screen">
        <SecurityVisual />
        <div className="screen-copy">
          <h2>Real-time security built in.</h2>
          <p>Instant freeze, live transaction alerts, biometric protection, and Lost Mode when a device goes missing.</p>
        </div>
        <div className="progress-dots"><span /><span /><span className="is-active" /></div>
        <div className="stack-actions">
          <PrimaryButton href="/demo/auth/signup">Get Started</PrimaryButton>
          <SecondaryButton href="/demo/auth/login">Sign In</SecondaryButton>
        </div>
      </div>
    </DemoShell>
  );
}
