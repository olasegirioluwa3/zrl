// app/api/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendClientAndAdminEmails } from '../../../lib/sendEmail';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  try {
    await sendClientAndAdminEmails(email, name, message);

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}