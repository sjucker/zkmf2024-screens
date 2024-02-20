import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                blau: {
                    DEFAULT: '#0358ae',
                },
                rot: {
                    DEFAULT: '#ff5f24',
                },
                gelb: {
                    DEFAULT: '#ffbf2d',
                },
                silber: {
                    DEFAULT: '#d5d7d9',
                },
            },
        },
    },
    plugins: [],
}

