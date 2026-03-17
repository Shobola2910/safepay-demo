export const demoFlow = [
  { label: 'Splash', href: '/demo/splash' },
  { label: 'Onboarding 1', href: '/demo/onboarding/1' },
  { label: 'Onboarding 2', href: '/demo/onboarding/2' },
  { label: 'Onboarding 3', href: '/demo/onboarding/3' },
  { label: 'Sign Up', href: '/demo/auth/signup' },
  { label: 'Login', href: '/demo/auth/login' },
  { label: 'OTP', href: '/demo/auth/otp' },
  { label: 'Dashboard', href: '/demo/dashboard' },
  { label: 'Add Card', href: '/demo/cards/add' },
  { label: 'Manage Cards', href: '/demo/cards/manage' },
  { label: 'Pair Device', href: '/demo/devices/pair' },
  { label: 'Device Details', href: '/demo/devices/details' },
  { label: 'Wearable Control', href: '/demo/devices/control' },
  { label: 'Payment Success', href: '/demo/payments/success' },
  { label: 'Activity', href: '/demo/activity' },
  { label: 'Receipt', href: '/demo/activity/receipt' },
  { label: 'Notifications', href: '/demo/notifications' },
  { label: 'Security', href: '/demo/security' },
  { label: 'Settings', href: '/demo/settings' },
  { label: 'Help', href: '/demo/help' },
  { label: 'Profile', href: '/demo/profile' },
];

export const cards = [
  {
    brand: 'Mastercard',
    nickname: 'Daily Ring',
    number: '•••• 4291',
    expiry: '09/29',
    holder: 'Ismoilbek S.',
    color: 'silver',
  },
  {
    brand: 'Visa',
    nickname: 'Travel Watch',
    number: '•••• 1184',
    expiry: '04/30',
    holder: 'Ismoilbek S.',
    color: 'blue',
  },
  {
    brand: 'Virtual',
    nickname: 'Spare Card',
    number: '•••• 5408',
    expiry: '12/28',
    holder: 'Ismoilbek S.',
    color: 'midnight',
  },
];

export const recentTransactions = [
  { merchant: 'Starbucks', meta: 'Coffee • 2 min ago', amount: '$12.50', status: 'Approved' },
  { merchant: 'Pret A Manger', meta: 'Lunch • 10:42 AM', amount: '$18.90', status: 'Approved' },
  { merchant: 'Metro Transit', meta: 'Commute • 08:15 AM', amount: '$2.75', status: 'Approved' },
  { merchant: 'Amazon', meta: 'Online • Yesterday', amount: '$56.30', status: 'Approved' },
];

export const groupedTransactions = [
  {
    title: 'Today',
    items: [
      { merchant: 'Starbucks', meta: 'Ring • Food & Drink', amount: '$12.50', status: 'Approved' },
      { merchant: 'Pret A Manger', meta: 'Watch • Food & Drink', amount: '$18.90', status: 'Approved' },
      { merchant: 'Metro Transit', meta: 'Ring • Transport', amount: '$2.75', status: 'Approved' },
    ],
  },
  {
    title: 'Yesterday',
    items: [
      { merchant: 'Amazon', meta: 'Virtual card • Shopping', amount: '$56.30', status: 'Approved' },
      { merchant: 'Market Hall', meta: 'Ring • Grocery', amount: '$24.10', status: 'Approved' },
    ],
  },
];

export const devices = [
  {
    name: 'SafePay Ring',
    type: 'Ring',
    battery: '87%',
    status: 'Ready to Pay',
    signal: 'Strong',
    firmware: 'v2.4.1',
    assignedCard: 'Daily Ring',
  },
  {
    name: 'SafeWatch Pro',
    type: 'Watch',
    battery: '64%',
    status: 'Connected',
    signal: 'Good',
    firmware: 'v1.8.0',
    assignedCard: 'Travel Watch',
  },
];

export const notifications = [
  { title: 'Payment approved', message: 'Starbucks • $12.50 paid using SafePay Ring', tone: 'success' },
  { title: 'Low battery detected', message: 'SafeWatch Pro is at 18% battery', tone: 'warning' },
  { title: 'Suspicious transaction blocked', message: 'An unfamiliar payment attempt was declined', tone: 'danger' },
  { title: 'Device disconnected', message: 'SafePay Ring was briefly offline and reconnected', tone: 'info' },
];

export const securityItems = [
  { label: 'Biometric Login', value: 'Face ID required before high-value payments' },
  { label: 'PIN Setup', value: '6-digit fallback security code is active' },
  { label: '2-Factor Authentication', value: 'Enabled for card and device changes' },
  { label: 'Trusted Devices', value: '2 trusted devices currently registered' },
];

export const faqs = [
  {
    q: 'How does SafePay work?',
    a: 'Add a bank card, pair your ring or watch, assign the default payment card, and pay contactlessly with a tap.',
  },
  {
    q: 'What if I lose my wearable?',
    a: 'Open SafePay, activate Lost Mode, and freeze payments instantly from the control screen.',
  },
  {
    q: 'Are cards stored securely?',
    a: 'SafePay uses tokenized card storage and controlled device assignment for secure day-to-day use.',
  },
];
