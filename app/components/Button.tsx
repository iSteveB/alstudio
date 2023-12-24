import React from 'react';
import { gabriela } from '../ui/font';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={`${gabriela.className} uppercase bg-beaver hover:bg-crema text-crema hover:text-moggle py-4 px-3 border border-moggle hover:scale-105 transition-all duration-300 ease-in-out`}>
            {text}
        </button>
    );
};

export default Button;
