'use client';
import React, { useState, ChangeEvent } from 'react';
import TagFilter from '@/app/components/TagFilter';
import Image from 'next/image';
import { PictureData } from '@/types/pictureData';
import Link from 'next/link';

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
    console.log(picturesArrays);

    return (
        <div>
            <div className='w-full'>
                <TagFilter
                    handleSelectedRadio={(event) => handleSelectedRadio(event)}
                />
            </div>
            <div className='flex justify-center items-center align-middle w-full border-b-3 border-moggle'>
                <div className='flex flex-wrap'>
                    {picturesArrays.map((array: PictureData[], index) => {
                        return (
                            <div
                                key={index}
                                className='max-w-[100%] md:max-w-[50%] lg:max-w-[25%] basis-full md:basis-2/4 lg:basis-1/4'>
                                {array.map((picture: PictureData) => {
                                    return (
                                        <div key={picture._id} className='p-2'>
                                            <Link href={`/portfolio/${picture.slug}`}>
                                            <Image
                                                className='object-cover w-full border-3 border-moggle min-w-[300px] min-h-[300px]
                                                hover:scale-105 transition duration-500 ease-in-out'
                                                src={picture.image.asset.url}
                                                alt={picture.image.alt}
                                                width={500}
                                                height={500}
                                            />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div />
        </div>
    );
};

export default ImageGallery;
