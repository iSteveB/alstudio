import Image from 'next/image';
import Button from './components/Button';
import Link from 'next/link';
import pic from '../public/images/DSC_0066.webp';
import pic2 from '../public/images/DSC_0123.webp';
import Section from './components/Section';
import Aside from './components/Aside';

import { prata, gabriela, amiko } from './ui/font';
import { CATEGORIES } from './data/categories';
import { OPINIONS } from './data/opinions';
import ImageContainer from './components/ImageContainer';

const Home = () => {
    const randomOpinions =
        OPINIONS[Math.floor(Math.random() * OPINIONS.length)];

    return (
        <main>
            <Section
                title='Shooting & Événements'
                subtitle='Capturez vos moments les plus précieux.'
                buttonText='Réserver une Séance'
                buttonLink='/contact'
                reverse={false}>
                <ImageContainer imgSrc={pic} imgAlt='Shooting' />
            </Section>

            <Aside text={randomOpinions.text} author={randomOpinions.author} />

            <section className='border-b-3 border-moggle flex flex-col justify-center h-[80vh]'>
                <div className='flex flex-col items-center m-6'>
                    <h2
                        className={`${gabriela.className} text-moggle text-5xl text-center mt-8 mb-2`}>
                        Choisir l&apos;instant
                    </h2>
                    <span className='relative bg-moggle w-96 h-1 before:absolute before:w-4 before:h-4 before:rotate-45 before:left-[-5px] before:top-[-5.7px] before:bg-moggle after:absolute after:w-4 after:h-4 after:rotate-45 after:right-[-5px] after:top-[-5.7px] after:bg-moggle'></span>
                </div>
                <div className='flex gap-20 my-5 justify-center items-center'>
                    {CATEGORIES.map(({ id, src, alt, href, title }) => {
                        return (
                            <Link
                                className='flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out'
                                href={href}
                                key={id}>
                                <div className='border-3 border-moggle'>
                                    <Image
                                        src={src}
                                        alt={alt}
                                        priority
                                        width={263}
                                        height={330}
                                    />
                                </div>
                                <h3
                                    className={`${gabriela.className} uppercase font-bold text-xl`}>
                                    {title}
                                </h3>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className='border-b-3 border-moggle flex flex-row-reverse'>
                <div className='flex flex-col items-center justify-center w-1/2'>
                    <div className='w-5/6 flex flex-col gap-6'>
                        <h2
                            className={`${gabriela.className} text-lion text-2xl`}>
                            Derrière l&apos;objectif
                        </h2>
                        <h3
                            className={`${prata.className} text-5xl leading-relaxed`}>
                            Une photographe passionnée.
                        </h3>
                        <Link href='/contact'>
                            <Button text='Réserver une Séance' type='button' />
                        </Link>
                    </div>
                </div>
                <div className='border-r-4 border-moggle w-1/2'>
                    <Image
                        className='w-full h-full'
                        src={pic2}
                        alt='Shooting'
                    />
                </div>
            </section>
        </main>
    );
};
export default Home;
