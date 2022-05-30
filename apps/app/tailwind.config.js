const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            serif: ['Quicksand', ...defaultTheme.fontFamily.serif]
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                sm: '2rem',
                lg: '2rem',
                xl: '2rem',
                '2xl': '2rem'
            }
        },
        extend: {}
    },
    plugins: []
};
