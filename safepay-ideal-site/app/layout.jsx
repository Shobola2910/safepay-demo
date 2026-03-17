import './globals.css';

export const metadata = {
  title: 'SafePay.uz',
  description: 'Wearable and contactless payment website concept for SafePay.uz.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
