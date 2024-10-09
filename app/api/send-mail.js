import nodemailer from 'nodemailer';

// This is the API handler for sending emails
export async function POST(req) {
    try {
        const { email, message } = await req.json();

        // Create a transporter for sending emails via Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail account
                pass: process.env.GMAIL_PASS, // Your Gmail password or app password
            },
        });

        // Send the email
        await transporter.sendMail({
            from: email, // The user's email
            to: 'muhammadrizkiafdolli@gmail.com', // Your receiving email
            subject: `New message from ${email}`, // Subject line
            text: message, // Email message content
        });

        // Return success response
        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Failed to send email:', error);
        return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), {
            status: 500,
        });
    }
}
