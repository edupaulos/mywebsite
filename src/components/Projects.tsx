import Image from 'next/image';
import { GitHub } from 'react-feather';
import Card from './ui/Card';

export const Projects = () => {
    return (
        <div className="mx-auto flex max-w-[1216px] flex-col items-center py-40">
            <h1 className="font-bold ">Work</h1>
            <div className="absolute -z-10 mt-64 h-[60rem] w-[50rem] rounded-full bg-cyan-400 blur-[10rem] md:mt-10 md:h-[50rem]" />

            <div className="m-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                <Card
                    title="sChat"
                    description="Simple Android Chat app with CHAP Protocol"
                    className="sm:col-span-2"
                    imgSrc="/logo.png"
                    projectSource="https://google.com"
                />
                <Card
                    title="pyLocker"
                    description="Embedded system of smart lockers"
                    projectSource="https://gitlab.com/oz_wonderland/py-locker"
                />

                <Card
                    title="Apneia-ECG"
                    className="sm:col-span-1"
                    description="Custom app ECG Collector using Movesense device"
                    projectSource="https://gitlab.com/edu_paulos/apneaECG"
                />
                <Card
                    className="items-center"
                    title="more to come..."
                    description=""
                />
            </div>
        </div>
    );
};
