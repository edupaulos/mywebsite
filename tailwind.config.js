/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'noise-pattern': "url('/noise.svg')",
            },

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
                        margin: '0',
                        height: '100vh',
                        'border-radius': '0',
                    },
                    to: {
                        margin: '2rem',
                        height: 'calc(100vh - 4rem)',
                        'border-radius': '2.5rem',
                    },
                },
            },
        },
    },
    plugins: [],
};
