'use client';

import Box from '@/components/Box';

export default function Home() {
    return (
        <main>
            <Box className="flex justify-center items-center flex-col animate-initialAnimation bg-primary-color">
                <h1 className="font-bold text-white text-center">
                    Hey, there!
                    <p />
                    I’m Eduardo.
                </h1>
                <p className="text-3xl">I'm a Web developer.</p>
            </Box>
        </main>
    );
}
