import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, organization, subject, message, source } = body;

    // Map source to email sender name
    const sourceMap = {
      'abaddon-page': 'Abaddon Drone Inquiry',
      'apollyon-page': 'Apollyon Drone Inquiry',
      'training-general': 'Training Program Inquiry',
      'training-fpv': 'FPV Training Inquiry',
      'homepage-cta': 'Homepage Inquiry',
      'pricing-contact': 'Pricing Inquiry',
      'course-registration': 'Course Registration Inquiry'
    };

    const senderName = sourceMap[source] || 'Website Contact';
    const sourceLine = source ? `Source: ${source}\n` : '';

    await resend.emails.send({
      from: `${senderName} <info@ordtechnologies.com>`,
      to: "info@ordtechnologies.com",
      subject: subject || "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Organization: ${organization}
${sourceLine}
Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
