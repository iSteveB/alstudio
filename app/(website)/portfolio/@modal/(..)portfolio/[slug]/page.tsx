import Modal from '@/app/components/Modal';
import PhotoCard from '@/app/components/PhotoModal';
import { getPicture } from '@/sanity/sanity.utils';
import { PictureData } from '@/types/pictureData';


export default async function PhotoModal({
    params: { slug: photoId },
}: {
    params: { slug: string };
}) {
    const picture: PictureData[] = await getPicture(photoId);

    return (
        <div>
            <Modal>
                <PhotoCard photo={picture[0]} />
            </Modal>
        </div>
    );
}
