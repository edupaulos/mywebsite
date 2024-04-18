'use client';

import { About } from '@/components/About';
import { Boobles } from '@/components/ui/Boobles';
import Image from 'next/image';

export default function Home() {
    return (
        <main className=" mx-auto">
            <Boobles />

            {/* <img
                src="/noise.svg"
                className="absolute size-40 animate-initialAnimation mix-blend-overlay"
            /> */}

            <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
                <h1 className="inline break-inside-avoid text-center font-black text-white">
                    Hey, there!
                    <br />
                    I’m Eduardo.
                </h1>
                <p className="text-2xl">
                    Welcome to my corner of the internet!
                </p>
                <img className="p-10" src="/icons/Vector.svg" />
            </div>

            <div className="animate-initialAnimation bg-noise-pattern bg-fixed mix-blend-soft-light backdrop-blur-3xl dark:bg-white/30" />

            <About />

            <footer></footer>
        </main>
    );
}
