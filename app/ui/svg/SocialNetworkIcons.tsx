import React from 'react';

interface IconsProps {
    color: 1 | 2;
}

const colors = {
    1: 'fill-beaver',
    2: 'fill-crema',
};

const Instagram: React.FC<IconsProps> = ({ color }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            className={`${colors[color]} group-hover:fill-moggle`}
            viewBox='0 0 24 24'>
            <path d='M20.947 8.305a6.531 6.531 0 00-.419-2.216 4.61 4.61 0 00-2.633-2.633 6.606 6.606 0 00-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 00-2.185.42 4.607 4.607 0 00-2.633 2.633 6.554 6.554 0 00-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.42 2.187a4.61 4.61 0 002.633 2.632 6.586 6.586 0 002.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.593 6.593 0 002.186-.419 4.616 4.616 0 002.633-2.633c.263-.7.404-1.438.42-2.187.042-.962.055-1.267.055-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297a4.622 4.622 0 01-4.623-4.623 4.622 4.622 0 114.623 4.623zm4.807-8.339a1.077 1.077 0 11-.002-2.154 1.077 1.077 0 01.002 2.154z'></path>
            <path d='M11.994 14.982a3.003 3.003 0 100-6.006 3.003 3.003 0 000 6.006z'></path>
        </svg>
    );
};

const Tiktok: React.FC<IconsProps> = ({ color }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            className={`${colors[color]} group-hover:fill-moggle`}
            viewBox='0 0 24 24'>
            <path d='M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.842 6.842 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1h-.04z'></path>
        </svg>
    );
};

const Facebook: React.FC<IconsProps> = ({ color }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            className={`${colors[color]} group-hover:fill-moggle`}
            viewBox='0 0 24 24'>
            <path d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z'></path>
        </svg>
    );
};

export { Instagram, Tiktok, Facebook };
