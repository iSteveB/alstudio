'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

const Modal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const handleBack = (
        event:
            | React.MouseEvent<HTMLButtonElement, MouseEvent>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.stopPropagation();
        router.back();
    };

    return (
        <div
            className='fixed left-1/2 top-1/2 z-50 h-screen w-full -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur'
            onClick={handleBack}>
            <div className='m-6'>
                <Button
                    handleClick={handleBack}
                    aria-label='Close'
                    text={'Retour'}
                    type={'button'}
                />
            </div>

            <div className='absolute left-1/2 top-1/2 h-auto max-h-screen -translate-x-1/2 -translate-y-1/2 border-3 border-black shadow-xl shadow-black'>
                {children}
            </div>
        </div>
    );
};

export default Modal;
