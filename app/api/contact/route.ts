import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || "",
        response: token,
      }),
    }
  );
  const data = await response.json();
  return data.success === true;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: "Email service is not configured" },
      { status: 500 }
    );
  }

  if (!process.env.CONTACT_EMAIL) {
    return NextResponse.json(
      { success: false, error: "Contact email is not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message, turnstileToken } = body;

    if (turnstileToken && process.env.TURNSTILE_SECRET_KEY) {
      const isHuman = await verifyTurnstileToken(turnstileToken);
      if (!isHuman) {
        return NextResponse.json(
          { success: false, error: "Verification failed. Please try again." },
          { status: 403 }
        );
      }
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const { error: sendError } = await resend.emails.send({
      from: "CodeWhiz Contact Form <noreply@notifications.codewhiz.co>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">New Contact Form Submission</h2>
          <div style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="margin-top: 20px;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (sendError) {
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred" },
      { status: 500 }
    );
  }
}
