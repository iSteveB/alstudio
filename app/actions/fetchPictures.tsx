import { getPictures } from '@/sanity/sanity.utils';
import { PictureData } from '@/types/pictureData';

export const fetchPictures = async (): Promise<PictureData[] | undefined> => {
    try {
        const picturesResult: PictureData[] = await getPictures();
        return picturesResult;
    } catch (error) {
        console.error(error);
        throw new Error('No pictures found');
    }
};
