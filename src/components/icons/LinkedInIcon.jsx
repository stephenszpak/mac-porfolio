import React from 'react'

export default function LinkedInIcon({ title = 'LinkedIn', ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="1em"
      height="1em"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      {...props}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id="liBlue" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4aa3ff" />
          <stop offset="100%" stopColor="#0a66c2" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#liBlue)" />
      <g fill="#ffffff">
        <rect x="16" y="26" width="6" height="18" rx="2" />
        <circle cx="19" cy="20" r="3.5" />
        <path d="M28 26h5.6v3c1.1-2.1 3.3-3.5 6.3-3.5 4.9 0 8.1 3.1 8.1 8.8V44h-6v-8.3c0-3-1.6-4.9-4.2-4.9-2.7 0-4.3 1.9-4.3 4.9V44H28V26z" />
      </g>
      <rect x="4" y="4" width="56" height="56" rx="12" fill="none" stroke="#000" opacity="0.08" />
    </svg>
  )
}

