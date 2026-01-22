/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FCF1DF',
        burgundy: '#5B191B',
        gold: '#CE973D',
      },
      fontFamily: {
        'special-elite': ['Special Elite', 'system-ui'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'zalando': ['Zalando Sans Expanded', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
        // Fluid spacing utilities
        'fluid-xs': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'fluid-sm': 'clamp(0.5rem, 1vw, 0.75rem)',
        'fluid-md': 'clamp(0.75rem, 1.5vw, 1rem)',
        'fluid-lg': 'clamp(1rem, 2vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 3vw, 2rem)',
        'fluid-2xl': 'clamp(2rem, 4vw, 3rem)',
        'fluid-3xl': 'clamp(3rem, 6vw, 4rem)',
      },
      fontSize: {
        // Fluid typography - scales smoothly at all viewport sizes
        'fluid-xs': ['clamp(0.7rem, 0.8vw + 0.3rem, 0.85rem)', { lineHeight: '1.4' }],
        'fluid-sm': ['clamp(0.8rem, 0.9vw + 0.4rem, 0.95rem)', { lineHeight: '1.5' }],
        'fluid-base': ['clamp(0.95rem, 1vw + 0.5rem, 1.1rem)', { lineHeight: '1.6' }],
        'fluid-lg': ['clamp(1.1rem, 1.2vw + 0.6rem, 1.3rem)', { lineHeight: '1.6' }],
        'fluid-xl': ['clamp(1.25rem, 1.5vw + 0.7rem, 1.6rem)', { lineHeight: '1.5' }],
        'fluid-2xl': ['clamp(1.5rem, 2vw + 0.8rem, 2rem)', { lineHeight: '1.4' }],
        'fluid-3xl': ['clamp(1.875rem, 2.5vw + 1rem, 2.5rem)', { lineHeight: '1.3' }],
        'fluid-4xl': ['clamp(2.25rem, 3vw + 1.2rem, 3rem)', { lineHeight: '1.2' }],
        'fluid-5xl': ['clamp(2.5rem, 4vw + 1.5rem, 3.5rem)', { lineHeight: '1.1' }],
        // Static sizes (keep for backward compatibility)
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      gap: {
        // Fluid gap utilities for flex/grid
        'fluid-xs': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'fluid-sm': 'clamp(0.5rem, 1vw, 0.75rem)',
        'fluid-md': 'clamp(0.75rem, 1.5vw, 1rem)',
        'fluid-lg': 'clamp(1rem, 2vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 3vw, 2rem)',
        'fluid-2xl': 'clamp(2rem, 4vw, 3rem)',
      },
      minHeight: {
        'touch': '44px',
        'fluid-touch': 'clamp(44px, 5vw, 60px)',
      },
      minWidth: {
        'touch': '44px',
        'fluid-touch': 'clamp(44px, 5vw, 60px)',
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'desktop': '1400px', // New breakpoint - true desktop (excludes iPad landscape)
      '2xl': '1536px',
    },
  },
  plugins: [],
};
