import { createClient, groq } from 'next-sanity';

export const getPicture = async () => {
    const client = createClient({
        projectId: 't5ng0i6e',
        dataset: 'production',
        apiVersion: '2024-01-09',
        useCdn: true
    });

   return client.fetch(
        groq`*[_type == "picture"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            image{
             "tag": tag-> tag,
             "asset": asset->{url, _id},
             alt
            }
          }
          `
    , {revalidate: 5});
};
