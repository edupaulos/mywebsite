export const Blog = () => {
    return (
        <section
            id="blog"
            className="mx-auto flex max-w-[1216px] flex-col items-center py-52"
        >
            <h2 className=" flex justify-center font-extrabold">Blog posts</h2>

            <div className="m-14 flex flex-wrap justify-center gap-10"></div>

            <button className="rounded-md bg-white/20 px-8 py-2 font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)]  transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
                See more
            </button>
        </section>
    );
};
