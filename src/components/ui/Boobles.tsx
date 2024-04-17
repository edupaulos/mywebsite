'use client';

export const Boobles: React.FC = () => {
    return (
        <div className="absolute -z-10 blur-3xl">
            <div className="absolute h-[70rem]  w-[70rem] translate-x-[80rem] translate-y-24 rounded-full bg-cyan-400 blur-3xl" />
            <div className="absolute h-[50rem]  w-[50rem] translate-x-[80rem] translate-y-[40rem] rounded-full bg-sky-400 blur-3xl" />
            <div className="absolute h-[57.5rem]  w-[83rem] translate-x-64 translate-y-96 -rotate-45 rounded-full bg-blue-600 blur-3xl" />
            <div className=" absolute h-[36rem] w-[52rem] translate-y-[50rem] -rotate-45 rounded-full bg-blue-600 blur-3xl " />
        </div>
    );
};
