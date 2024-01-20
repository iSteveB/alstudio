import React from 'react';

interface RadioInputProps {
    type: string;
    id: string;
    label: string;
    handleSelectedRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput: React.FC<RadioInputProps> = ({type, id, label, handleSelectedRadio}) => {
    return (
        <div className='flex flex-row-reverse items-center gap-2 text-xs md:text-lg lg:text-xl'>
                    <input
                        type={type}
                        name='pictureType'
                        id={id}
                        className='peer hidden'
                        defaultChecked={id === 'all'}
                        onChange={handleSelectedRadio}
                    />
                    <label
                        htmlFor={id}
                        className='px-2 py-1 transition duration-500 ease-in-out hover:cursor-pointer peer-checked:bg-crema peer-checked:text-moggle'>
                        {label}
                    </label>
        </div>
    );
};

export default RadioInput;