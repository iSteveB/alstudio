/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Section from '@/app/components/Section';
import React, { useState } from 'react';
import Aside from '@/app/components/Aside';
import { CATEGORIES } from '@/app/data/categories';

const Services = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex flex-col'>
            <Section
                id='prenancy'
                title={'Grossesse'}
                subtitle={'Éterniser la beauté de la maternité.'}
                reverse={false}
                buttonText='Choisir ma Séance'
                handleClick={() => setIsOpen(!isOpen)}>
                <img
                    src={
                        'https://cdn.pixabay.com/photo/2017/08/01/23/22/pregnant-2568594_1280.jpg'
                    }
                    alt={'Grossesse'}
                    width={720}
                    height={720}
                />
                {isOpen && (
                    <div className='absolute m-8 flex w-1/2 justify-between bg-crema'>
                        <div className=''>
                            <h2>Séance Douceur</h2>
                            <p>1h30</p>
                            <p>Différentes tenues</p>
                            <p>
                                Photos maman solo, en couple, en famille (5 pers
                                max)
                            </p>
                            <p>
                                Livrable: 15 photos retouchées + 15 photos NB 6€
                                par photos supplémentaire
                            </p>
                            <p>250€</p>
                        </div>
                        <div>
                            <h2>Séance Détente</h2>
                            <p>2h30</p>
                            <p>Différentes tenues</p>
                            <p>
                                Photos maman solo, en couple, en famille (5 pers
                                max)
                            </p>
                            <p>
                                Livrable: 30 photos retouchées + 30 photos NB 6€
                                par photos supplémentaire
                            </p>
                            <p>320€</p>
                        </div>
                        <div>
                            <h2>Séance Détente + Séance Nouveau-né</h2>
                            <p>550€</p>
                        </div>
                    </div>
                )}
            </Section>
            <Aside text={'Steve'} author={'Steve'}></Aside>
            <Section
                title={'Naissance'}
                subtitle={'Éterniser la beauté de la maternité.'}
                reverse={true}
                buttonText='Choisir ma Séance'
                buttonLink='Ma'>
                <img
                    src={
                        'https://cdn.pixabay.com/photo/2017/08/01/23/22/pregnant-2568594_1280.jpg'
                    }
                    alt={'Naissance'}
                    width={720}
                    height={720}
                />
            </Section>
            {isOpen && (
                <div className='m-8 flex justify-between'>
                    <div className=''>
                        <h2>Séance Douceur</h2>
                        <p>1h30</p>
                        <p>Différentes tenues</p>
                        <p>
                            Photos maman solo, en couple, en famille (5 pers
                            max)
                        </p>
                        <p>
                            Livrable: 15 photos retouchées + 15 photos NB 6€ par
                            photos supplémentaire
                        </p>
                        <p>250€</p>
                    </div>
                    <div>
                        <h2>Séance Détente</h2>
                        <p>2h30</p>
                        <p>Différentes tenues</p>
                        <p>
                            Photos maman solo, en couple, en famille (5 pers
                            max)
                        </p>
                        <p>
                            Livrable: 30 photos retouchées + 30 photos NB 6€ par
                            photos supplémentaire
                        </p>
                        <p>320€</p>
                    </div>
                    <div>
                        <h2>Séance Détente + Séance Nouveau-né</h2>
                        <p>550€</p>
                    </div>
                </div>
            )}
            <Aside text={'Steve'} author={'Steve'}></Aside>
            <Section
                title={'Événements'}
                subtitle={'Éterniser la beauté de la maternité.'}
                reverse={false}
                buttonText='Choisir ma Séance'
                buttonLink='Ma'>
                <img
                    src={
                        'https://cdn.pixabay.com/photo/2017/08/01/23/22/pregnant-2568594_1280.jpg'
                    }
                    alt={'Événements'}
                    width={720}
                    height={720}
                />
            </Section>
            <Aside text={'Steve'} author={'Steve'}></Aside>
            <Section
                title={'Portrait'}
                subtitle={'Éterniser la beauté de la maternité.'}
                reverse={true}
                buttonText='Choisir ma Séance'
                buttonLink='Ma'>
                <img
                    src={
                        'https://cdn.pixabay.com/photo/2017/08/01/23/22/pregnant-2568594_1280.jpg'
                    }
                    alt={'Portrait'}
                    width={720}
                    height={720}
                />
            </Section>
        </div>
    );
};

export default Services;
