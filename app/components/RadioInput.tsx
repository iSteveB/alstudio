import React from 'react';

interface RadioInputProps {
    type: string;
    id: string;
    label: string;
    handleSelectedRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput: React.FC<RadioInputProps> = ({type, id, label, handleSelectedRadio}) => {
    return (
        <div className='text-xs md:text-md lg:text-xl flex flex-row-reverse items-center gap-2'>
                    <input
                        type={type}
                        name='pictureType'
                        id={id}
                        className='hidden peer'
                        defaultChecked={id === 'all'}
                        onChange={handleSelectedRadio}
                    />
                    <label
                        htmlFor={id}
                        className='peer-checked:bg-crema px-2 py-1 peer-checked:text-moggle hover:cursor-pointer'>
                        {label}
                    </label>
        </div>
    );
};

export default RadioInput;