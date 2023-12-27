import React from 'react';
import { amiko, gabriela } from '../ui/font';

interface AsideProps {
    text: string;
    author: string;
}

const Aside: React.FC<AsideProps> = ({ text, author }) => {
    return (
        <aside className='flex flex-col items-center justify-center w-full h-36 bg-moggle'>
            <div className='max-w-2xl'>
                <div className='flex flex-col items-center w-auto'>
                    <q className={`${amiko.className} text-crema`}>{text}</q>
                    <span
                        className={`${gabriela.className} text-crema self-end`}>
                        - {author} -
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
