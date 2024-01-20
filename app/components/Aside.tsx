import React from 'react';
import { amiko, gabriela } from '../ui/font';

interface AsideProps {
    text: string;
    author: string;
}

const Aside: React.FC<AsideProps> = ({ text, author }) => {
    return (
        <aside className='flex min-h-[150px] w-full flex-col items-center justify-center bg-moggle'>
            <div className='max-w-3xl'>
                <div className='mx-6 flex w-auto flex-col items-center'>
                    <q className={`${amiko.className} text-crema`}>{text}</q>
                    <span
                        className={`${gabriela.className} self-end text-crema`}>
                        - {author} -
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
