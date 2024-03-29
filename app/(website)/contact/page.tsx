'use client';
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
                h1Subtitle='Réserver une séance photo.'
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
                            <form
                                action='https://instagram.com/alstudiophoto?igshid=NGVhN2U2NjQ0Yg=='
                                target='_blank'>
                                <Button
                            
                                    text='Instagram'
                                    type='submit'
                                    img={<Instagram color={2} />}
                                />
                            </form>
                            <form
                                action='https://www.tiktok.com/@a.l.studiophotos?_t=8gS9kIGYT8C&_r=1'
                                target='_blank'>
                                <Button
                                    text='TikTok'
                                    type='submit'
                                    img={<Tiktok color={2} />}
                                />
                            </form>
                            <form
                                action='https://www.facebook.com/rehaussementdecilsbydeborah'
                                target='_blank'>
                                <Button
                                    text='Facebook'
                                    type='submit'
                                    img={<Facebook color={2} />}
                                />
                            </form>
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
