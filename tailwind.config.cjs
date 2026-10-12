module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0B',
        'text-primary': '#F7F4EF',
        'text-body': '#8A857C',
        'accent-primary': '#C9A84C',
        'accent-secondary': '#A68A5B'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        body: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
