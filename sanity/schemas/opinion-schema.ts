// {
//     id: uuidv4(),
//     text: 'Nous avons partagé des moments forts et uniques en famille. Je me suis sentie mise à l’honneur avec le shooting de grossesse.',
//     author: 'Rayssa B.',
// },

import { defineType } from 'sanity';

export default defineType({
    name: 'opinion',
    title: 'Opinion',
    type: 'document',
    fields: [
        {
            name: 'author',
            title: 'Auteur',
            type: 'string',
        },
        {
            title: 'Avis',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
});
