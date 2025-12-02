
export default function NotesIcon({ title = 'Notes', ...props }) {
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
        <linearGradient id="notesTop" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffe27a" />
          <stop offset="100%" stopColor="#f7c948" />
        </linearGradient>
        <linearGradient id="notesPaper" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <clipPath id="notesClip">
          <rect x="4" y="4" width="56" height="56" rx="14" />
        </clipPath>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#notesPaper)" stroke="#e5e7eb" strokeWidth="1" />
      <g clipPath="url(#notesClip)">
        <rect x="4" y="4" width="56" height="14" fill="url(#notesTop)" />
      </g>
      <path d="M6 18h52" stroke="#000" opacity="0.06" />
      <g stroke="#9aa5b1" opacity="0.22" strokeWidth="1">
        <path d="M10 24h44" />
        <path d="M10 30h44" />
        <path d="M10 36h44" />
        <path d="M10 42h44" />
        <path d="M10 48h44" />
      </g>
    </svg>
  )
}
