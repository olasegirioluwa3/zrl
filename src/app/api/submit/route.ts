// app/api/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendClientAndAdminEmails } from '../../../lib/sendEmail';

export async function POST(request: NextRequest) {
  const { name, email, message, phonenumber } = await request.json();
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Phonenummber:', phonenumber);

  try {
    await sendClientAndAdminEmails(email, name, message, phonenumber);

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ message: error||'Failed to submit form' }, { status: 500 });
  }
}
export async function GET(request: NextRequest) {
  // const { name, email, message, phonenumber } = await request.json();
  // console.log('Name:', name);
  // console.log('Email:', email);
  // console.log('Message:', message);
  // console.log('Phonenummber:', phonenumber);

  try {
    // await sendClientAndAdminEmails(email, name, message, phonenumber);

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ message: error||'Failed to submit form' }, { status: 500 });
  }
}