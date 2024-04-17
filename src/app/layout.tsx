import './globals.css';

import { Sora } from 'next/font/google';

export const metadata = {
    title: 'Eduardo Paulos - Front-End Dev',
    description: 'Hello! Welcome to my corner of the internet!',
};

const sora = Sora({
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sora.className}>
            <body>{children}</body>
        </html>
    );
}
