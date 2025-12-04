import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/').pop() : ''
const isPages = !!process.env.GITHUB_PAGES || process.env.CI === 'true'
const explicitBase = process.env.VITE_BASE

export default defineConfig({
  plugins: [react()],
  base: explicitBase ?? (isPages && repo ? `/${repo}/` : '/'),
})
