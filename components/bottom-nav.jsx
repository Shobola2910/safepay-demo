'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { label: 'Home', href: '/demo/dashboard', match: ['/demo/dashboard'] },
  { label: 'Cards', href: '/demo/cards/manage', match: ['/demo/cards'] },
  { label: 'Devices', href: '/demo/devices/control', match: ['/demo/devices'] },
  { label: 'Activity', href: '/demo/activity', match: ['/demo/activity', '/demo/notifications'] },
  { label: 'Settings', href: '/demo/settings', match: ['/demo/settings', '/demo/security', '/demo/help', '/demo/profile'] },
];

const icons = {
  Home: '⌂',
  Cards: '◧',
  Devices: '◎',
  Activity: '◷',
  Settings: '⚙',
};

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => {
        const active = item.match.some((entry) => pathname.startsWith(entry));
        return (
          <Link key={item.label} href={item.href} className={`bottom-nav__item ${active ? 'is-active' : ''}`}>
            <span className="bottom-nav__icon" aria-hidden="true">{icons[item.label]}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
