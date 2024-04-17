import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

import { NavBarProps } from '@/components/NavBar';

export const scrollManagement = (Component: React.FC<NavBarProps>) => {
    return (props: Omit<NavBarProps, 'scrollProgress'>) => {
        const { scrollYProgress } = useScroll();
        const [scrollProgress, setScrollProgress] = useState(
            scrollYProgress.get(),
        );

        useEffect(() => {
            const handleScroll = () => {
                setScrollProgress(scrollYProgress.get());
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [scrollYProgress]);

        return (
            <Component
                {...(props as NavBarProps)}
                scrollProgress={scrollProgress}
            />
        );
    };
};
