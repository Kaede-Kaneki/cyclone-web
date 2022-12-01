import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const withOpacity = (color: string) => {
  return `rgba(var(${color}), <alpha-value>)`
}

const rotateX = plugin(function ({addUtilities}) {
  addUtilities({
    '.rotate-x-90': {transform: 'rotateX(90deg)'},
    '.rotate-x-180': {transform: 'rotateX(180deg)'},
    '.-rotate-x-90': {transform: 'rotateX(-90deg)'},
  })
})

const rotateY = plugin(function ({addUtilities}) {
  addUtilities({
    '.rotate-y-90': {transform: 'rotateY(90deg)'},
    '.-rotate-y-90': {transform: 'rotateY(-90deg)'},
  })
})

const translateZ = plugin(function ({addUtilities}) {
  addUtilities({
    '.translate-z-50':{ transform : 'translateZ(50px)' }
  })
})

const perspective = plugin(function ({addUtilities}) {
  addUtilities({
    '.perspective-4': { perspective: '4px' },
    '.perspective-origin': { perspectiveOrigin: '50% 50%'}
  })
})

export default <Partial<Config>>{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {

      },
      height: {
        'base-screen': 'calc(100vh - 3.5rem)'
      },
      rotate: {
        'x-90': 'transform: rotateX(90deg)'
      },
      textColor: {
        'base-color': withOpacity('--cl-text-base-color'),
        'base-hover-color': withOpacity('--cl-text-base-hover-color)')

      },
      borderColor: {
        'base-color': withOpacity('--cl-border-base-color'),
        'base-muted-color': withOpacity('--cl-border-base-muted-color')

      },
      backgroundColor: {
        'base-color': withOpacity('--cl-bg-base-color'),
        'base-hover-color': withOpacity('--cl-bg-base-hover-color'),
        'base-muted-color': withOpacity('--cl-bg-base-muted-color')
      },
      keyframes: {
        'roll': {
          '0%':  { backgroundPosition: '50% 0' },
          '100%': { backgroundPosition: '-190% 0' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'roll': 'roll 5s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // 多行省略
    rotateX,
    rotateY,
    translateZ,
    perspective
  ]
}
