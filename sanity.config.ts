import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {schemas} from './sanity/schemas';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
    name: 'default',
    title: 'AL Studio',

    projectId: 't5ng0i6e',
    dataset: 'production',
    apiVersion: '2024-01-09',
    basePath: '/admin', 

    plugins: [deskTool(), visionTool()
    ],

    schema: {
        types: schemas,
    },
});

export default config;
