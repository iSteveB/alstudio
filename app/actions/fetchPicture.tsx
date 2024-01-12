import { getPicture } from '@/sanity/sanity.utils';
import { PictureData } from '../components/ImageGallery';

export const fetchPictures = async (): Promise<PictureData[] | undefined> => {
    try {
        const picturesResult: PictureData[] = await getPicture();
        console.log(picturesResult);
        return picturesResult;
    } catch (error) {
        console.error(error);
        throw new Error('No pictures found');
    }
};
