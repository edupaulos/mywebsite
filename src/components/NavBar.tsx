'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { GitHub, Linkedin, Sun } from 'react-feather';
import { ThemeDropdown } from './ThemeDropdown';
import { scrollManagement } from '@/utils/ScrollManagement';

export interface NavBarProps {
    scrollProgress: number;
}

const NavBar: React.FC<NavBarProps> = ({ scrollProgress }) => {
    const [hoveredLink, setHoveredLink] = useState<HTMLElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLinkEnter = (id: string) => {
        setHoveredLink(document.getElementById(`${id}-link`) as HTMLElement);
    };

    const toogleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <motion.nav
            className="fixed left-1/2 top-24 z-20 mx-auto hidden -translate-x-1/2 -translate-y-1/2 gap-12 rounded-full bg-white/30 px-7 py-3 text-lg backdrop-blur-md md:flex"
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            onMouseEnter={() => setIsHovered(true)}
            animate={{
                width: scrollProgress > 0.2 ? '27rem' : '50rem',
                top: scrollProgress > 0.2 ? '4rem' : '',
            }}
            transition={{ type: 'Tween' }}
        >
            {hoveredLink && (
                <div
                    className="absolute rounded-full bg-white p-1 opacity-80 transition-all"
                    style={{
                        width: hoveredLink.offsetWidth,
                        bottom: '0',
                        left: hoveredLink.offsetLeft,
                        transform: `translateX(0) scale(${isHovered ? 1 : 0})`,
                    }}
                />
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
                className="ml-auto flex cursor-pointer gap-12 overflow-hidden"
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
                    onClick={toogleDropdown}
                />
            </div>
            {isDropdownOpen && <ThemeDropdown />}
        </motion.nav>
    );
};

export default scrollManagement(NavBar);
