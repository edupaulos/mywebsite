'use client';

import Box from '@/components/Box';
import { NavBar } from '@/components/NavBar';
import { WIP } from '@/components/WIP';
import Image from 'next/image';
import Vector from '../../public/icons/Vector.svg';

export default function Home() {
    return (
        <>
            <WIP />
            <NavBar />
            <main>
                <Box className="relative flex animate-initialAnimation flex-col items-center justify-center bg-primary-color dark:bg-blue-900">
                    <h1 className="break-inside-avoid text-center font-black text-white">
                        Hey, there!
                        <br />
                        I’m{' '}
                        <span className="decoration-wavy underline-offset-8 hover:underline">
                            Eduardo.
                        </span>
                    </h1>
                    <p className="text-4xl">
                        Welcome to my corner of the internet!
                    </p>
                    <Image
                        className="absolute left-1/2 top-1/2 mt-96 -translate-x-1/2 -translate-y-1/2 "
                        src={Vector}
                        alt="Decorative vector graphic"
                        width={100}
                        height={100}
                    />
                </Box>
            </main>
        </>
    );
}
