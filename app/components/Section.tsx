import React from 'react';
import Link from 'next/link';
import Button from './Button';

import { gabriela, prata } from '../ui/font';

interface SectionProps {
    id?: string;
    title: string;
    subtitle: string;
    text?: JSX.Element | string;
    buttonText?: string;
    buttonLink?: string;
    reverse: boolean;
    children?: React.ReactNode;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Section: React.FC<SectionProps> = ({
    id,
    title,
    subtitle,
    text,
    buttonText,
    buttonLink,
    reverse,
    children,
    handleClick,
}) => {
    const sectionDirection = reverse ? 'flex-row-reverse' : 'flex-row';
    return (
        <section
        id={id}
            className={`flex ${sectionDirection} flex-wrap items-center border-b-3 border-moggle xl:flex-nowrap`}>
            <div className='mx-auto my-10 flex w-full flex-col items-center justify-center md:p-0  lg:w-1/2 '>
                <div className='flex flex-col items-center gap-6 text-center xl:ml-10 xl:items-start xl:text-start'>
                    <h2 className={`${gabriela.className} text-2xl text-lion `}>
                        {title}
                    </h2>
                    <h3
                        className={`${prata.className} text-center text-5xl leading-relaxed xl:text-left`}>
                        {subtitle}
                    </h3>
                    {buttonText && buttonLink && (
                        <Link href={buttonLink}>
                            <Button
                                text={buttonText}
                                type='button'
                                
                            />
                        </Link>
                    )}
                    {buttonText && !buttonLink && (
                        <Button
                            text={buttonText}
                            type='button'
                            handleClick={(event) => handleClick && handleClick(event)}
                        />
                    )}
                    {text && (
                        <p className='px-8 text-center text-moggle lg:px-0 xl:text-left'>
                            {text}
                        </p>
                    )}
                </div>
            </div>
            {children}
        </section>
    );
};

export default Section;
