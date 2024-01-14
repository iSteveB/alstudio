export interface PictureData {
    _id: number;
    title: string;
    slug?: string,
    image: {
        asset: {
            url: string;
            _id: string;
        };
        tag: string;
        alt: string;
    };
}