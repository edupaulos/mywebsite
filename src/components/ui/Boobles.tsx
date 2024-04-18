'use client';

export const Boobles: React.FC = () => {
    return (
        <div className="absolute -z-10 blur-3xl">
            <div className="absolute h-[43rem] w-[43rem] translate-x-[50rem] translate-y-14 rounded-full bg-cyan-400 blur-3xl" />
            <div className="absolute h-[31rem]  w-[31rem] translate-x-[50rem] translate-y-96 rounded-full bg-sky-500 blur-3xl" />
            <div className="absolute h-[36rem]  w-[52rem] translate-x-40 translate-y-40 -rotate-45 rounded-full bg-blue-600 blur-3xl" />
            <div className="absolute h-[22.5rem] w-[32.5rem] translate-y-[31.25rem] -rotate-45 rounded-full bg-blue-600 blur-3xl " />
        </div>
    );
};
