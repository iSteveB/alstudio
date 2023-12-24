import React from 'react';
import { gabriela } from '../ui/font';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={`${gabriela.className} uppercase bg-beaver text-crema py-4 px-3 border border-moggle`}>
            {text}
        </button>
    );
};

export default Button;
