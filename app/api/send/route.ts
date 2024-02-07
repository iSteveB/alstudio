import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { TradProps } from '@/types/emails';

interface BodyParams {
    firstName: string;
    lastName: string;
    email: string;
    object: string;
    packageType: string;
    message: string;
}

const objectTrad: TradProps = {
  book: 'réserver une séance',
  opinion: 'laisser un avis',
  question: 'poser une question',
};

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: Request) {
    const body = await request.json();
    const { firstName, lastName, email, object, packageType, message } = body as BodyParams;

    try {
      const { data, error } = await resend.emails.send({
        from: 'contact@alstudiophotos.com',
        to: ['a.l.studiophotos@gmail.com'],
        subject: objectTrad[object].charAt(0).toUpperCase() + objectTrad[object].slice(1),
        react: EmailTemplate({
            firstName: firstName,
            lastName: lastName,
            email: email,
            object: object,
            packageType: packageType,
            message: message,
        }) as React.ReactElement,
      });
      
      if (error) {
        return NextResponse.json({ error });
      }
  
      return NextResponse.json( data );
    } catch (error) {
      return Response.json({ error });
    }
  }
