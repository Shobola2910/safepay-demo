import './globals.css';

export const metadata = {
  title: 'SafePay.uz',
  description: 'SafePay wearable and contactless payment platform.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
