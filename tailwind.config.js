/** @type {import('tailwindcss').Config} */
export default {
    content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'russo': ['"Russo One"', 'serif'],
            },
            maxWidth: {
                '8xl': '96rem',
            },
        },
    },
    plugins: [],
}