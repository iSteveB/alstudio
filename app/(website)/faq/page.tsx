'use client';
import { useState } from 'react';
import Accordion from '@/app/components/Accordion';
import { faqQuestions } from '@/app/data/faq';
import Link from 'next/link';

const FAQ = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    return (
        <div className='mt-20 flex flex-col items-center border-b-3 border-moggle px-0 md:px-16 lg:px-32'>
            <h1 className='text-4xl'>F.A.Q.</h1>

            <div className='flex w-2/3 flex-col'>
                {faqQuestions.map((question, index) => {
                    return (
                        <Accordion
                            key={question.id}
                            isOpen={openItem === index}
                            setIsOpen={() =>
                                setOpenItem(openItem === index ? null : index)
                            }
                            title={<h1>{question.title}</h1>}
                            text={<p>{question.text}</p>}
                        />
                    );
                })}
            </div>

            <div className='my-6 flex flex-col items-center'>
                <span>Vous ne trouvez pas de réponse à votre question ?</span>
                <Link href='/contact' className='underline transition-all duration-300 ease-in-out hover:scale-110'>
                    Contactez-nous
                </Link>
            </div>
        </div>
    );
};

export default FAQ;
