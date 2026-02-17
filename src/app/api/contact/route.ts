import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, mineralInterest, message } = await request.json();

    if (!name || !company || !email || !mineralInterest || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailResponse = await resend.emails.send({
      from: 'Adonnow Trading Limited <inquiry@adonnow.com>',
      to: ['1jambo@proton.me', 'ricardomasama@gmail.com'],
      replyTo: email,
      subject: `New Institutional Inquiry: ${mineralInterest}`,
      html: `...your HTML here...`,
      text: `...your text here...`
    });

    if (emailResponse.error) {
      console.error('Resend API Error:', emailResponse.error);
      return new Response(
        JSON.stringify({ error: 'Failed to send inquiry email.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailId = emailResponse.data?.id || `ref-${Date.now()}`;

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: emailId,
        message: 'Inquiry submitted successfully' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}