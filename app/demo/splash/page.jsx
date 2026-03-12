import DemoShell from '../../../components/demo-shell';
import SafePayLogo from '../../../components/safe-pay-logo';
import { PrimaryButton } from '../../../components/ui';

export default function SplashPage() {
  return (
    <DemoShell
      current="Splash"
      eyebrow="Step 01"
      title="SafePay demo starts with a premium first impression."
      description="Dark, elegant, and brand-led — this splash screen gives the project a real fintech launch feel in the browser."
      nextHref="/demo/onboarding/1"
      nextLabel="Continue"
    >
      <div className="screen screen--centered">
        <SafePayLogo />
        <div className="spinner" />
        <p className="screen-note">Secure wearable payment control</p>
        <PrimaryButton href="/demo/onboarding/1">Enter Demo</PrimaryButton>
      </div>
    </DemoShell>
  );
}
