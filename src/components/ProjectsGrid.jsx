import { useMemo } from 'react'
import styles from './ProjectsGrid.module.css'

const imageUrls = import.meta.glob('../images/*', { eager: true, import: 'default', query: '?url' })

function resolveImage(basename) {
  const key = Object.keys(imageUrls).find((k) => {
    const file = k.split('/').pop() || ''
    return file.toLowerCase().startsWith(basename.toLowerCase())
  })
  return key ? imageUrls[key] : null
}

export default function ProjectsGrid({ items, onSelect }) {
  const resolved = useMemo(
    () =>
      items.map((it) => ({
        ...it,
        imgUrl: it.imageKey ? resolveImage(it.imageKey) : null,
      })),
    [items]
  )

  return (
    <div className={styles.wrap}>
      {resolved.map((it) => (
        <div
          key={it.name}
          className={`${styles.tile} ease-transform`}
          title={it.name}
          onClick={() => onSelect && onSelect(it)}
        >
          <div className={styles.thumb}>
            {it.imgUrl ? (
              <img src={it.imgUrl} alt={it.name} />
            ) : (
              <div className={styles.fallback}>{it.name[0]}</div>
            )}
          </div>
          <div className={styles.label}>{it.name}</div>
        </div>
      ))}
    </div>
  )
}
