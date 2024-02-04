export interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    object: string;
    packageType?: string;
    message: string;
}

export interface TradProps {
    [key: string]: string;
}
