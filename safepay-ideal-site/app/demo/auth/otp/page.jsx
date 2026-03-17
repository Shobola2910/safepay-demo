import DemoShell from '../../../../components/demo-shell';
import { OtpBoxes, PrimaryButton, SecondaryButton, TextLink } from '../../../../components/ui';

export default function OtpPage() {
  return (
    <DemoShell
      current="OTP"
      eyebrow="Step 07"
      title="Verification should feel secure, not heavy."
      description="Clean OTP UI, minimal friction, and precise wording keep the flow believable for a fintech product demo."
      prevHref="/demo/auth/login"
      nextHref="/demo/dashboard"
      nextLabel="Open Dashboard"
    >
      <div className="screen screen--centered-alt">
        <div className="screen-copy screen-copy--tight">
          <h2>Secure verification required</h2>
          <p>Enter the 6-digit code sent to your phone ending in 67.</p>
        </div>
        <OtpBoxes />
        <PrimaryButton href="/demo/dashboard">Confirm Code</PrimaryButton>
        <SecondaryButton href="/demo/auth/login">Back to Login</SecondaryButton>
        <p className="screen-foot"><TextLink href="/demo/auth/otp">Resend code</TextLink></p>
      </div>
    </DemoShell>
  );
}
