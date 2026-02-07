import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.fullName || !data.email || !data.organization || !data.role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Send to email service (SendGrid, Resend, etc)
    // or database (Supabase, PostgreSQL, etc)
    console.log('Research access request:', data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing research request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
