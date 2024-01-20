import Image from 'next/image';
import Link from 'next/link';
import pic from '@/public/images/DSC_0066.webp';
import pic2 from '@/public/images/DSC_0123.webp';
import Section from '../components/Section';
import Aside from '../components/Aside';

import {gabriela } from '../ui/font';
import { CATEGORIES } from '../data/categories';
import { OPINIONS } from '../data/opinions';
import ImageContainer from '../components/ImageContainer';

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
                <ImageContainer
                    imgSrc={pic}
                    imgAlt='Shooting'
                    border='md:border-l-4'
                />
            </Section>

            <Aside text={randomOpinions.text} author={randomOpinions.author} />

            <section className='flex flex-col justify-center border-b-3 border-moggle'>
                <div className='m-6 flex flex-col items-center'>
                    <h2
                        className={`${gabriela.className} mb-2 mt-8 whitespace-nowrap text-center text-4xl text-moggle md:text-5xl`}>
                        Choisir l&apos;instant
                    </h2>
                    <span className='relative -z-10 h-1 w-72 bg-moggle before:absolute before:left-[-5px] before:top-[-5.7px] before:-z-10 before:size-4 before:rotate-45 before:bg-moggle after:absolute after:right-[-5px] after:top-[-5.7px] after:-z-10 after:size-4 after:rotate-45 after:bg-moggle md:w-96'></span>
                </div>
                <div className='my-32 flex flex-wrap items-center justify-center gap-20'>
                    {CATEGORIES.map(({ id, src, alt, href, title }) => {
                        return (
                            <Link
                                className='flex flex-col items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105'
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
                                    className={`${gabriela.className} text-xl font-bold uppercase`}>
                                    {title}
                                </h3>
                            </Link>
                        );
                    })}
                </div>
            </section>
            <Section
                title="Derrière l'objectif"
                subtitle='Une photographe passionnée.'
                buttonText='Me découvrir'
                buttonLink='/contact'
                reverse={true}>
                <ImageContainer
                    imgSrc={pic2}
                    imgAlt='Déborah Tétéa'
                    border={'md:border-r-4'}
                />
            </Section>
        </main>
    );
};
export default Home;
