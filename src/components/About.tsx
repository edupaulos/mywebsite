import Image from 'next/image';

export const About = () => {
    return (
        <section
            id="about"
            className="mx-auto flex max-w-[1216px] flex-col justify-center justify-items-center py-60 align-middle"
        >
            <h2 className="flex justify-center align-middle font-extrabold">
                A little bit about me
            </h2>

            <div className="grid-cols-2">
                <p className=" text-pretty text-xl">
                    {' '}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.{' '}
                </p>
                <Image
                    src="/icons/Vector.svg"
                    width={100}
                    height={100}
                    alt=""
                    className=""
                />
            </div>
        </section>
    );
};
