import React from 'react';
import Link from 'next/link';
import Button from './Button';

import { gabriela, prata } from '../ui/font';

interface SectionProps {
    title: string;
    subtitle: string;
    text?: JSX.Element | string;
    buttonText?: string;
    buttonLink?: string;
    reverse: boolean;
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
    title,
    subtitle,
    text,
    buttonText,
    buttonLink,
    reverse,
    children,
}) => {
    const sectionDirection = reverse ? 'flex-row-reverse' : 'flex-row';
    return (
        <section
            className={`flex ${sectionDirection} border-b-3 border-moggle flex-wrap xl:flex-nowrap`}>
            <div className='flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto my-10 p-5 md:p-0 lg:my-0'>
                <div className='flex flex-col text-center xl:text-start items-center xl:items-start gap-6 xl:ml-10'>
                    <h2 className={`${gabriela.className} text-lion text-2xl `}>
                        {title}
                    </h2>
                    <h3
                        className={`${prata.className} text-5xl leading-relaxed text-center xl:text-left`}>
                        {subtitle}
                    </h3>
                    {buttonText && buttonLink && (
                        <Link href={buttonLink}>
                            <Button text={buttonText} type='button' />
                        </Link>
                    )}
                    {text && <p className='text-moggle text-center xl:text-left'>{text}</p>}
                </div>
            </div>
            {children}
        </section>
    );
};

export default Section;
