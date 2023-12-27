import React from 'react';
import { gabriela } from '../ui/font';

interface ButtonProps {
    text: string;
    type: 'button' | 'submit';
    img?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ text, type, img }) => {
    return (
        <button type={type} className={`${gabriela.className} uppercase bg-beaver hover:bg-crema text-crema hover:text-moggle py-4 px-3 border border-moggle hover:scale-105 transition-all duration-300 ease-in-out`}>
           <div className='flex items-center justify-center gap-3'>
            {img}
            {text}
           </div>
        </button>
    );
};

export default Button;
