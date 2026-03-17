'use client';

import { useState } from 'react';

export default function Switch({ defaultOn = false, label = '', danger = false }) {
  const [enabled, setEnabled] = useState(defaultOn);

  return (
    <button
      type="button"
      aria-label={label || 'Toggle'}
      aria-pressed={enabled}
      onClick={() => setEnabled((prev) => !prev)}
      className={`toggle ${enabled ? 'is-on' : ''} ${danger ? 'toggle--danger' : ''}`}
    >
      <span className="toggle__thumb" />
    </button>
  );
}
