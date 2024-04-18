import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'react-feather';

export const ThemeDropdown = () => {
    const { setTheme } = useTheme();

    return (
        <div className="absolute end-0 z-20 my-12 flex-col rounded-3xl bg-white/30 p-5 text-white">
            <div
                className="mb-2 flex cursor-pointer items-center"
                onClick={() => setTheme('light')}
            >
                <Sun />
                <span className="ml-2">Light</span>
            </div>
            <div
                className="mb-2 flex cursor-pointer items-center"
                onClick={() => setTheme('dark')}
            >
                <Moon />
                <span className="ml-2">Dark</span>
            </div>
            <div
                className="flex cursor-pointer items-center"
                onClick={() => setTheme('system')}
            >
                <Monitor />
                <span className="ml-2">System</span>
            </div>
        </div>
    );
};
