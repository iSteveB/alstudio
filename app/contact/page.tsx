import React from 'react';
import Form from '../components/Form';
import Section from '../components/Section';
import Button from '../components/Button';
import SnapChat from '../ui/svg/SnapChat';

const Contact = () => {
    return (
        <div>
            <Section
                title='Je souhaite'
                subtitle='Réserver une séance.'
                text={
                    <>
                        Pour réserver la séance photo de votre choix, vous
                        pouvez remplir le formulaire.
                        <br /> <br />
                        Vous pouvez également me contacter directement via mes
                        réseaux sociaux ci-dessous.
                    </>
                }
                reverse={false}>
                <Form />
            </Section>
            <section className='flex flex-col gap-5 w-48'>
                <Button text='Snapchat' type={'button'} img={<SnapChat/>}/>
                <Button text='Instagram' type={'button'}/>
                <Button text='TikTok' type={'button'}/>
                <Button text='Facebook' type={'button'}/>
            </section>
        </div>
    );
};

export default Contact;
