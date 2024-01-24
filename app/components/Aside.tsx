'use client';
import React, {useEffect} from 'react';
import { amiko, gabriela } from '../ui/font';
import { OPINIONS } from '../data/opinions';

interface Opinion {
  text: string;
  author: string;
}

const Aside: React.FC = () => {
    const [randomOpinions, setRandomOpinions] = React.useState<Opinion>();

    useEffect(() => {
        setRandomOpinions(OPINIONS[Math.floor(Math.random() * OPINIONS.length)])
    }, [randomOpinions]);
 

    return (
        <aside
            className='flex min-h-[150px] w-full flex-col items-center justify-center bg-moggle'
            suppressHydrationWarning>
            <div className='max-w-3xl'>
                <div className='mx-6 flex w-auto flex-col items-center'>
                    <q className={`${amiko.className} text-crema`}>
                        {randomOpinions?.text}
                    </q>
                    <span
                        className={`${gabriela.className} self-end text-crema`}>
                        - {randomOpinions?.author} -
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
