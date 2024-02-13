/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                'primary-color': 'hsla(var(--primary-color))',
            },
            animation: {
                initialAnimation: 'initialAnimation 1s forwards',
            },
            keyframes: {
                initialAnimation: {
                    from: {
                        margin: '0',
                        height: '100vh',
                        'border-radius': '0',
                    },
                    to: {
                        margin: '2rem',
                        height: 'calc(100vh - 4rem)',
                        'border-radius': '2rem',
                    },
                },
            },
        },
    },
    plugins: [],
};
