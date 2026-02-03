"use server";

import nodemailer from "nodemailer";

// This function runs on the server
export async function sendQuoteRequest(prevState: any, formData: FormData) {
  // 1. Extract data from the form
  const rawFormData = {
    company: formData.get("company") as string,
    person: formData.get("person") as string,
    phone: formData.get("phone") as string,
    sector: formData.get("sector") as string,
  };

  // 2. Basic Validation
  if (!rawFormData.company || !rawFormData.phone || !rawFormData.person) {
    return {
      success: false,
      message: "Lütfen zorunlu alanları (Firma, Yetkili, Telefon) doldurunuz.",
    };
  }

  try {
    // 3. Configure the Email Transporter (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // 587 portu için false olmalı
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Kurumsal hostinglerde SSL hatası almamak için bu ayar önemlidir:
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 4. Send the Email
    await transporter.sendMail({
      from: `"Web Sitesi" <${process.env.SMTP_USER}>`, // Sender address
      to: "info@4btmgd.com", // Your receiving email address
      subject: `📢 Yeni Teklif Talebi: ${rawFormData.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #1e293b;">Yeni Teklif Talebi</h2>
          <p>Web sitesi üzerinden yeni bir form gönderildi.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Firma Adı:</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawFormData.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Yetkili Kişi:</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawFormData.person}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">
                <a href="tel:${rawFormData.phone}">${rawFormData.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Sektör:</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${rawFormData.sector || "Seçilmedi"}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
            Bu mesaj 4B TMGD web sitesi iletişim formundan gönderilmiştir.
          </p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Talebiniz başarıyla alındı! En kısa sürede size döneceğiz.",
    };
  } catch (error) {
    console.error("Email Error:", error);
    return {
      success: false,
      message:
        "Sunucu hatası oluştu. Lütfen WhatsApp üzerinden iletişime geçin.",
    };
  }
}
