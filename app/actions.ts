"use server";

import nodemailer from "nodemailer";

export async function sendQuoteRequest(prevState: any, formData: FormData) {
  const rawFormData = {
    company: formData.get("company"),
    person: formData.get("person"),
    phone: formData.get("phone"),
    sector: formData.get("sector"),
  };

  // 1. Validate Data (Basic check)
  if (!rawFormData.company || !rawFormData.phone) {
    return { success: false, message: "Lütfen firma adı ve telefon alanlarını doldurunuz." };
  }

  // 2. Configure Email Transporter (Gmail, Outlook, or Hosting SMTP)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com or mail.4btmgd.com
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your email
      pass: process.env.SMTP_PASS, // Your password or app password
    },
    tls: {
      rejectUnauthorized: false // Sometimes needed for hosting providers
    }
  });

  try {
    // 3. Send Email
    await transporter.sendMail({
      from: '"Web Sitesi Teklif Formu" <no-reply@4btmgd.com>',
      to: "info@4btmgd.com", // Your receiving email
      subject: `Yeni Teklif Talebi: ${rawFormData.company}`,
      html: `
        <h3>Yeni Web Sitesi Form Talebi</h3>
        <p><strong>Firma Adı:</strong> ${rawFormData.company}</p>
        <p><strong>Yetkili:</strong> ${rawFormData.person}</p>
        <p><strong>Telefon:</strong> ${rawFormData.phone}</p>
        <p><strong>Sektör:</strong> ${rawFormData.sector}</p>
        <br />
        <p><em>Bu mesaj web sitesi üzerinden gönderilmiştir.</em></p>
      `,
    });

    return { success: true, message: "Talebiniz başarıyla alındı! En kısa sürede döneceğiz." };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, message: "Bir hata oluştu. Lütfen WhatsApp üzerinden ulaşın." };
  }
}