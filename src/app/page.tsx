'use client';

import Box from '@/components/Box';

export default function Home() {
    return (
        <main>
            <Box className="relative flex flex-col justify-center items-center animate-initialAnimation bg-primary-color">
                <h1 className="font-black text-white text-center break-inside-avoid">
                    Hey, there!
                    <br />
                    I’m{' '}
                    <span className="hover:underline decoration-wavy underline-offset-8">
                        Eduardo.
                    </span>
                </h1>
                <p className="text-5xl">
                    Welcome to my corner of the internet!
                </p>
                <img
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-96"
                    src="/icons/Vector.svg"
                />
            </Box>
        </main>
    );
}
