import React from 'react';

const Loader = () => {
    return (
        <div className='flex size-full items-center justify-center'>
            <i className='relative grid w-1/2 place-items-center before:absolute before:left-[calc(50%_-_3vmin)] before:top-[calc(50%_-_3vmin)] before:box-border before:size-[3vmin] before:animate-loader-before before:bg-moggle after:absolute after:left-1/2 after:top-1/2 after:box-border after:size-[3vmin] after:animate-loader-after after:bg-moggle'></i>
        </div>
    );
};

export default Loader;
