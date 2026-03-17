# SafePay Web Demo — Code Map

```text
safepay-web-demo/
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   ├── page.jsx
│   └── demo/
│       ├── splash/page.jsx
│       ├── onboarding/1/page.jsx
│       ├── onboarding/2/page.jsx
│       ├── onboarding/3/page.jsx
│       ├── auth/
│       │   ├── signup/page.jsx
│       │   ├── login/page.jsx
│       │   └── otp/page.jsx
│       ├── dashboard/page.jsx
│       ├── cards/
│       │   ├── add/page.jsx
│       │   └── manage/page.jsx
│       ├── devices/
│       │   ├── pair/page.jsx
│       │   ├── details/page.jsx
│       │   └── control/page.jsx
│       ├── payments/success/page.jsx
│       ├── activity/
│       │   ├── page.jsx
│       │   └── receipt/page.jsx
│       ├── notifications/page.jsx
│       ├── security/page.jsx
│       ├── settings/page.jsx
│       ├── help/page.jsx
│       └── profile/page.jsx
├── components/
│   ├── bottom-nav.jsx
│   ├── demo-shell.jsx
│   ├── phone-frame.jsx
│   ├── safe-pay-logo.jsx
│   ├── switch.jsx
│   ├── ui.jsx
│   └── visuals.jsx
├── lib/
│   └── data.js
├── package.json
├── next.config.mjs
├── jsconfig.json
├── README.md
└── CODE_MAP.md
```

## Component responsibilities

- `demo-shell.jsx` — shared presentation layout with progress list and phone stage
- `phone-frame.jsx` — mobile device chrome for the product demo
- `bottom-nav.jsx` — app-like bottom navigation
- `ui.jsx` — reusable buttons, form inputs, cards, alerts, rows, widgets
- `visuals.jsx` — gradient ring/watch/card illustrations built in CSS
- `data.js` — mock product data and flow navigation

## Recommended next steps

- Replace static demo data with database-backed content
- Add real auth
- Add analytics and payment APIs
- Add live notifications and device state syncing
- Add admin dashboard if needed for investor presentation
