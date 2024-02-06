import { PictureData } from '@/types/pictureData';
import { createClient, groq } from 'next-sanity';

export const getPictures = async () => {
    try {
        const client = createClient({
            projectId: 't5ng0i6e',
            dataset: 'production',
            apiVersion: '2024-01-09',
            useCdn: true,
        });

        return client.fetch(
            groq`*[_type == "picture"]{
                _id,
                _createdAt,
                title,
                "slug": slug.current,
                image{
                    "tag": tag-> tag,
                    "asset": asset->{url, _id, metadata},
                    alt
                }
            }
            `,
            { revalidate: 5 }
        );
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching picture data');
    }
};

export const getPicture = async (slug: string): Promise<PictureData[]> => {
    try {
        const client = createClient({
            projectId: 't5ng0i6e',
            dataset: 'production',
            apiVersion: '2024-01-09',
            useCdn: true,
        });

        return client.fetch(
            groq`*[_type == "picture" && slug.current == $slug]{
                _id,
                _createdAt,
                title,
                "slug": slug.current,
                image{
                    "tag": tag-> tag,
                    "asset": asset->{url, _id, metadata},
                    alt
                }
            }
            `,
            { slug }
        );
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching picture data');
    }
};
