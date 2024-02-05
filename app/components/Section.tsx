import React from 'react';
import Button from './Button';

import { motion } from 'framer-motion';
import { gabriela, prata } from '../ui/font';

interface SectionProps {
    id?: string;
    h1Title?: string;
    title?: string;
    h1Subtitle?: string;
    subtitle?: string;
    text?: JSX.Element | string | boolean;
    buttonText?: string;
    buttonLink?: string;
    reverse: boolean;
    children?: React.ReactNode;
    handleClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const Section: React.FC<SectionProps> = ({
    id,
    h1Title,
    title,
    h1Subtitle,
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
        <motion.section
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            id={id}
            className={`flex ${sectionDirection} scroll-mt-20 flex-wrap items-center border-b-3 border-moggle xl:flex-nowrap`}>
            <div className='mx-auto my-10 flex w-full flex-col justify-center md:p-0 lg:my-0 lg:w-1/2 '>
                <div className='flex flex-col items-center gap-6 text-center xl:ml-10 xl:items-start xl:text-start'>
                    {h1Title && (
                        <h1
                            className={`${gabriela.className} text-3xl text-lion`}>
                            {h1Title}
                        </h1>
                    )}
                    {title && (
                        <h2
                            className={`${gabriela.className} text-3xl text-lion`}>
                            {title}
                        </h2>
                    )}

                    {h1Subtitle && (
                        <h1
                            className={`${prata.className} mx-2 text-center text-5xl leading-relaxed lg:mx-0 xl:text-left`}>
                            {h1Subtitle}
                        </h1>
                    )}
                    {subtitle && (
                        <h3
                            className={`${prata.className} mx-2 text-center text-5xl leading-relaxed lg:mx-0 xl:text-left`}>
                            {subtitle}
                        </h3>
                    )}
                    {text && (
                        <div className=' flex flex-col gap-4 px-8 text-center text-moggle lg:px-0 xl:text-left'>
                            {text}
                        </div>
                    )}
                    {buttonText && buttonLink && (
                        <form action={buttonLink}>
                            <Button text={buttonText} type='submit' />
                        </form>
                    )}
                    {buttonText && !buttonLink && (
                        <Button
                            text={buttonText}
                            type='button'
                            handleClick={(event) =>
                                handleClick && handleClick(event)
                            }
                        />
                    )}
                </div>
            </div>
            {children}
        </motion.section>
    );
};

export default Section;
