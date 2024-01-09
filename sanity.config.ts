import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
//import { visionTool } from '@sanity/vision';
//import { schemaTypes } from './schemas';

const config = defineConfig({
    name: 'default',
    title: 'AL Studio',

    projectId: 't5ng0i6e',
    dataset: 'production',
    apiVersion: '2024-01-09',
    basePath: '/admin', 

    plugins: [deskTool(), 
    //    visionTool()
    ],

    schema: {
        //types: schemaTypes,
    },
});

export default config;
