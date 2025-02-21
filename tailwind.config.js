/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'love': ['"Handlee", serif'],
                'love-light': ['"Loved by the King"', 'serif'],
            },
        },
    },
    plugins: [],
}