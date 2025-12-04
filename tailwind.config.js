/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'], // Ensure you have a mono font loaded in index.html or CSS
            },
            colors: {
                bg: {
                    DEFAULT: '#0B0C10', // Deep void black
                    secondary: '#1F2833', // Dark charcoal
                    tertiary: '#C5C6C7', // Light gray for text
                },
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