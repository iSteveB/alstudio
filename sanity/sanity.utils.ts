import { PictureData } from '@/types/pictureData';
import { createClient, groq } from 'next-sanity';

export const getPictures = async () => {
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
};

export const getPicture = async (slug: string): Promise<PictureData[]> => {
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
};
