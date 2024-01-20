export interface PictureData {
    _id: number;
    title: string;
    slug?: string,
    image: {
        asset: {
            metadata: any;
            url: string;
            _id: string;
        };
        tag: string;
        alt: string;
    };
}