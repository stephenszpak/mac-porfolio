
export default function ContactsIcon({ title = 'Contacts', ...props }) {
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
        <linearGradient id="contactsPaper" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e9dfcf" />
          <stop offset="100%" stopColor="#d8ccb7" />
        </linearGradient>
        <linearGradient id="contactsSpine" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#bfae8f" />
          <stop offset="100%" stopColor="#a79273" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="12" fill="url(#contactsPaper)" />
      <rect x="6" y="6" width="10" height="52" rx="12" fill="url(#contactsSpine)" />
      <rect x="54" y="14" width="6" height="8" rx="2" fill="#5cc8ff" />
      <rect x="54" y="24" width="6" height="8" rx="2" fill="#ff8a7a" />
      <rect x="54" y="34" width="6" height="8" rx="2" fill="#ffd166" />
      <rect x="54" y="44" width="6" height="8" rx="2" fill="#6ee7a8" />
      <g transform="translate(0,2)">
        <circle cx="34" cy="28" r="8" fill="#8a795f" opacity="0.9" />
        <path d="M22 46c0-6.6 5.4-12 12-12s12 5.4 12 12v2H22v-2z" fill="#8a795f" opacity="0.9" />
        <circle cx="31" cy="26" r="3" fill="#fff" opacity="0.2" />
      </g>
      <rect x="6" y="6" width="52" height="52" rx="12" fill="none" stroke="#000" opacity="0.08" />
    </svg>
  )
}
