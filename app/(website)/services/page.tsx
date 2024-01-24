/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Section from '@/app/components/Section';
import React, { useState } from 'react';
import Aside from '@/app/components/Aside';

import Button from '@/app/components/Button';
import Link from 'next/link';

import pregnancy from '@/public/images/pregnancy.jpg';

const Services = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex flex-col'>
            <Section
                id='prenancy'
                title={'Grossesse'}
                subtitle={
                    isOpen ? undefined : 'Éterniser la beauté de la maternité.'
                }
                text={
                    isOpen && (
                        <div className='grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-16 gap-y-8'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Grossesse Douceur
                                </h3>
                                <p>1h30 | 15 photos + 15 photos NB</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Grossesse
                                </h3>
                                <p>2h30 | 30 photos + 30 photos NB</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Maman Détente + <br /> Séance
                                    Nouveau-né
                                </h3>
                            </div>
                            <Link href='/contact'>
                                <Button text={'250 €'} type={'button'} />
                            </Link>

                            <Link href='/contact'>
                                <Button text={'320 €'} type={'button'} />
                            </Link>

                            <Link href='/contact'>
                                <Button text={'550 €'} type={'button'} />
                            </Link>
                        </div>
                    )
                }
                reverse={false}
                buttonText={isOpen ? 'Retour' : 'Choisir ma Séance'}
                handleClick={() => setIsOpen(!isOpen)}>
                    <Image src={pregnancy} alt={'Grossesse'} width={720} height={720} />
            </Section>

            <Aside />

            <Section
                id='child'
                title={'Enfance'}
                subtitle={
                    isOpen
                        ? undefined
                        : 'Immortaliser la douceur et l’innocence.'
                }
                text={
                    isOpen && (
                        <div className='grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-16 gap-y-2'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Nouveau-né
                                </h3>
                                <p>1h30 | 15 photos + 15 photos NB</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Grand Enfant
                                </h3>
                                <p>1h30 | 15 photos + 15 photos NB</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Smash The Cake / <br />
                                    Bain de lait
                                </h3>
                                <p>1h30 | 10 photos + 10 photos NB</p>
                            </div>
                            <Link href='/contact'>
                                <Button text={'200 €'} type={'button'} />
                            </Link>

                            <Link href='/contact'>
                                <Button text={'220 €'} type={'button'} />
                            </Link>

                            <Link href='/contact'>
                                <Button text={'150 €'} type={'button'} />
                            </Link>
                        </div>
                    )
                }
                reverse={true}
                buttonText={isOpen ? 'Retour' : 'Choisir ma Séance'}
                handleClick={() => setIsOpen(!isOpen)}>
                <img
                    src={
                        'https://cdn.pixabay.com/photo/2017/08/01/23/22/pregnant-2568594_1280.jpg'
                    }
                    alt={'Grossesse'}
                    width={720}
                    height={720}
                />
            </Section>

            <Aside />

            <Section
                id='portrait'
                title={'Portrait'}
                subtitle={
                    isOpen
                        ? undefined
                        : 'Révéler votre âme et votre personnalité à travers chaque portrait.'
                }
                text={
                    isOpen && (
                        <div className='grid grid-flow-col grid-cols-2 grid-rows-2 gap-x-16 gap-y-10'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Portrait Solo
                                </h3>
                                <p>1h30 | 15 photos + 15 photos NB</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Grand Enfant
                                </h3>
                                <p>1h30 | 15 photos + 15 photos NB</p>
                            </div>

                            <Link href='/contact'>
                                <Button text={'160 €'} type={'button'} />
                            </Link>

                            <Link href='/contact'>
                                <Button text={'190 €'} type={'button'} />
                            </Link>
                        </div>
                    )
                }
                reverse={false}
                buttonText={isOpen ? 'Retour' : 'Choisir ma Séance'}
                handleClick={() => setIsOpen(!isOpen)}>
                <img
                    src={
                        'https://cdn.pixabay.com/photo/2017/08/01/23/22/pregnant-2568594_1280.jpg'
                    }
                    alt={'Grossesse'}
                    width={720}
                    height={720}
                />
            </Section>

            <Aside />

            <Section
                id='event'
                title={'Événement'}
                subtitle={
                    isOpen ? undefined : 'Capturez la magie d’instants uniques.'
                }
                text={
                    isOpen && (
                        <div className='flex flex-col gap-8'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Mariage
                                </h3>

                                <div className='grid grid-cols-2 grid-rows-2 items-center gap-x-10 gap-y-6'>
                                    <p>
                                        De la préparation au vin d&apos;honneur
                                    </p>
                                    <Link href='/contact'>
                                        <Button
                                            text={'550 €'}
                                            type={'button'}
                                        />
                                    </Link>

                                    <p>De la préparation à la pièce montée</p>
                                    <Link href='/contact'>
                                        <Button
                                            text={'1 000 €'}
                                            type={'button'}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Baptême & Communion
                                </h3>
                                <div className='flex flex-col gap-6'>
                                    <div className='grid grid-cols-2 items-center gap-x-10 gap-y-6'>
                                        <div>
                                            <h4>Forfait 1</h4>
                                            <p>
                                                Cérémonie religieuse ou civil{' '}
                                                <br /> 1h00 | 50 photos + 50
                                                photos NB
                                            </p>
                                        </div>

                                        <Link href='/contact'>
                                            <Button
                                                text={'160 €'}
                                                type={'button'}
                                            />
                                        </Link>
                                    </div>

                                    <div className='grid grid-cols-2 items-center gap-x-10 gap-y-6'>
                                        <div>
                                            <h4>Forfait 2</h4>
                                            <p>
                                                Cérémonie religieuse ou civil{' '}
                                                <br /> 1h30 | 100 photos + 100
                                                photos NB
                                            </p>
                                        </div>
                                        <Link href='/contact'>
                                            <Button
                                                text={'250 €'}
                                                type={'button'}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                reverse={true}
                buttonText={isOpen ? 'Retour' : 'Choisir ma Séance'}
                handleClick={() => setIsOpen(!isOpen)}>
                <img
                    src={
                        'https://cdn.pixabay.com/photo/2017/08/01/23/22/pregnant-2568594_1280.jpg'
                    }
                    alt={'Grossesse'}
                    width={720}
                    height={720}
                />
            </Section>
        </div>
    );
};

export default Services;
