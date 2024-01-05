import React from 'react';
import Form from '../components/Form';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
    return (
        <div>
            <div>
                <Section
                    title='Je souhaite'
                    subtitle='Réserver une séance.'
                    text={
                        <>
                            Pour réserver la séance photo de votre choix, vous
                            pouvez remplir le formulaire.
                            <br /> <br />
                            Vous pouvez également me contacter directement via
                            mes réseaux sociaux ci-dessous.
                        </>
                    }
                    reverse={false}>
                    <Form />
                </Section>
            </div>
            <div className='my-16'>
                <Section
                    title='Réseaux Sociaux'
                    subtitle='Suivez-moi sur mes réseaux'
                    reverse
                    text={
                        <>
                            Restez informés de mes événements, offres
                            promotionnelles et jeux concours en me suivant sur
                            mes différents réseaux.
                            <br /> <br />
                            Vous pouvez également me contacter directement sur
                            l&apos;un d&apos;entre eux pour réserver l&apos;une
                            de mes prestations.
                        </>
                    }>
                    <div className='flex flex-col gap-5 m-10 w-1/4'>
                        <Button text='Instagram' type='button' />
                        <Button text='TikTok' type='button' />
                        <Button text='Facebook' type='button' />
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Contact;
