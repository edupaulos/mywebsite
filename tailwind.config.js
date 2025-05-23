/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-color': 'hsla(var(--primary-color))',
            },
            animation: {
                initialAnimation: 'initialAnimation 1s forwards',
                'marquee-infinite': 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                initialAnimation: {
                    from: {
                        transform: 'translate(0px, 0px) scale(1, 1)',
                        'border-radius': '0rem',
                    },
                    to: {
                        transform: 'translate(2rem, 2rem) scale(calc((100vw - 4rem) / 100vw), calc((100vh - 4rem) / 100vh))',
                        'border-radius': '2rem',
                    },
                },
            },
        },
    },
    plugins: [],
};
