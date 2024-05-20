import clsx from 'clsx';
import { GitHub } from 'react-feather';

interface CardProps {
    title: string;
    description: string;
    imgSrc?: string;
    projectSource?: string;
    className?: string;
}

export default function Card(props: CardProps) {
    return (
        <div
            className={clsx(
                'col-span-1 size-auto rounded-[2.5rem] p-20 backdrop-blur-[10rem]',
                props.className,
            )}
        >
            <div className="flex gap-12">
                {props.imgSrc && (
                    <div className="hidden h-60 w-48 items-center rounded-3xl bg-white sm:flex">
                        <img className="size-fit" src="/logo.png" />
                    </div>
                )}

                <div className="flex flex-col gap-20">
                    <div>
                        <h2 className="font-bold">{props.title}</h2>
                        <span>{props.description}</span>
                    </div>
                    <div className="mt-auto cursor-pointer p-1 transition-transform hover:-translate-y-2">
                        {props.projectSource && (
                            <GitHub
                                className="hover:fill-white/50"
                                href={props.projectSource}
                                onClick={() =>
                                    window.open(
                                        'https://gitlab.com/edu_paulos/apneaECG',
                                    )
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
