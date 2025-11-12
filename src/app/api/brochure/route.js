import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, address, from, brochureTitle, brochureFile } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let subject = "New Website Contact";
    let bodyText = `
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
    `;
    if (from === "brochure") {
      subject = "New Brochure Download Request";
      bodyText = `
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
Brochure Title: ${brochureTitle}
Brochure File: ${brochureFile}
      `;
    }

    await transporter.sendMail({
      from: `"Veer Bharat" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject,
      text: bodyText,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "error", details: err?.message || err }, { status: 500 });
  }
}
