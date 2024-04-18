import Image from 'next/image';

export const About = () => {
    return (
        <section
            id="about"
            className="mx-auto flex max-w-[1216px] flex-col items-center justify-center py-52"
        >
            <h2 className=" flex justify-center font-extrabold">
                A little bit about me
            </h2>

            <div className="m-14 flex flex-wrap justify-center gap-10">
                <p className="mx-auto mb-10 max-w-md text-pretty text-xl font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.{' '}
                </p>
                <Image
                    src="/profileImg.png"
                    width={100}
                    height={100}
                    alt=""
                    className="size-72 rounded-2xl "
                />
            </div>

            <button className="rounded-md bg-white/20 px-8 py-2 font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] backdrop-blur-3xl transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
                See more
            </button>
        </section>
    );
};
