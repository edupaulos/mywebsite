import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { GitHub, Linkedin, Sun } from 'react-feather';

const NAV_LINKS = ['home', 'about', 'blog', 'contacts'];

export const NavBar: React.FC = () => {
    const [hoveredLinkId, setHoveredLinkId] = useState<string | null>(null);
    const [isNavHovered, setIsNavHovered] = useState(false);
    const linkRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const navRef = useRef<HTMLElement | null>(null);

    const [underlineStyle, setUnderlineStyle] = useState({
        width: 0,
        left: 0,
        transform: 'scale(0)', // Opacity is handled by className 'opacity-80'
    });

    const handleLinkHover = (id: string | null) => {
        setHoveredLinkId(id);
    };

    useEffect(() => {
        if (isNavHovered && hoveredLinkId) {
            const hoveredElement = linkRefs.current[hoveredLinkId];
            const navElement = navRef.current;
            if (hoveredElement && navElement) {
                const navLeft = navElement.getBoundingClientRect().left;
                const linkRect = hoveredElement.getBoundingClientRect();
                
                setUnderlineStyle({
                    width: linkRect.width,
                    left: linkRect.left - navLeft,
                    transform: 'scale(1)',
                });
            }
        } else {
            // Not hovering a specific link, or not hovering the nav at all.
            // The underline should scale down.
            // Its last 'left' and 'width' will be preserved, making it shrink in place.
            setUnderlineStyle(prevStyle => ({
                ...prevStyle, // Keep previous width/left
                transform: 'scale(0)',
            }));
        }
    }, [hoveredLinkId, isNavHovered]);

    const toggleDarkMode = () => {
        const currentColorTheme = localStorage.getItem('color-theme');
        const isDarkMode = currentColorTheme === 'dark';

        document.documentElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('color-theme', isDarkMode ? 'light' : 'dark');
    };

    return (
        <nav
            ref={navRef}
            className="fixed left-1/2 top-24 z-10 flex w-1/2 -translate-x-1/2 -translate-y-1/2 gap-12 rounded-full bg-white/50 px-10 py-5 text-2xl backdrop-blur-md"
            onMouseLeave={() => {
                setIsNavHovered(false);
                handleLinkHover(null); // Also clear hovered link
            }}
            onMouseEnter={() => setIsNavHovered(true)}
        >
            <div
                className="absolute rounded-full bg-white p-2 opacity-80 transition-all duration-300 ease-out" // opacity-80 added back
                style={{
                    ...underlineStyle,
                    bottom: '0', // Remains fixed at the bottom of the nav
                }}
            ></div>
            {NAV_LINKS.map((id) => (
                <Link key={id} href={`#${id}`}>
                    <div
                        ref={(el) => (linkRefs.current[id] = el)}
                        onMouseEnter={() => handleLinkHover(id)}
                        // onMouseLeave={() => handleLinkHover(null)} // This would make the underline disappear when mouse leaves a link but is still on nav
                        id={`${id}-link`} // ID can remain for other purposes or be removed if not needed
                        className="text-white transition-opacity duration-150" // Explicit transition for opacity
                        style={{
                            opacity:
                                isNavHovered && hoveredLinkId === id
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
                    // Prevent underline from showing when hovering social icons
                    setIsNavHovered(true); // Keep nav as hovered
                    handleLinkHover(null); // But no specific link is selected
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
