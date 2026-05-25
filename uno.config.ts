import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    colors: {
      border: 'oklch(var(--border))',
      input: 'oklch(var(--input))',
      ring: 'oklch(var(--ring))',
      background: 'oklch(var(--background))',
      foreground: 'oklch(var(--foreground))',
      primary: {
        DEFAULT: 'oklch(var(--primary))',
        foreground: 'oklch(var(--primary-foreground))',
      },
      muted: {
        DEFAULT: 'oklch(var(--muted))',
        foreground: 'oklch(var(--muted-foreground))',
      },
    },
  },
})
