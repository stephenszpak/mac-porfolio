import React from 'react'

export default function MailIcon({ title = 'Mail', ...props }) {
  // Scales with font-size of the parent via 1em
  return (
    <svg
      viewBox="0 0 64 64"
      width="1em"
      height="1em"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="mailGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#47a3ff" />
          <stop offset="100%" stopColor="#0d62ff" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#mailGradient)" />
      <g fill="#ffffff">
        <path d="M14 20h36c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2z" opacity="0.95"/>
        <path d="M14 22l18 13L50 22" fill="none" stroke="#cfe4ff" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 44l14-12" fill="none" stroke="#d7e8ff" strokeWidth="3" strokeLinecap="round"/>
        <path d="M48 44L34 32" fill="none" stroke="#d7e8ff" strokeWidth="3" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

