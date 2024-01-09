'use client';
import React, { useState } from 'react';
import { gabriela } from '../ui/font';
import Button from './Button';

const Form = () => {
    const [booking, setBooking] = useState('');

    return (
        <form
            className={`${gabriela.className} flex  flex-col items-center m-auto w-5/6`}>
            <div className='flex flex-col gap-4 mb-10 lg:m-16 w-full lg:w-2/3'>
                <div className='flex flex-col md:flex-row w-full gap-3'>
                    <div className='flex-col items-start w-full'>
                        <label htmlFor='lastName'>Nom</label>
                        <input
                            className='w-full h-12 py-2 px-3 outline-none border border-lion'
                            type='text'
                            name='lastName'
                            id='lastName'
                            required
                        />
                    </div>
                    <div className='flex-col items-start w-full'>
                        <label htmlFor='firstName'>Prénom</label>
                        <input
                            className='w-full h-12 py-2 px-3 outline-none border border-lion'
                            type='text'
                            name='firstName'
                            id='firstName'
                            required
                        />
                    </div>
                </div>

                <div className='flex flex-col items-start'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        required
                        className='w-full h-12 py-2 px-3 outline-none border border-lion'
                    />
                </div>

                <div>
                    <label htmlFor='object'>Je souhaite </label>
                    <select
                        className='w-full h-12 py-2 px-3 outline-none border border-lion'
                        name='object'
                        id='object'
                        onChange={(e) => setBooking(e.target.value)}>
                        <option value='opinion'>Laisser un avis</option>
                        <option value='book'>Réserver une séance</option>
                        <option value='question'>Poser une question</option>
                    </select>

                    {booking === 'book' && (
                        <div>
                            <select
                                className='w-full max-w-full h-12 py-2 px-3 outline-none border border-lion'
                                name='packageType'
                                id='packageType'
                                required>
                                <optgroup label='Choisir une prestation'>
                                    <option disabled>-- Enfants --</option>
                                    <option value='newborn'>
                                        Séance Nouveau-né - 200€
                                    </option>
                                    <option value='child'>
                                        Séance Grand Enfant - 220€
                                    </option>
                                    <option value='newborn'>
                                        Séance &quot;Smash The Cake&quot; / Bain
                                        de lait - 150€
                                    </option>
                                    <option disabled>-- Grossesse --</option>
                                    <option value='pregnancy'>
                                        Séance Maman Douceur - 250€
                                    </option>
                                    <option value='pregnancy'>
                                        Séance Maman Détente - 320€
                                    </option>
                                    <option value='pregnancy'>
                                        Séance Maman Douceur + Séance Nouveau-né
                                        - 550€
                                    </option>
                                    <option disabled>-- Portrait --</option>
                                    <option value='portrait'>
                                        Portrait seul - 160€
                                    </option>
                                    <option value='portrait'>
                                        Portrait Groupe - 190€
                                    </option>
                                    <option value='' disabled>
                                        -- Événements --
                                    </option>
                                    <option value='weeding'>
                                        Mariage 1 - 550€{' '}
                                    </option>
                                    <option value='weeding'>
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
                        className='w-full py-2 px-3 outline-none border border-lion resize-none'
                        maxLength={500}
                        name='message'
                        id='message'
                        placeholder='Dites moi tout...'
                        rows={5}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <Button text='Envoyer' type='submit' />
                </div>
            </div>
        </form>
    );
};

export default Form;
