import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sanitizeInput, isValidEmail, verifyRecaptcha } from '@/lib/security';
import { checkRateLimit } from '@/lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit (max 5 submissions per hour per IP)
    if (!checkRateLimit(ip, 5)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const data = await request.json();

    // Validate required fields
    if (!data.fullName || !data.email || !data.decisionContext || !data.recaptchaToken) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const isValidCaptcha = await verifyRecaptcha(
      data.recaptchaToken,
      process.env.RECAPTCHA_SECRET_KEY || ''
    );
    if (!isValidCaptcha) {
      return NextResponse.json(
        { error: 'Bot verification failed' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const fullName = sanitizeInput(data.fullName);
    const email = sanitizeInput(data.email).toLowerCase();
    const organization = data.organization ? sanitizeInput(data.organization) : '';
    const decisionContext = sanitizeInput(data.decisionContext);

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate required field lengths
    if (fullName.length < 2 || fullName.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (decisionContext.length < 10 || decisionContext.length > 2000) {
      return NextResponse.json(
        { error: 'Decision context must be between 10 and 2000 characters' },
        { status: 400 }
      );
    }

    // Send email to engagement team
    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM || 'noreply@notifications.falconbp.com',
      to: process.env.RESEND_CONTACT_EMAIL || 'engagement@falconbp.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
        <p><strong>Decision Context:</strong></p>
        <p>${decisionContext.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (emailResult.error) {
      console.error('Resend error:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: emailResult.data?.id }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
