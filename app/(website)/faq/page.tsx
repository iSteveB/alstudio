// 'use client';
// import Accordion from '@/app/components/Accordion';
// import React, { useState } from 'react';

// const FAQ = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     return (
//         <div className='mt-20 flex flex-col items-center px-32'>
//             <h1 className='text-4xl'>F.A.Q.</h1>

//             <div className='flex w-2/3 flex-col'>
//                 <Accordion
//                     isOpen={isOpen}
//                     setIsOpen={setIsOpen}
//                     title={<h1>Qu&apos;est-ce qu&apos;une F.A.Q. ?</h1>}
//                     text={
//                         <>
//                             <p>
//                                 F.A.Q. signifie Foire Aux Questions. <br />
//                                 Vous trouverez ici la réponse à vos questions
//                                 les plus fréquentes.
//                             </p>
//                         </>
//                     }
//                 />
//                 <Accordion
//                     isOpen={isOpen}
//                     setIsOpen={setIsOpen}
//                     title={<h1>Comment puis-je vous contacter ?</h1>}
//                     text={
//                         <>
//                             <p>
//                                 Vous pouvez nous contacter par mail à l&apos;adresse suivante : <a href='mailto:contact@alstudiophotos.com'>contact@alstudiophotos</a>
//                             </p>
//                         </>
//                     }
//                 />



//             </div>
//         </div>
//     );
// };

// export default FAQ;

import React from 'react';

const FAQ = () => {
    return (
        <div className='flex h-full items-center justify-center border-b-3 border-moggle text-5xl'>
            À venir...
        </div>
    );
};

export default FAQ;