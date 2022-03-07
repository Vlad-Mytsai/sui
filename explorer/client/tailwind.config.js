const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            advanced: ['Inter', 'cursive'],
            mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
        },
    },
    plugins: [],
};
