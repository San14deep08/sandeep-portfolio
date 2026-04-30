/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Neural Aurora palette
        navy: '#030712',          // deep space black — base bg
        'navy-light': '#0d0d1a',  // slightly lighter surface
        'navy-deep': '#060612',   // deepest bg
        fg: '#f1f5f9',            // bright white text
        'fg-muted': '#94a3b8',    // muted slate text
        mint: '#a78bfa',          // violet — primary AI accent
        // Aurora accent colors (for orbs + gradients)
        'aurora-violet': '#7c3aed',
        'aurora-indigo': '#4f46e5',
        'aurora-cyan': '#06b6d4',
        'aurora-pink': '#ec4899',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'aurora-1': 'aurora-drift-1 18s ease-in-out infinite',
        'aurora-2': 'aurora-drift-2 24s ease-in-out infinite',
        'aurora-3': 'aurora-drift-3 20s ease-in-out infinite',
        'aurora-4': 'aurora-drift-4 28s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'aurora-drift-1': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(60px, -80px) scale(1.08)' },
          '50%': { transform: 'translate(-40px, 60px) scale(0.94)' },
          '75%': { transform: 'translate(80px, 40px) scale(1.04)' },
        },
        'aurora-drift-2': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-70px, 50px) scale(1.1)' },
          '66%': { transform: 'translate(50px, -40px) scale(0.92)' },
        },
        'aurora-drift-3': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '40%': { transform: 'translate(40px, 70px) scale(1.06)' },
          '80%': { transform: 'translate(-60px, -30px) scale(0.96)' },
        },
        'aurora-drift-4': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '30%': { transform: 'translate(-50px, -60px) scale(1.05)' },
          '70%': { transform: 'translate(70px, 50px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}
