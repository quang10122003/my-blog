import nodemailer from "nodemailer";

type ContactMailPayload = {
    fullName: string;
    email: string;
    phone: string;
    date: string;
    service: string;
    attendees: number;
    message: string;
};

export async function sendContactMail(data: ContactMailPayload) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    }); 

    // verify để debug
    await transporter.verify();

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // luôn gửi về bạn
        subject: `📩 New Contact from ${data.fullName}`,
        html: `
      <h3>New Contact Request</h3>
      <p><b>Name:</b> ${data.fullName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Date:</b> ${data.date}</p>
      <p><b>Service:</b> ${data.service}</p>
      <p><b>Attendees:</b> ${data.attendees}</p>
      <p><b>Message:</b> ${data.message}</p>
    `,
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: "We received your request",
        html: `
      <p>Hi ${data.fullName},</p>
      <p>We have received your request and will contact you soon.</p>
      <p>Thanks!</p>
    `,
    });
}