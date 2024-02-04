import toast from 'react-hot-toast';

const isValidName = (name: string): boolean => {
    return /^[a-zA-Z\-]+$/
    .test(name);
};
const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateEmail = (email: string) => {
    if (!isValidEmail(email)) {
        toast.error('Veuillez entrer une adresse mail valide.');
        throw new Error('Invalid email');
    }
};

const validateMessageLength = (message: string) => {
    if (message.length < 10) {
        toast.error('Votre message doit contenir au moins 10 caractères.');
        throw new Error('Message too short');
    }
};

const validatePackageType = (packageType: string) => {
    if (packageType === '') {
        toast.error('Veuillez sélectionner une prestation.');
        throw new Error('No package selected');
    }
};

const validateObject = (object: string) => {
    if (object === '') {
        toast.error('Veuillez spécifier votre souhait.');
        throw new Error('No object selected');
    }
};

const validateName = (name: string, field: string) => {
    if (!isValidName(name)) {
        toast.error(`Veuillez entrer un ${field} valide.`);
        throw new Error(`Invalid ${field}`);
    }
};

export {validateEmail, validateMessageLength, validatePackageType, validateObject, validateName}