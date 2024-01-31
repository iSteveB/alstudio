'use client'
import React from 'react';
import Form from '../../components/Form';
import Section from '../../components/Section';
import Button from '../../components/Button';
import { Instagram, Tiktok, Facebook } from '../../ui/svg/SocialNetworkIcons';

const Contact = () => {
    return (
        <div>
            <Section
                title='Je souhaite'
                subtitle='Réservez une séance.'
                text={
                    <>
                        <p>
                            Pour <strong>réserver la séance photo</strong> de
                            votre choix, vous pouvez remplir le formulaire.
                        </p>
                        <p>
                            Vous pouvez également me contacter directement via
                            mes réseaux sociaux ci-dessous.
                        </p>
                        <p>
                            Restez informés de mes événements, offres
                            promotionnelles et jeux concours en me suivant sur
                            mes différents réseaux.
                        </p>
                        <div className='mt-5 flex w-full flex-wrap justify-center gap-5 md:mx-auto lg:justify-start'>
                            <Button
                                text='Instagram'
                                type='button'
                                img={<Instagram color='#F4EBE2' />}
                            />
                            <Button
                                text='TikTok'
                                type='button'
                                img={<Tiktok color='#F4EBE2' />}
                            />
                            <Button
                                text='Facebook'
                                type='button'
                                img={<Facebook color='#F4EBE2' />}
                            />
                        </div>
                    </>
                }
                reverse={false}>
                <Form />
            </Section>
        </div>
    );
};

export default Contact;
