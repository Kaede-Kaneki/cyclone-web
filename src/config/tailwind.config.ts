import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {

      },
      height: {
        'base-screen': 'calc(100vh - 3.5rem)'
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
      },
      keyframes: {
        'roll': {
          '0%':  { backgroundPosition: '0' },
          '100%': { backgroundPosition: '280px' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'roll': 'roll 12s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp') // 多行省略
  ]
}
