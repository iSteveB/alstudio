import { defineType } from 'sanity';

export default defineType({
    name: 'picture',
    type: 'document',
    title: 'Picture',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'This is used to generate the URL for this picture.',
            options: {
                source: (doc, context) =>  doc._id,
                maxLength: 96,
            },
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            description: 'Upload a high resolution image, in WEBP format.',
            options: {
                hotspot: true,
                storeOriginalFilename: true,
                accept: 'image/*',
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessiblity.',
                },
                {
                    type: 'reference',
                    name: 'tag',
                    title: 'Tag',
                    to: [{ type: 'tag' }],
                },
            ],
        },
    ],
});
