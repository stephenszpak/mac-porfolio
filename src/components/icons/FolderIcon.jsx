import React from 'react'

export default function FolderIcon({ title = 'Folder', ...props }) {
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
        <linearGradient id="folderTop" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#bfe0ff" />
          <stop offset="100%" stopColor="#7ab8ff" />
        </linearGradient>
        <linearGradient id="folderBody" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7ab8ff" />
          <stop offset="100%" stopColor="#2f7bf6" />
        </linearGradient>
      </defs>
      {/* Tab */}
      <path d="M10 18a6 6 0 0 1 6-6h10l4 4h18a6 6 0 0 1 6 6v2H10v-6z" fill="url(#folderTop)" />
      {/* Body */}
      <rect x="8" y="20" width="48" height="32" rx="6" fill="url(#folderBody)" />
      {/* Subtle inner border */}
      <rect x="8" y="20" width="48" height="32" rx="6" fill="none" stroke="#000" opacity="0.08" />
    </svg>
  )
}

