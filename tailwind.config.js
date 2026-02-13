/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Instrument Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['"IBM Plex Mono"', '"Fira Code"', '"JetBrains Mono"', 'monospace'],
            },
            colors: {
                // FIX: Explicitly naming these keys matches the "bg-bg-DEFAULT" class used in the components
                'bg-DEFAULT': '#0c0c0c', // Almostnode Dark
                'bg-secondary': '#111111',
                'bg-tertiary': '#161616',

                // Accents
                accent: {
                    DEFAULT: '#00ff88', // Almostnode Neon Green
                    cyan: '#00ff88', // Map existing cyan to green for easy blending
                    teal: '#00cc6a', // Darker green
                    purple: '#C084FC',
                }
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}