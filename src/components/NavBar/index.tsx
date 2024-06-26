import Link from 'next/link';
import { useState } from 'react';
import { GitHub, Linkedin, Sun } from 'react-feather';

export const NavBar: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<HTMLElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleLinkEnter = (id: string) => {
        setHoveredLink(document.getElementById(`${id}-link`) as HTMLElement);
    };

    const toggleDarkMode = () => {
        const currentColorTheme = localStorage.getItem('color-theme');
        const isDarkMode = currentColorTheme === 'dark';

        document.documentElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('color-theme', isDarkMode ? 'light' : 'dark');
    };

    return (
        <nav
            className="fixed left-1/2 top-24 z-10 flex w-1/2 -translate-x-1/2 -translate-y-1/2 gap-12 rounded-full bg-white/50 px-10 py-5 text-2xl backdrop-blur-md"
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            onMouseEnter={() => setIsHovered(true)}
        >
            {hoveredLink && (
                <div
                    className="absolute rounded-full bg-white p-2 opacity-80 transition-all"
                    style={{
                        width: hoveredLink.offsetWidth,
                        bottom: '0',
                        left: hoveredLink.offsetLeft,
                        transform: `translateX(0) scale(${isHovered ? 1 : 0})`,
                    }}
                ></div>
            )}
            {['home', 'about', 'blog', 'contacts'].map((id) => (
                <Link key={id} href={`#${id}`}>
                    <div
                        onMouseEnter={() => handleLinkEnter(id)}
                        id={`${id}-link`}
                        className=" text-white transition-all"
                        style={{
                            opacity:
                                isHovered && hoveredLink?.id === `${id}-link`
                                    ? 0.7
                                    : 1,
                        }}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </div>
                </Link>
            ))}
            <div
                className="ml-auto flex cursor-pointer gap-12"
                onMouseEnter={() => {
                    setIsHovered(false);
                }}
            >
                <Linkedin
                    onClick={() => {
                        window.open(
                            'https://www.linkedin.com/in/eduardo-paulos/',
                        );
                    }}
                    className=" stroke-white hover:fill-white/50"
                />
                <GitHub
                    onClick={() => {
                        window.open('https://github.com/edupaulos');
                    }}
                    className="stroke-white hover:fill-white/50"
                />
                <Sun
                    className=" stroke-white hover:fill-white/50"
                    onClick={() => toggleDarkMode()}
                />
            </div>
        </nav>
    );
};
