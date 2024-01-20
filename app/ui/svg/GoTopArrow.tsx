'use client';
import React from 'react';

function Icon() {
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <svg
        className='w-8 cursor-pointer hover:animate-bounce'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            onClick={goTop}>
            <g>
                <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                    <g fill='#8B7E69' transform='translate(-518 -985)'>
                        <path d='M540.535 1000.535a.999.999 0 01-1.414 0L535 996.414V1007a1.001 1.001 0 01-2 0v-10.586l-4.121 4.121a.999.999 0 11-1.414-1.414l5.656-5.656a.981.981 0 01.879-.26.981.981 0 01.879.26l5.656 5.656a.999.999 0 010 1.414zM546 985h-24a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4v-24a4 4 0 00-4-4z'></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Icon;
