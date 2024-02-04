'use client';
import { useReducer } from 'react';
import { State } from '@/types/reducer';
import { isOpenReducer } from '@/app/reducers/isOpenReducer';
import { motion } from 'framer-motion';

import Section from '@/app/components/Section';
import Aside from '@/app/components/Aside';
import Button from '@/app/components/Button';
import PhotoCard from '@/app/components/PhotoCard';

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
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='grid grid-flow-col-dense grid-rows-3 gap-x-3 gap-y-4 text-left lg:gap-x-10 lg:gap-y-8'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Grossesse Douceur
                                </h3>
                                <details className='relative z-30 hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>

                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                        <li>6€ par photo supplémentaire.</li>
                                        <li>
                                            Seule, en couple ou en famille (5
                                            pers max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                        <li>
                                            Maquillage possible sur place - 50€
                                        </li>
                                    </motion.ul>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Maman Détente
                                </h3>
                                <details className='relative hover:cursor-pointer'>
                                    <summary>
                                        2h30 | 30 photos + 30 photos NB
                                    </summary>
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                        <li>6€ par photo supplémentaire.</li>
                                        <li>
                                            Seule, en couple ou en famille (5
                                            pers max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                        <li>
                                            Maquillage possible sur place - 50€
                                        </li>
                                    </motion.ul>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Maman Détente + <br /> Séance
                                    Nouveau-né
                                </h3>
                            </div>
                            <form action='/contact'>
                                <Button text={'250 €'} type={'submit'} />
                            </form>

                            <form action='/contact'>
                                <Button text={'320 €'} type={'submit'} />
                            </form>

                            <form action='/contact'>
                                <Button text={'550 €'} type={'submit'} />
                            </form>
                        </motion.div>
                    )
                }
                reverse={false}
                buttonText={
                    state.toggleCategoryA ? 'Retour' : 'Choisir ma Séance'
                }
                handleClick={() => dispatch({ type: 'PREGNANCY' })}>
                <PhotoCard
                    imgSrc={pregnancy}
                    imgAlt={'Grossesse'}
                    border={'md:border-l-4'}
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
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='grid grid-flow-col-dense grid-rows-3 gap-x-3 gap-y-2 text-left lg:gap-x-10 lg:gap-y-4'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Nouveau-né
                                </h3>
                                <details className='relative z-40 hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                        <li>6€ par photos supplémentaire.</li>
                                        <li>
                                            Seul(e), fratrie ou en famille (5
                                            pers max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </motion.ul>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Grand Enfant
                                </h3>
                                <details className='relative z-30 hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                        <li>6€ par photo supplémentaire.</li>
                                        <li>
                                            Seul(e), fratrie ou en famille (5
                                            pers max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </motion.ul>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance &#34;Smash The Cake&#34; / <br />
                                    Bain de lait
                                </h3>
                                <details className='relative hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 10 photos + 10 photos NB
                                    </summary>
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                        <li>6€ par photo supplémentaire.</li>
                                        <li>Seul(e).</li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </motion.ul>
                                </details>
                            </div>
                            <form action='/contact'>
                                <Button text={'200 €'} type={'submit'} />
                            </form>

                            <form action='/contact'>
                                <Button text={'220 €'} type={'submit'} />
                            </form>

                            <form action='/contact'>
                                <Button text={'150 €'} type={'submit'} />
                            </form>
                        </motion.div>
                    )
                }
                reverse={true}
                buttonText={
                    state.toggleCategoryB ? 'Retour' : 'Choisir ma Séance'
                }
                handleClick={() => dispatch({ type: 'CHILD' })}>
                <PhotoCard
                    imgSrc={child}
                    imgAlt={'Enfance'}
                    border={'md:border-r-4'}
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
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='grid grid-flow-col-dense grid-cols-1 grid-rows-2 gap-x-5 gap-y-4 text-left lg:gap-x-24 lg:gap-y-8'>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Portrait Solo
                                </h3>
                                <details className='relative z-30 hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                        <li>6€ par photos supplémentaire.</li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </motion.ul>
                                </details>
                            </div>
                            <div>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Portrait Groupe
                                </h3>
                                <details className='relative hover:cursor-pointer'>
                                    <summary>
                                        1h30 | 15 photos + 15 photos NB
                                    </summary>
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                        <li>6€ par photos supplémentaire.</li>
                                        <li>
                                            En couple, famille ou amis (5 pers
                                            max).
                                        </li>
                                        <li>
                                            Différentes tenues peuvent être
                                            proposées lors de la séance.
                                        </li>
                                    </motion.ul>
                                </details>
                            </div>

                            <form action='/contact'>
                                <Button text={'160 €'} type={'submit'} />
                            </form>

                            <form action='/contact'>
                                <Button text={'190 €'} type={'submit'} />
                            </form>
                        </motion.div>
                    )
                }
                reverse={false}
                buttonText={
                    state.toggleCategoryC ? 'Retour' : 'Choisir ma Séance'
                }
                handleClick={() => dispatch({ type: 'PORTRAIT' })}>
                <PhotoCard
                    imgSrc={portrait}
                    imgAlt={'Portrait'}
                    border={'md:border-l-4'}
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
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col gap-14 text-left'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg font-extrabold'>
                                    Mariage
                                </h3>
                                <div className='grid grid-flow-col-dense grid-cols-1 grid-rows-2 gap-x-5 gap-y-4 lg:gap-x-24 lg:gap-y-8'>
                                    <p>
                                        De la préparation de la Mariée au vin
                                        d&apos;honneur.
                                    </p>

                                    <p>
                                        De la préparation de la Mariée à la
                                        pièce montée.
                                    </p>

                                    <form action='/contact'>
                                        <Button
                                            text={'550 €'}
                                            type={'submit'}
                                        />
                                    </form>
                                    <form action='/contact'>
                                        <Button
                                            text={'1 000 €'}
                                            type={'submit'}
                                        />
                                    </form>
                                </div>
                            </div>

                            <div className='flex w-full flex-col gap-4 text-left'>
                                <h3 className='text-lg font-extrabold'>
                                    Séance Baptême & Communion
                                </h3>

                                <div className='grid grid-flow-col-dense grid-cols-1 grid-rows-2 items-center gap-x-5 gap-y-2 lg:gap-x-16 lg:gap-y-4'>
                                    <div>
                                        <h4>Forfait 1</h4>

                                        <details className='relative z-40 hover:cursor-pointer'>
                                            <summary>
                                                Cérémonie religieuse ou civil.
                                                <br />
                                                1h00 | 50 photos + 50 photos NB
                                            </summary>
                                            <motion.ul
                                                initial={{ opacity: 0, y: -10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                                <li>
                                                    6€ par photos
                                                    supplémentaire.
                                                </li>
                                                <li>
                                                    60€ l’heure supplémentaire
                                                    au delà de 2h.
                                                </li>
                                                <li>
                                                    Des frais de déplacement
                                                    s’appliquent au delà de 15
                                                    km.
                                                </li>
                                            </motion.ul>
                                        </details>
                                    </div>

                                    <div>
                                        <h4>Forfait 2</h4>
                                        <details className='relative hover:cursor-pointer'>
                                            <summary>
                                                Cérémonie religieuse ou civil.
                                                <br />
                                                1h30 | 100 photos + 100 photos
                                                NB
                                            </summary>
                                            <motion.ul
                                                initial={{ opacity: 0, y: -10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className='absolute min-w-0 border-2 border-moggle bg-crema p-3 text-sm sm:min-w-96'>
                                                <li>
                                                    6€ par photos
                                                    supplémentaire.
                                                </li>
                                                <li>
                                                    60€ l’heure supplémentaire
                                                    au delà de 2h.
                                                </li>
                                                <li>
                                                    Des frais de déplacement
                                                    s’appliquent au delà de 15
                                                    km.
                                                </li>
                                            </motion.ul>
                                        </details>
                                    </div>
                                    <form action='/contact'>
                                        <Button
                                            text={'160 €'}
                                            type={'submit'}
                                        />
                                    </form>

                                    <form action='/contact'>
                                        <Button
                                            text={'250 €'}
                                            type={'submit'}
                                        />
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
                reverse={true}
                buttonText={
                    state.toggleCategoryD ? 'Retour' : 'Choisir ma Séance'
                }
                handleClick={() => dispatch({ type: 'EVENT' })}>
                <PhotoCard
                    imgSrc={event}
                    imgAlt={'Événements'}
                    border={'md:border-r-4'}
                />
            </Section>
        </div>
    );
};

export default Services;
