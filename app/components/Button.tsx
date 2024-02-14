import React from 'react';
import { gabriela } from '../ui/font';
import { motion } from 'framer-motion';

interface ButtonProps {
    text: string;
    type: 'button' | 'submit';
    img?: JSX.Element;
    handleClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const Button: React.FC<ButtonProps> = ({ text, type, img, handleClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.07 }}
            onClick={handleClick}
            type={type}
            className={`${gabriela.className} group flex items-center justify-center gap-3 border border-moggle bg-beaver px-3 py-4 uppercase text-crema hover:bg-crema hover:text-moggle`}>
            {img}
            {text}
        </motion.button>
    );
};

export default Button;
