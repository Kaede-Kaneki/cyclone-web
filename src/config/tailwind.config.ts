import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {

      },
      textColor: {
        'base-color': 'var(--cl-text-base-color)',
        'base-hover-color': 'var(--cl-text-base-hover-color)'

      },
      borderColor: {
        'base-color': 'var(--cl-border-base-color)',
        'base-muted-color': 'var(--cl-border-base-muted-color)'

      },
      backgroundColor: {
        'base-color': 'var(--cl-bg-base-color)',
        'base-hover-color': 'var(--cl-bg-base-hover-color)',
        'base-muted-color': 'var(--cl-bg-base-muted-color)'
      }
    }
  }
}
