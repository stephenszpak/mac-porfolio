
const FinderIcon = ({ title = 'Finder', ...props }) => {
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
        <linearGradient id="finderLeft" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e3f2ff" />
          <stop offset="100%" stopColor="#9dd0ff" />
        </linearGradient>
        <linearGradient id="finderRight" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#5aa4ff" />
          <stop offset="100%" stopColor="#1b5cff" />
        </linearGradient>
        <linearGradient id="finderGloss" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#finderLeft)" />
      <path
        d="M32 4 H48 A12 12 0 0 1 60 16 V48 A12 12 0 0 1 48 60 H32 Z"
        fill="url(#finderRight)"
      />
      <path d="M8 6h48a10 10 0 0 1 10 10v0c0 0-0.2 0-0.2 0H8z" fill="url(#finderGloss)" opacity="0.5" />
      <g>
        <path d="M32 10v44" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.4" />
        <circle cx="22" cy="26" r="2.0" fill="#0b2a5a" opacity="0.9" />
        <circle cx="42" cy="26" r="2.0" fill="#0b2a5a" opacity="0.9" />
        <path
          d="M18 38c4.5 4 9.5 6 14 6s9.5-2 14-6"
          fill="none"
          stroke="#0b2a5a"
          strokeLinecap="round"
          strokeWidth="2.1"
          opacity="0.9"
        />
      </g>
      <rect x="4" y="4" width="56" height="56" rx="12" fill="none" stroke="#000" opacity="0.08" />
    </svg>
  )
}

export default FinderIcon
