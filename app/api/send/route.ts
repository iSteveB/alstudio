import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface BodyParams {
    firstName: string;
    lastName: string;
    email: string;
    object: string;
    packageType: string;
    message: string;
}

const resend = new Resend('re_2Hu8oMxB_NVLrs87x8Z16UrVUjZY3BgSB');

export async function POST(request: Request) {
    const body = await request.json();
    const { firstName, lastName, email, object, packageType, message } = body as BodyParams;

    try {
      const { data, error } = await resend.emails.send({
        from: 'steve.basse@hotmail.com',
        to: ['basse.steve@hotmail.com'],
        subject: object,
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
