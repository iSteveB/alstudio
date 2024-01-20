'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

const Modal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const handleBack = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        router.back();
    };

    return (
        <div className='fixed left-1/2 top-1/2 z-50 h-screen w-full -translate-x-1/2 -translate-y-1/2 bg-black/90'>
            <div className='m-6'>
                <Button type='submit' text='back' handleRoute={handleBack} />
            </div>

            <div className='fixed left-1/2 top-1/2 h-auto max-h-screen -translate-x-1/2 -translate-y-1/2 overflow-scroll border-3 border-black shadow-xl shadow-black'>
                {children}
            </div>
        </div>
    );
};

export default Modal;
