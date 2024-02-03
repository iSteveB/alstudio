import React from 'react';
import RadioInput from './RadioInput';

type TagFilterProps = {
    handleSelectedRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'pregnancy', label: 'Grossesse' },
    { id: 'child', label: 'Enfant' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'event', label: 'Événement' },
];

const TagFilter: React.FC<TagFilterProps> = ({ handleSelectedRadio }) => {
    return (
        <div className='w-full bg-moggle'>
            <aside className='m-auto flex h-20 w-5/6 items-center justify-around text-crema lg:w-1/2'>
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
