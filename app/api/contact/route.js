import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, organization, subject, message } = body;

    await resend.emails.send({
      from: "Website Contact <info@ordtechnologies.com>", // verified domain sender
      to: "info@ordtechnologies.com",
      subject: subject || "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Organization: ${organization}
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
