/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
            },
            colors: {
                // FIX: Explicitly naming these keys matches the "bg-bg-DEFAULT" class used in the components
                'bg-DEFAULT': '#0B0C10',
                'bg-secondary': '#1F2833',
                'bg-tertiary': '#C5C6C7',

                // Accents
                accent: {
                    cyan: '#66FCF1',
                    teal: '#45A29E',
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