'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pic from '@/public/images/DSC_0066.webp';
import pic2 from '@/public/images/MTXX_MR20231229_184426658.webp';
import Section from '../components/Section';
import Aside from '../components/Aside';

import { gabriela } from '../ui/font';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data/categories';
import ImageSectionContainer from '../components/ImageSectionContainer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main>
            <Section
                title='Shooting & Événements'
                subtitle='Capturez vos moments les plus précieux.'
                buttonText='Réserver une Séance'
                buttonLink='/contact'
                reverse={false}>
                <ImageSectionContainer
                    imgSrc={pic}
                    imgAlt='Shooting'
                    border='md:border-l-4'
                />
            </Section>

            <Aside />

            <section className='flex flex-col justify-center border-b-3 border-moggle'>
                <div className='mt-6 flex flex-col items-center'>
                    <h2
                        className={`${gabriela.className} mb-2 mt-8 whitespace-nowrap text-center text-4xl text-moggle md:text-5xl`}>
                        Choisir l&apos;instant
                    </h2>
                    <span className='relative -z-10 h-1 w-72 bg-moggle before:absolute before:left-[-5px] before:top-[-5.7px] before:-z-10 before:size-4 before:rotate-45 before:bg-moggle after:absolute after:right-[-5px] after:top-[-5.7px] after:-z-10 after:size-4 after:rotate-45 after:bg-moggle md:w-96'></span>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='my-12 flex flex-wrap items-center justify-center gap-20 lg:my-32'>
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
                </motion.div>
            </section>
            <Aside />
            <Section
                title="Derrière l'objectif"
                subtitle={isOpen ? undefined : 'Une photographe passionnée.'}
                buttonText='Me découvrir'
                handleClick={() => setIsOpen(!isOpen)}
                reverse={true}
                text={
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='mx-6 flex flex-col gap-2 xl:ml-0 xl:mr-10'>
                            <p className='text-lg text-moggle'>
                                Hello, moi c&apos;est Déborah, maman de deux
                                petits garçons.
                            </p>
                            <p className='text-lg text-moggle'>
                                La photographie est une véritable passion pour
                                moi, et je suis également très manuelle depuis
                                mon enfance.{' '}
                            </p>
                            <p>
                                Depuis toujours, je suis une personne
                                polyvalente, pratiquant le dessin, la peinture,
                                la couture, et bien d&apos;autres domaines
                                créatifs.
                                <br />
                                Pourquoi la photo? En tant que maman louve,
                                j&apos;apprécie capturer ces moments hors du
                                temps. Quoi de plus beau que de mettre ces
                                instants sur pause, que ce soit lors de
                                cérémonies, de grossesses ou de naissances?{' '}
                                <br /> La photographie va bien au-delà de la
                                simple capture d&apos;images, elle me permet de
                                venir à votre rencontre et de partager un bout
                                de votre parcours de vie.
                            </p>
                            <p className='text-lg text-moggle'>
                                Je serai ravie de vous rencontrer et de vous
                                accompagner dans vos projets. Et n&apos;oubliez
                                pas, la beauté est dans les yeux de celui qui
                                regarde....
                            </p>

                            <p>Déborah.</p>
                        </motion.div>
                    )
                }>
                <ImageSectionContainer
                    imgSrc={pic2}
                    imgAlt='Déborah Tétéa'
                    border={'md:border-r-4'}
                />
            </Section>
        </main>
    );
};
export default Home;
