import DemoShell from '../../../../components/demo-shell';
import { InputField, PrimaryButton, SecondaryButton, TextLink } from '../../../../components/ui';

export default function SignupPage() {
  return (
    <DemoShell
      current="Sign Up"
      eyebrow="Step 05"
      title="A believable fintech sign-up screen."
      description="This web demo uses realistic form structure, premium spacing, and safe microcopy to make the product feel launch-ready."
      prevHref="/demo/onboarding/3"
      nextHref="/demo/auth/login"
      nextLabel="View Login"
    >
      <div className="screen">
        <div className="screen-copy screen-copy--tight">
          <h2>Create your SafePay account</h2>
          <p>Set up your profile to manage wearable payments securely.</p>
        </div>
        <div className="form-stack">
          <InputField label="Full name" placeholder="Ismoilbek Shorustamov" />
          <InputField label="Phone number" placeholder="+998 90 123 45 67" />
          <InputField label="Email" placeholder="you@example.com" type="email" />
          <InputField label="Password" placeholder="Create a password" type="password" />
          <InputField label="Confirm password" placeholder="Repeat password" type="password" />
        </div>
        <label className="check-line">
          <input type="checkbox" defaultChecked />
          <span>I agree to the Terms, Privacy Policy, and secure card tokenization policy.</span>
        </label>
        <PrimaryButton href="/demo/auth/otp">Create Account</PrimaryButton>
        <SecondaryButton href="/demo/auth/login">Already have an account</SecondaryButton>
        <p className="screen-foot">Already registered? <TextLink href="/demo/auth/login">Sign in</TextLink></p>
      </div>
    </DemoShell>
  );
}
