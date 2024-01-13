import React from 'react';
import RadioInput from './RadioInput';

type TagFilterProps = {
    handleSelectedRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const categories = [
    { id: 'all', label: 'Toutes les photos' },
    { id: 'pregnancy', label: 'Grossesse' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'event', label: 'Événement' },
    { id: 'child', label: 'Enfant' },
];

const TagFilter: React.FC<TagFilterProps> = ({ handleSelectedRadio }) => {
    return (
        <div className='w-full bg-moggle'>
            <aside className='flex items-center justify-around w-5/6 m-auto h-20 text-crema '>
                {categories.map((category) => {
                    return (
                        <RadioInput
                            key={category.id}
                            type={'radio'}
                            id={category.id}
                            label={category.label}
                            handleSelectedRadio={(event) =>
                                handleSelectedRadio(event)
                            }
                        />
                    );
                })}
                
            </aside>
        </div>
    );
};

export default TagFilter;
