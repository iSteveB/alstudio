'use client';
import React, { useState, ChangeEvent } from 'react';
import TagFilter from '@/app/components/TagFilter';
import Image from 'next/image';

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

const ImageGallery = ({
    pictures,
}: {
    pictures: PictureData[] | undefined;
}) => {
    const [selectedRadio, setSelectedRadio] = useState('all');

    const handleSelectedRadio = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(event.target.id);
    };

    let picturesArrays: PictureData[][] = [[], [], [], []];

    const pictureDistribution = () => {
        pictures &&
            pictures
                .filter((picture: PictureData) => {
                    if (selectedRadio === 'all') {
                        return picture;
                    } else {
                        return picture.image.tag === selectedRadio;
                    }
                })
                .forEach((picture: PictureData, index: number) => {
                    picturesArrays[index % 4].push(picture);
                });
    };

    pictureDistribution();
    console.log(picturesArrays)

    return (
        <div>
            <TagFilter
                handleSelectedRadio={(event) => handleSelectedRadio(event)}
            />
            <div className='flex justify-center items-center align-middle w-full border-b-3 border-moggle'>
                <div className='flex flex-wrap'>
                    {picturesArrays.map((array: PictureData[]) => {
                        return array.map((picture: PictureData) => {
                            return (
                                <div
                                    key={picture._id}
                                    className='max-w-[100%] md:max-w-[50%] lg:max-w-[25%] basis-full md:basis-2/4 lg:basis-1/4'>
                                    <div className='p-2'>
                                        <Image
                                            className='object-cover w-full border-3 border-moggle min-w-[300px] min-h-[300px]'
                                            src={picture.image.asset.url}
                                            alt={picture.image.alt}
                                            width={700}
                                            height={700}
                                        />
                                    </div>
                                </div>
                            );
                        });
                    })}
                </div>
            </div>
            <div />
        </div>
    );
};

export default ImageGallery;
