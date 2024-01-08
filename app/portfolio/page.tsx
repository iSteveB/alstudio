import Image, { StaticImageData } from 'next/image';
import pic1 from '../../public/images/DSC_0066.webp';
import pic2 from '../../public/images/DSC_0123.webp';
import pic3 from '../../public/images/DSC_0494.webp';
import pic4 from '../../public/images/DSC_0131.webp';
import pic5 from '../../public/images/DSC_0620.webp';
import pic6 from '../../public/images/DSC_0906.webp';
import pic7 from '../../public/images/birth.jpg';
import pic8 from '../../public/images/events.jpg';
import pic9 from '../../public/images/events.jpg';
import pic10 from '../../public/images/events.jpg';
import pic11 from '../../public/images/portrait.jpg';
import pic12 from '../../public/images/pregnancy.jpg';

interface ImageData {
    id: number;
    src: StaticImageData;
    title: string;
    description: string;
    alt?: string; // Optionnel si vous voulez permettre des textes alternatifs vides
}

const images: ImageData[] = [
    { id: 2, src: pic2, title: 'title 2', description: 'description 2' },
    { id: 3, src: pic3, title: 'title 3', description: 'description 3' },
    { id: 4, src: pic4, title: 'title 4', description: 'description 4' },
    { id: 7, src: pic7, title: 'title 7', description: 'description 7' },
    { id: 10, src: pic10, title: 'title 10', description: 'description 10' },
    { id: 1, src: pic1, title: 'title 1', description: 'description 1' },
    { id: 5, src: pic5, title: 'title 5', description: 'description 5' },
    { id: 12, src: pic12, title: 'title 12', description: 'description 12' },
    { id: 9, src: pic9, title: 'title 9', description: 'description 9' },
    { id: 8, src: pic8, title: 'title 8', description: 'description 8' },
    { id: 6, src: pic6, title: 'title 6', description: 'description 6' },
    { id: 11, src: pic11, title: 'title 11', description: 'description 11' },
];

const images2: ImageData[] = [
    { id: 3, src: pic3, title: 'title 3', description: 'description 3' },
    { id: 11, src: pic11, title: 'title 11', description: 'description 11' },
    { id: 6, src: pic6, title: 'title 6', description: 'description 6' },
    { id: 10, src: pic10, title: 'title 10', description: 'description 10' },
    { id: 7, src: pic7, title: 'title 7', description: 'description 7' },
    { id: 1, src: pic1, title: 'title 1', description: 'description 1' },
    { id: 4, src: pic4, title: 'title 4', description: 'description 4' },
    { id: 8, src: pic8, title: 'title 8', description: 'description 8' },
    { id: 9, src: pic9, title: 'title 9', description: 'description 9' },
    { id: 12, src: pic12, title: 'title 12', description: 'description 12' },
    { id: 2, src: pic2, title: 'title 2', description: 'description 2' },
    { id: 5, src: pic5, title: 'title 5', description: 'description 5' },
];

const images3: ImageData[] = [
    { id: 11, src: pic11, title: 'title 11', description: 'description 11' },
    { id: 6, src: pic6, title: 'title 6', description: 'description 6' },
    { id: 12, src: pic12, title: 'title 12', description: 'description 12' },
    { id: 5, src: pic5, title: 'title 5', description: 'description 5' },
    { id: 8, src: pic8, title: 'title 8', description: 'description 8' },
    { id: 3, src: pic3, title: 'title 3', description: 'description 3' },
    { id: 4, src: pic4, title: 'title 4', description: 'description 4' },
    { id: 9, src: pic9, title: 'title 9', description: 'description 9' },
    { id: 2, src: pic2, title: 'title 2', description: 'description 2' },
    { id: 7, src: pic7, title: 'title 7', description: 'description 7' },
    { id: 10, src: pic10, title: 'title 10', description: 'description 10' },
    { id: 1, src: pic1, title: 'title 1', description: 'description 1' },
];

const images4: ImageData[] = [
    { id: 10, src: pic10, title: 'title 10', description: 'description 10' },
    { id: 3, src: pic3, title: 'title 3', description: 'description 3' },
    { id: 11, src: pic11, title: 'title 11', description: 'description 11' },
    { id: 4, src: pic4, title: 'title 4', description: 'description 4' },
    { id: 6, src: pic6, title: 'title 6', description: 'description 6' },
    { id: 7, src: pic7, title: 'title 7', description: 'description 7' },
    { id: 8, src: pic8, title: 'title 8', description: 'description 8' },
    { id: 2, src: pic2, title: 'title 2', description: 'description 2' },
    { id: 1, src: pic1, title: 'title 1', description: 'description 1' },
    { id: 12, src: pic12, title: 'title 12', description: 'description 12' },
    { id: 9, src: pic9, title: 'title 9', description: 'description 9' },
    { id: 5, src: pic5, title: 'title 5', description: 'description 5' },
];
const Portfolio = () => {
    return (
        <div>
            <div className='w-full bg-moggle'>
                <aside className='flex items-center justify-around w-1/2 m-auto h-20 text-crema '>
                    <div className='text-xl flex flex-row-reverse items-center gap-2'>
                        <label htmlFor='pregnant'>Grossesse</label>
                        <input type='radio' name='pictureType' id='pregnant' />
                    </div>
                    <div className='text-xl flex flex-row-reverse items-center gap-2'>
                        <label htmlFor='portrait'>Portrait</label>
                        <input type='radio' name='pictureType' id='portrait' />
                    </div>
                    <div className='text-xl flex flex-row-reverse items-center gap-2'>
                        <label htmlFor='event'>Événement</label>
                        <input type='radio' name='pictureType' id='event' />
                    </div>
                    <div className='text-xl flex flex-row-reverse items-center gap-2'>
                        <label htmlFor='child'>Enfant</label>
                        <input type='radio' name='pictureType' id='child' />
                    </div>
                    <div className='text-xl flex flex-row-reverse items-center gap-2'>
                        <label htmlFor='all'>Toutes les photos</label>
                        <input type='radio' name='pictureType' id='all' />
                    </div>
                </aside>
            </div>
            <div className='flex justify-center items-center align-middle w-full border-b-3 border-moggle'>
                <div className='flex items-center flex-wrap'>
                    <div className='max-w-[100%] md:max-w-[50%] lg:max-w-[25%] basis-full md:basis-2/4 lg:basis-1/4'>
                        {images.map((image) => {
                            return (
                                <div key={image.id} className='p-2'>
                                    {
                                        <Image
                                            className='object-cover w-full align-middle border-3 border-moggle'
                                            src={image.src}
                                            alt=''
                                        />
                                    }
                                </div>
                            );
                        })}
                    </div>
                    <div className='max-w-[100%] md:max-w-[50%] lg:max-w-[25%] basis-full md:basis-2/4 lg:basis-1/4'>
                        {images3.map((image) => {
                            return (
                                <div key={image.id} className='p-2'>
                                    {
                                        <Image
                                            className='object-cover w-full border-3 border-moggle'
                                            src={image.src}
                                            alt=''
                                        />
                                    }
                                </div>
                            );
                        })}
                    </div>
                    <div className='max-w-[100%] md:max-w-[50%] lg:max-w-[25%] basis-full md:basis-2/4 lg:basis-1/4'>
                        {images2.map((image) => {
                            return (
                                <div key={image.id} className='p-2'>
                                    {
                                        <Image
                                            className='object-cover w-full border-3 border-moggle'
                                            src={image.src}
                                            alt=''
                                        />
                                    }
                                </div>
                            );
                        })}
                    </div>
                    <div className='max-w-[100%] md:max-w-[50%] lg:max-w-[25%] basis-full md:basis-2/4 lg:basis-1/4'>
                        {images4.map((image) => {
                            return (
                                <div key={image.id} className='p-2'>
                                    {
                                        <Image
                                            className='object-cover w-full border-3 border-moggle'
                                            src={image.src}
                                            alt=''
                                        />
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
