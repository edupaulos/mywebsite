import { ThemeProvider } from '@/utils/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

import { Poppins } from 'next/font/google';

export const metadata = {
    title: 'Eduardo Paulos - Front-End Dev',
    description: 'Hello! Welcome to my corner of the internet!',
};

const sora = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sora.className}>
            <body className="dark:bg-zinc-800">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                    <SpeedInsights />
                </ThemeProvider>
            </body>
        </html>
    );
}
