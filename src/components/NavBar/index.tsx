import Link from 'next/link';
import { useState } from 'react';

export const NavBar: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<HTMLElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleLinkEnter = (id: string) => {
        setHoveredLink(document.getElementById(`${id}-link`) as HTMLElement);
    };

    return (
        <nav
            className="group fixed left-1/2 top-24 z-10 flex -translate-x-1/2 -translate-y-1/2 gap-12 rounded-full bg-white/50 px-10 py-5 text-lg backdrop-blur-md"
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
                        className="text-white transition-all"
                        style={{
                            opacity:
                                isHovered && hoveredLink?.id === `${id}-link`
                                    ? 0.7
                                    : 1,
                            // Add any other styles or transitions for links
                        }}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </div>
                </Link>
            ))}
        </nav>
    );
};
