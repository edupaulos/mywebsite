'use client';

import { Boobles } from '@/components/ui/Boobles';

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
                <p className="text-4xl">
                    Welcome to my corner of the internet!
                </p>
                <img
                    className="absolute left-1/2 top-1/2 mt-64 -translate-x-1/2 -translate-y-1/2 "
                    src="/icons/Vector.svg"
                />
            </div>
            <section
                id="about"
                className="mx-auto flex max-w-[1216px] flex-col justify-center justify-items-center py-60 align-middle"
            >
                <h2 className="flex justify-center align-middle font-extrabold">
                    A little bit about me
                </h2>
                <p className="text-pretty text-2xl">
                    {' '}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.{' '}
                </p>
            </section>

            <footer></footer>
        </main>
    );
}
