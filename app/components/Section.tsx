import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Button from './Button';

import { gabriela, prata } from '../ui/font';
import pic from '../../public/images/DSC_0066.webp';


interface SectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    reverse: boolean;
    imgSrc: StaticImageData;
    imgAlt: string;
}

const Section: React.FC<SectionProps> = ({title, subtitle, buttonText, buttonLink, reverse, imgSrc, imgAlt}) => {
    const sectionDirection = reverse ? 'flex-row-reverse' : 'flex-row';
    return (
        <section className={`flex ${sectionDirection} border-b-3 border-moggle`}>
                <div className='flex flex-col items-center justify-center w-1/2'>
                    <div className='w-5/6 flex flex-col gap-6'>
                        <h2
                            className={`${gabriela.className} text-lion text-2xl`}>
                            {title}
                        </h2>
                        <h3
                            className={`${prata.className} text-5xl leading-relaxed`}>
                            {subtitle}
                        </h3>
                        <Link href={buttonLink}>
                            <Button text={buttonText} />
                        </Link>
                    </div>
                </div>
                <div className='border-l-4 border-moggle w-1/2'>
                    <Image className='w-full h-full' src={imgSrc} alt={imgAlt} priority/>
                </div>
            </section>
    );
};

export default Section;