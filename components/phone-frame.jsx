import BottomNav from './bottom-nav';

export default function PhoneFrame({ children, showNav = false }) {
  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        {children}
        {showNav ? <BottomNav /> : null}
      </div>
    </div>
  );
}
