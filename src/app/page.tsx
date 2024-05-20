'use client';

import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Projects } from '@/components/Projects';
import { Boobles } from '@/components/ui/Boobles';
import { motion } from 'framer-motion';

export default function Home() {
    const item = {
        offscreen: {
            y: 300,
        },
        onscreen: {
            y: 50,
            rotate: -10,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <main className="mx-auto">
            <Boobles />

            <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="inline break-inside-avoid text-center font-extrabold text-white "
                >
                    Hey, there!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl"
                >
                    Welcome to my corner of the internet!
                </motion.p>

                <motion.img
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-10"
                    src="/icons/Vector.svg"
                />
            </div>

            <div className="animate-initialAnimation bg-noise-pattern bg-fixed mix-blend-soft-light backdrop-blur-3xl dark:bg-white/30" />

            <About />
            <Projects />
            <Blog />

            <footer className=" mx-8 rounded-t-[2rem] p-20 dark:bg-black/30 ">
                <div></div>
            </footer>
        </main>
    );
}
