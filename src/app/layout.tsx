import { ThemeProvider } from '@/utils/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

import { Urbanist, Poppins } from 'next/font/google';
import NavBar from '@/components/NavBar';

export const metadata = {
    title: 'Eduardo Paulos - Front-End Dev',
    description: 'Hello! Welcome to my corner of the internet!',
};

const urbanist = Urbanist({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--urbanist',
});

const hind = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--hind',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${hind.variable} ${urbanist.variable}`}>
            <body className="dark:bg-zinc-800">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <NavBar />
                    {children}
                    <SpeedInsights />
                </ThemeProvider>
            </body>
        </html>
    );
}
