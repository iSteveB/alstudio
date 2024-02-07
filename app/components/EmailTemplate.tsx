import { EmailTemplateProps, TradProps } from '@/types/emails';
import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
    Hr,
} from '@react-email/components';

const packageTrad: TradProps = {
    newborn: 'Nouveau-né - 200€',
    newborn_special: 'Smatch the cake / Bain de lait - 150€',
    child: 'Grand Enfant - 220€',
    pregnancy_sweet: 'Grossesse Douceur - 250€',
    pregancy_relax: 'Maman Détente - 320€',
    pregnancy_and_newborn: 'Grossesse Douceur + Nouveau-né - 550€',
    portrait_alone: 'Portrait seul - 160€',
    portrait_group: 'Portrait Groupe - 190€',
    weeding1: 'Mariage 1 - 550€',
    weeding2: 'Mariage 2 - 1000€',
    baptem1: 'Baptêmes / Communion 1 - 160€',
    baptem2: 'Baptêmes / Communion 2 - 250€',
    others: 'Séance particulière.',
};

const objectTrad: TradProps = {
    book: 'réserver une séance',
    opinion: 'laisser un avis',
    question: 'poser une question',
};

const baseUrl = "https://alstudiophotos.com"

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    object,
    packageType,
    message,
}) => {
    return (
        <Html>
            <Head />
            <Preview>Nouveau message !</Preview>
            <Body style={main}>
                <Container>
                    <Section style={logo}>
                        <Img
                            src={`${baseUrl}/images/al_studio_banner.png`}
                            alt='AL Studio Banner'
                            className='mx-auto my-20'
                            width={200}
                            height={100}
                            
                        />
                    </Section>

                    <Section style={content}>
                        <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                            <Column>
                                <Heading
                                    style={{
                                        padding: '20px 0',
                                        fontSize: 32,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}>
                                    Nouveau message de{' '}
                                    {firstName + ' ' + lastName}
                                </Heading>
                                <Hr style={hr} />
                                <Heading
                                    as='h2'
                                    style={{
                                        fontSize: 26,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}>
                                    {object && (
                                        <h2>{`${firstName.trim()} ${lastName.trim()} souhaite ${
                                            objectTrad[object]
                                        } ! `}</h2>
                                    )}
                                </Heading>

                                <Text style={paragraph}>
                                    {packageType && (
                                        <p>
                                            {' '}
                                            <strong>
                                                Prestation choisie
                                            </strong>{' '}
                                            : {packageTrad[packageType]}
                                        </p>
                                    )}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    {message && (
                                        <p>
                                            <strong>Message</strong> :{' '}
                                            {message.trim()}
                                        </p>
                                    )}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    {email && (
                                        <p>
                                            {' '}
                                            <strong>Email</strong> : {email}
                                        </p>
                                    )}
                                </Text>
                            </Column>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default EmailTemplate;

const main = {
    backgroundColor: '#fff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: '30px 20px',
    margin: '0 auto',
};

const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
};

const boxInfos = {
    padding: '20px',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};
