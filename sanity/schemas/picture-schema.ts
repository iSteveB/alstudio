import { defineType } from 'sanity';

export default defineType({
    name: 'picture',
    type: 'document',
    title: 'Picture',
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'This is used to generate the URL for this picture.',
            validation: (Rule) => Rule.required(),
            options: {
                source: (doc, context) => doc._id,
                maxLength: 96,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
            validation: (Rule) => Rule.required(),
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessiblity.',
                    validation: (Rule) => Rule.required(),
                },
                {
                    type: 'reference',
                    name: 'tag',
                    title: 'Tag',
                    to: [{ type: 'tag' }],
                    validation: (Rule) => Rule.required(),
                },
            ],
        },
    ],
});
