// src/api/contact.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequestBody {
  name: string;
  company: string;
  email: string;
  phone: string;
  mineralInterest: string;
  message: string;
}

export default async function handler(req: { method: string; body: EmailRequestBody }) {
  if (req.method !== 'POST') {
    return { status: 405, body: { error: 'Method not allowed' } };
  }

  const { name, company, email, phone, mineralInterest, message } = req.body;

  // Basic validation
  if (!name || !company || !email || !mineralInterest || !message) {
    return { status: 400, body: { error: 'Missing required fields' } };
  }

  try {
    // Send email to your team
    const emailResponse = await resend.emails.send({
      from: 'Adonnow Trading Limited <inquiry@adonnow.com>',
      to: ['maindev@proton.me', 'dev-chatedral@proton.me'],
      replyTo: email,
      subject: `New Institutional Inquiry: ${mineralInterest}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; color: #333;">
          <h2 style="color: #1a1a2e; border-bottom: 2px solid #1a1a2e; padding-bottom: 10px;">
            New Institutional Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td><strong>From:</strong></td><td>${name} (${company})</td></tr>
            <tr><td><strong>Contact Email:</strong></td><td>${email}</td></tr>
            ${phone ? `<tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>` : ''}
            <tr><td><strong>Mineral Interest:</strong></td><td>${mineralInterest}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
            <strong>Message:</strong><br>
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            Submitted via Adonnow Trading contact form
          </p>
        </div>
      `,
      text: `
New Institutional Inquiry
────────────────────────
From: ${name} (${company})
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}
Mineral Interest: ${mineralInterest}

Message:
${message}

────────────────────────
Submitted via Adonnow Trading contact form
      `
    });

    if (emailResponse.error) {
      console.error('Resend API Error:', emailResponse.error);
      return { 
        status: 500, 
        body: { error: 'Failed to send inquiry email.' } 
      };
    }

    const emailId = emailResponse.data?.id || `ref-${Date.now()}`;

    // Optional: Send confirmation email to visitor
    await resend.emails.send({
      from: 'Adonnow Trading Limited <no-reply@adonnow.com>',
      to: [email],
      subject: 'We Received Your Inquiry',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; color: #333;">
          <h2 style="color: #1a1a2e;">Thank You for Contacting Adonnow Trading</h2>
          <p>Dear ${name},</p>
          <p>We have received your inquiry regarding <strong>${mineralInterest}</strong>.</p>
          <p>Our team will review your request and respond within 2 business hours.</p>
          <p><strong>Reference:</strong> ${emailId}</p>
          <hr style="margin: 20px 0;">
          <p style="font-size: 14px; color: #666;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      `
    });

    return { 
      status: 200, 
      body: { 
        success: true, 
        messageId: emailId,
        message: 'Inquiry submitted successfully' 
      } 
    };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { 
      status: 500, 
      body: { error: 'An unexpected error occurred. Please try again or contact us directly.' } 
    };
  }
}