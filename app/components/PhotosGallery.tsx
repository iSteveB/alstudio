'use client';
import { useEffect, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TagFilter from '@/app/components/TagFilter';

import { motion } from 'framer-motion';
import { PictureData } from '@/types/pictureData';

const PhotosGallery = ({
    pictures,
}: {
    pictures: PictureData[] | undefined;
}) => {
    const [selectedRadio, setSelectedRadio] = useState('all');
    const [isNotPhone, setIsNotPhone] = useState(true);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 600) {
            setIsNotPhone(false);
        } else {
            setIsNotPhone(true);
        }
    };

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

    return (
        <div>
            <div className='w-full'>
                <TagFilter
                    handleSelectedRadio={(event) => handleSelectedRadio(event)}
                />
            </div>
            <div className='flex w-full items-center justify-center border-b-3 border-moggle align-middle'>
                <div className='flex flex-wrap'>
                    {picturesArrays.map((array: PictureData[], index) => {
                        return (
                            <div
                                key={index}
                                className='max-w-[100%] basis-full md:max-w-[50%] md:basis-2/4 lg:max-w-[25%] lg:basis-1/4'>
                                {array.map((picture: PictureData) => {
                                    return isNotPhone ? (
                                        <Link
                                            key={picture._id}
                                            href={`/portfolio/${picture.slug}`}>
                                            <motion.div
                                                initial={{ y: 50 }}
                                                whileInView={{
                                                    y: 0,
                                                }}
                                                transition={{ duration: 0.7 }}
                                                whileHover={{ opacity: 0.5 }}
                                                className='p-2'
                                                key={picture._id}>
                                                <Image
                                                    className='min-h-[300px] w-full min-w-[300px] border-3 border-moggle object-cover
                                                transition duration-500 ease-in-out hover:scale-105'
                                                    src={
                                                        picture.image.asset.url
                                                    }
                                                    alt={picture.image.alt}
                                                    width={500}
                                                    height={500}
                                                    priority
                                                />
                                            </motion.div>
                                        </Link>
                                    ) : (
                                        <motion.div
                                            initial={{ y: 50 }}
                                            whileInView={{
                                                y: 0,
                                            }}
                                            transition={{ duration: 0.7 }}
                                            whileHover={{ opacity: 0.5 }}
                                            className='p-2'
                                            key={picture._id}>
                                            <Image
                                                className='min-h-[300px] w-full min-w-[300px] border-3 border-moggle object-cover
                                                transition duration-500 ease-in-out hover:scale-105'
                                                src={picture.image.asset.url}
                                                alt={picture.image.alt}
                                                width={500}
                                                height={500}
                                                priority
                                            />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PhotosGallery;
