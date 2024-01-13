export interface PictureData {
    _id: number;
    image: {
        asset: {
            url: string;
            _id: string;
        };
        tag: string;
        alt: string;
    };
    title: string;
}