'use client';

import { Boobles } from '@/components/ui/Boobles';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="mx-auto">
            <Boobles />

            <div className="relative flex animate-initialAnimation flex-col items-center justify-center bg-white/20 bg-blend-overlay backdrop-blur-3xl dark:bg-black/30">
                <h1 className="inline break-inside-avoid text-center font-black text-white">
                    Hey, there!
                    <br />
                    I’m Eduardo.
                </h1>
                <p className="text-2xl">
                    Welcome to my corner of the internet!
                </p>
                <img
                    className="absolute left-1/2 top-1/2 mt-64 -translate-x-1/2 -translate-y-1/2 "
                    src="/icons/Vector.svg"
                />
            </div>

            <footer></footer>
        </main>
    );
}
