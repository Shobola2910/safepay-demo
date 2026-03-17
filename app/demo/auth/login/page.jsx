import DemoShell from '../../../../components/demo-shell';
import { InputField, PrimaryButton, SecondaryButton, TextLink, StatusPill } from '../../../../components/ui';

export default function LoginPage() {
  return (
    <DemoShell
      current="Login"
      eyebrow="Step 06"
      title="Keep login clear, direct, and trustworthy."
      description="This browser version mirrors a polished app login with finance-friendly hierarchy, biometrics cues, and clear CTAs."
      prevHref="/demo/auth/signup"
      nextHref="/demo/auth/otp"
    >
      <div className="screen">
        <div className="screen-copy screen-copy--tight">
          <h2>Welcome back</h2>
          <p>Sign in to control cards, devices, notifications, and payment security.</p>
        </div>
        <div className="form-stack">
          <InputField label="Email or phone" placeholder="you@example.com" />
          <InputField label="Password" placeholder="Enter your password" type="password" rightLabel="Forgot?" />
        </div>
        <div className="social-strip">
          <StatusPill tone="info">Biometric login ready</StatusPill>
          <StatusPill tone="success">Trusted device</StatusPill>
        </div>
        <PrimaryButton href="/demo/auth/otp">Sign In</PrimaryButton>
        <SecondaryButton href="/demo/auth/signup">Create a new account</SecondaryButton>
        <p className="screen-foot">Need help? <TextLink href="/demo/help">Open support</TextLink></p>
      </div>
    </DemoShell>
  );
}
