import './globals.css';

export const metadata = {
  title: 'SafePay Web Demo',
  description: 'Premium web presentation for SafePay wearable payments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
