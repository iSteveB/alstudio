/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Section from '@/app/components/Section';
import React, { useReducer } from 'react';
import { State } from '@/types/reducer';
import Aside from '@/app/components/Aside';
import { isOpenReducer } from '@/app/reducers/isOpenReducer';
import Button from '@/app/components/Button';
import Link from 'next/link';

import pregnancy from '@/public/images/DSC_0620.webp';
import child from '@/public/images/MTXX_MR20231128_212011762.webp';
import portrait from '@/public/images/MTXX_MR20231201_010133263.webp';
import event from '@/public/images/1730877.webp';

const Services = () => {
    const [state, dispatch] = useReducer(isOpenReducer, {
        toggleCategoryA: false,
        toggleCategoryB: false,
        toggleCategoryC: false,
        toggleCategoryD: false,
    } as State);
    return (
        <div className='-z-10 flex flex-col'>
            <Section
                id='prenancy'
                title={'Grossesse'}
                subtitle={
                    state.toggleCategoryA
                        ? undefined
                        : 'Éternisez la beauté de la maternité.'
                }
                text={
                    state.toggleCategoryA && (
                        <div className='grid grid-flow-col-dense grid-rows-3 gap-x-3 gap-y-4 lg:gap-x-10 lg:gap-y-8'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Grossesse Douceur
                                </h3>
                                <details className='z-30 hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <ul className='absolute border-2 border-moggle bg-crema p-3 text-sm'>
                                        <li>6€ par photo supplémentaire.</li>
                                        <li>
                                            Seule, en couple ou en famille (5
                                            pers max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </ul>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Maman Détente
                                </h3>
                                <details className='hover:cursor-pointer'>
                                    <summary>
                                        2h30 | 30 photos + 30 photos NB
                                    </summary>
                                    <ul className='absolute border-2 border-moggle bg-crema p-3'>
                                        <li>6€ par photo supplémentaire.</li>
                                        <li>
                                            Seule, en couple ou en famille (5
                                            pers max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </ul>
                                </details>
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
                buttonText={
                    state.toggleCategoryA ? 'Retour' : 'Choisir ma Séance'
                }
                handleClick={() => dispatch({ type: 'PREGNANCY' })}>
                <Image
                    src={pregnancy}
                    alt={'Grossesse'}
                    objectFit='cover'
                    className='hidden h-auto max-h-[70vh] max-w-[50%] lg:block'
                />
            </Section>

            <Aside />

            <Section
                id='child'
                title={'Enfance'}
                subtitle={
                    state.toggleCategoryB
                        ? undefined
                        : 'Immortalisez la douceur et l’innocence.'
                }
                text={
                    state.toggleCategoryB && (
                        <div className='grid grid-flow-col-dense grid-rows-3 gap-x-3 gap-y-2 lg:gap-x-10 lg:gap-y-4'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Nouveau-né
                                </h3>
                                <details className='z-30 hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <ul className='absolute border-2 border-moggle bg-crema p-3'>
                                        <li>6€ par photos supplémentaire.</li>
                                        <li>
                                            Seul(e), fratrie ou en famille (5
                                            pers max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </ul>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Grand Enfant
                                </h3>
                                <details className='hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <ul className='absolute border-2 border-moggle bg-crema p-3'>
                                        <li>6€ par photo supplémentaire.</li>
                                        <li>
                                            Seul(e), fratrie ou en famille (5
                                            pers max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </ul>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance &#34;Smash The Cake&#34; / <br />
                                    Bain de lait
                                </h3>
                                <details className='hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 10 photos + 10 photos NB
                                    </summary>
                                    <ul className='absolute border-2 border-moggle bg-crema p-3'>
                                        <li>6€ par photo supplémentaire.</li>
                                        <li>Seul(e).</li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </ul>
                                </details>
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
                buttonText={
                    state.toggleCategoryB ? 'Retour' : 'Choisir ma Séance'
                }
                handleClick={() => dispatch({ type: 'CHILD' })}>
                <Image
                    src={child}
                    alt={'Enfance'}
                    objectFit='cover'
                    className='hidden h-full max-w-[52%] lg:block'
                />
            </Section>

            <Aside />

            <Section
                id='portrait'
                title={'Portrait'}
                subtitle={
                    state.toggleCategoryC
                        ? undefined
                        : 'Révélez votre âme et votre personnalité à travers chaque portrait.'
                }
                text={
                    state.toggleCategoryC && (
                        <div className='grid grid-flow-col-dense grid-cols-1 grid-rows-2 gap-x-5 gap-y-4 lg:gap-x-24 lg:gap-y-8'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Portrait Solo
                                </h3>
                                <details className='z-30 hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <div className='absolute border-2 border-moggle bg-crema p-3'>
                                        <p>6€ par photos supplémentaire.</p>
                                        <p>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </p>
                                    </div>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Portrait Groupe
                                </h3>
                                <details className='hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <ul className='absolute border-2 border-moggle bg-crema p-3'>
                                        <li>6€ par photos supplémentaire.</li>
                                        <li>
                                            En couple, famille ou amis (5 pers
                                            max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </ul>
                                </details>
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
                buttonText={
                    state.toggleCategoryC ? 'Retour' : 'Choisir ma Séance'
                }
                handleClick={() => dispatch({ type: 'PORTRAIT' })}>
                <Image
                    src={portrait}
                    alt={'Portrait'}
                    className='hidden max-h-[70vh] max-w-[50%] object-cover lg:block'
                />
            </Section>

            <Aside />

            <Section
                id='event'
                title={'Événement'}
                subtitle={
                    state.toggleCategoryD
                        ? undefined
                        : 'Capturez la magie d’instants uniques.'
                }
                text={
                    state.toggleCategoryD && (
                        <div className='flex flex-col gap-8'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Mariage
                                </h3>

                                <div className='grid grid-cols-2 grid-rows-2 items-center gap-x-0 gap-y-4 lg:gap-x-16 lg:gap-y-8'>
                                    <p>
                                        De la préparation de la Mariée au vin
                                        d&apos;honneur.
                                    </p>
                                    <Link href='/contact'>
                                        <Button
                                            text={'550 €'}
                                            type={'button'}
                                        />
                                    </Link>

                                    <p>
                                        De la préparation de la Mariée à la
                                        pièce montée.
                                    </p>
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

                                <div className='grid grid-cols-2 grid-rows-2 items-center gap-y-2 lg:gap-x-16 lg:gap-y-4'>
                                    <div>
                                        <h4>Forfait 1</h4>

                                        <details className='z-20 hover:cursor-pointer'>
                                            <summary>
                                                Cérémonie religieuse ou civil.
                                                <br />
                                                1h00 | 50 photos + 50 photos NB
                                            </summary>
                                            <div className='absolute border-2 border-moggle bg-crema p-3'>
                                                <ul>
                                                    <li>
                                                        6€ par photos
                                                        supplémentaire.
                                                    </li>
                                                    <li>
                                                        60€ l’heure
                                                        supplémentaire au delà
                                                        de 2h.
                                                    </li>
                                                    <li>
                                                        Des frais de déplacement
                                                        s’appliquent au delà de
                                                        15 km.
                                                    </li>
                                                </ul>
                                            </div>
                                        </details>
                                    </div>
                                    <Link href='/contact'>
                                        <Button
                                            text={'160 €'}
                                            type={'button'}
                                        />
                                    </Link>

                                    <div>
                                        <h4>Forfait 2</h4>
                                        <details className='hover:cursor-pointer'>
                                            <summary>
                                                Cérémonie religieuse ou civil.
                                                <br />
                                                1h30 | 100 photos + 100 photos
                                                NB
                                            </summary>
                                            <div className='absolute border-2 border-moggle bg-crema p-3'>
                                            <ul>
                                                    <li>
                                                        6€ par photos
                                                        supplémentaire.
                                                    </li>
                                                    <li>
                                                        60€ l’heure
                                                        supplémentaire au delà
                                                        de 2h.
                                                    </li>
                                                    <li>
                                                        Des frais de déplacement
                                                        s’appliquent au delà de
                                                        15 km.
                                                    </li>
                                                </ul>
                                            </div>
                                        </details>
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
                    )
                }
                reverse={true}
                buttonText={
                    state.toggleCategoryD ? 'Retour' : 'Choisir ma Séance'
                }
                handleClick={() => dispatch({ type: 'EVENT' })}>
                <Image
                    src={event}
                    alt={'Événements'}
                    className='hidden max-h-[100vh] max-w-[50%] object-cover lg:block'
                />
            </Section>
        </div>
    );
};

export default Services;
