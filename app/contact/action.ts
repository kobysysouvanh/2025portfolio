"use server"

import nodemailer from "nodemailer";

interface EmailResult {
    success: boolean;
    error?: string;
}

export async function sendContactEmail(
    name: string,
    email: string,
    message: string

) : Promise<EmailResult> {
    try {
        if (!name || !email || !message) {
            return { success: false, error: "All fields are required" };
        }


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
            subject: `Contact form submission from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Failed to send email" };
    }
}