import React from 'react';
import { gabriela } from '../ui/font';

interface ButtonProps {
    text: string;
    type: 'button' | 'submit';
    img?: JSX.Element;
    handleRoute?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, type, img, handleRoute }) => {
    return (
        <button onClick={handleRoute} type={type} className={`${gabriela.className} border border-moggle bg-beaver px-3 py-4 uppercase text-crema transition-all duration-300 ease-in-out hover:scale-105 hover:bg-crema hover:text-moggle`}>
           <div className='flex items-center justify-center gap-3'>
            {img}
            {text}
           </div>
        </button>
    );
};

export default Button;
