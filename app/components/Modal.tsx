"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Modal = ({ children }: { children: React.ReactNode }) => {    
    const router = useRouter();

    const handleBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        router.back();
    };

    return (
        <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 bg-black bg-opacity-90 h-full w-full'>
            <button type="submit" onClick={(event)=>handleBack(event)}>back</button>
            <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-xl shadow-black max-h-fit max-w-fit border-3 border-black'>
                {children}
            </div>
        </div>
    );
};

export default Modal;
