import React from 'react';
import { AlertCircle } from 'react-feather';

export const WIP: React.FC = () => {
    return (
        <div className="fixed inset-0 z-20 flex h-screen w-screen items-center justify-center bg-gray-300 bg-opacity-50">
            <div className="flex w-screen justify-center bg-yellow-400 p-5 ">
                <div className="animate-marquee-infinite flex items-center align-middle">
                    {[...Array(5)].map((_, index) => (
                        <React.Fragment key={index}>
                            <AlertCircle className="mx-4" />
                            <h1 className=" whitespace-nowrap text-3xl  font-semibold">
                                Under construction
                            </h1>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
