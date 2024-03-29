'use client';
import React, { useState } from 'react';
import { gabriela } from '../ui/font';
import Button from './Button';
import toast from 'react-hot-toast';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    object: string;
    packageType: string;
    message: string;
}

const Form = () => {
    const [booking, setBooking] = useState('book');
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        object: 'book',
        packageType: 'newborn',
        message: '',
    });

    const sanitizeState = (inputState: FormData): FormData => {
        const sanitizedState: FormData = { ...inputState };
    
        const sanitizeField = (field: keyof FormData) => {
            sanitizedState[field] = sanitizedState[field].trim();
    
            if (field === 'email' && !isValidEmail(sanitizedState[field])) {
                toast.error('Veuillez entrer une adresse mail valide.');
                throw new Error('Invalid email');
            }

            if (field === 'message' && sanitizedState[field].length < 10) {
                toast.error('Votre message doit contenir au moins 10 caractères.');
                throw new Error('Message too short');
            }

            if (field === 'packageType' && sanitizedState[field] === '') {
                toast.error('Veuillez sélectionner une prestation.');
                throw new Error('No package selected');
            }

            if (field === 'object' && sanitizedState[field] === '') {
                toast.error('Veuillez spécifier votre souhait.');
                throw new Error('No object selected');
            }
            
            if (field === 'lastName' && !isValidName(sanitizedState[field])) {
                toast.error('Veuillez entrer un nom valide.');
                throw new Error('Invalid last name');
            }
            
            if (field === 'firstName' && !isValidName(sanitizedState[field])) {
                toast.error('Veuillez entrer un prénom valide.');
                throw new Error('Invalid first name');
            }
        };
    
        Object.keys(sanitizedState).forEach((field) => sanitizeField(field as keyof FormData));
    
        return sanitizedState;
    };

    const isValidName = (name: string): boolean => {
        return /^[a-zA-Z\-]+$/
        .test(name);
    };
    const isValidEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleFormData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sanitizeState(data)),
            });

            if (response.ok) {
                toast.success(
                    `Merci ${data.firstName.trim()} ! Votre message a bien été envoyé ! À très vite !`,
                    { duration: 4000 }
                );

                setData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    object: 'book',
                    packageType: 'newborn',
                    message: '',
                });
                console.log('Message envoyé !');
            }
        } catch (error) {
            console.error({error});
            toast.error('Une erreur est survenue, veuillez réessayer.');
        }
    };

    return (
        <form
            id='contact-form'
            name='contact-form'
            onSubmit={handleFormData}
            className={`${gabriela.className} m-auto flex w-5/6 flex-col items-center`}>
            <div className='mb-10 flex w-full flex-col gap-4 lg:mx-16 lg:my-6 lg:w-2/3'>
                <div className='flex w-full flex-col gap-3 md:flex-row'>
                    <div className='w-full flex-col items-start'>
                        <label htmlFor='lastName' className='after:content-["*"]'>Nom</label>
                        <input
                            className='h-12 w-full border border-lion px-3 py-2 outline-none'
                            type='text'
                            name='lastName'
                            id='lastName'
                            
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    lastName: e.target.value,
                                })
                            }
                            value={data.lastName}
                        />
                    </div>
                    <div className='w-full flex-col items-start'>
                        <label htmlFor='firstName' className='after:content-["*"]'>Prénom</label>
                        <input
                            className='h-12 w-full border border-lion px-3 py-2 outline-none'
                            type='text'
                            name='firstName'
                            id='firstName'
                            
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    firstName: e.target.value,
                                })
                            }
                            value={data.firstName}
                        />
                    </div>
                </div>

                <div className='flex flex-col items-start'>
                    <label htmlFor='email' className='after:content-["*"]'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        
                        onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                        }
                        value={data.email}
                        className='h-12 w-full border border-lion px-3 py-2 outline-none'
                    />
                </div>

                <div>
                    <label htmlFor='object' className='after:content-["*"]'>Je souhaite </label>
                    <select
                        className='h-12 w-full border border-lion px-3 py-2 outline-none'
                        name='object'
                        id='object'
                        onChange={(e) => {
                            setBooking(e.target.value);
                            setData({ ...data, object: e.target.value });
                        }}>
                        <option value='book'>Réserver une séance</option>
                        <option value='opinion'>Laisser un avis</option>
                        <option value='question'>Poser une question</option>
                    </select>

                    {booking === 'book' && (
                        <div>
                            <select
                                className='h-12 w-full max-w-full border border-lion px-3 py-2 outline-none after:content-["*"]'
                                name='packageType'
                                id='packageType'
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        packageType: e.target.value,
                                    })
                                }
                                >
                                <optgroup label='Choisir une prestation'>
                                    <option disabled>-- Enfants --</option>
                                    <option value='newborn'>
                                        Séance Nouveau-né - 200€
                                    </option>
                                    <option value='child'>
                                        Séance Grand Enfant - 220€
                                    </option>
                                    <option value='newborn_special'>
                                        Séance &quot;Smash The Cake&quot; / Bain
                                        de lait - 150€
                                    </option>
                                    <option disabled>-- Grossesse --</option>
                                    <option value='pregnancy_sweet'>
                                        Séance Grossesse Douceur - 250€
                                    </option>
                                    <option value='pregnancy_relax'>
                                        Séance Maman Détente - 320€
                                    </option>
                                    <option value='pregnancy_and_newborn'>
                                        Séance Grossesse Douceur + Séance
                                        Nouveau-né - 550€
                                    </option>
                                    <option disabled>-- Portrait --</option>
                                    <option value='portrait_alone'>
                                        Portrait seul - 160€
                                    </option>
                                    <option value='portrait_group'>
                                        Portrait Groupe - 190€
                                    </option>
                                    <option value='' disabled>
                                        -- Événements --
                                    </option>
                                    <option value='weeding1'>
                                        Mariage 1 - 550€{' '}
                                    </option>
                                    <option value='weeding2'>
                                        Mariage 2 - 1000€{' '}
                                    </option>
                                    <option value='baptem1'>
                                        Baptêmes / Communion 1 - 160€{' '}
                                    </option>
                                    <option value='baptem2'>
                                        Baptêmes / Communion 2 - 250€{' '}
                                    </option>
                                    <option value='' disabled>
                                        -- Autres --
                                    </option>
                                    <option value='others'>
                                        Décrivez votre souhait ci-dessous
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        className='w-full resize-none border border-lion px-3 py-2 outline-none'
                        maxLength={500}
                        name='message'
                        id='message'
                        placeholder='Dites moi tout...'
                        onChange={(e) =>
                            setData({ ...data, message: e.target.value })
                        }
                        value={data.message}
                        rows={5}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        name='consent'
                        id='consent'
                        required
                    />
                    <label htmlFor='consent'>
                    En cochant cette case, j&apos;accepte que mes données soient conservées et réutilisées afin de me contacter, et ce, uniquement dans le cadre de ma demande.
                    </label>
                </div>
                <div className='flex items-center justify-center'>
                    <Button text='Envoyer' type='submit' />
                </div>
            </div>
        </form>
    );
};

export default Form;
