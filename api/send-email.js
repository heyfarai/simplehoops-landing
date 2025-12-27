import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { type, ...data } = req.body;

    let subject, htmlBody, textBody;

    if (type === 'demo') {
        subject = `Demo Request: ${data.league}`;
        textBody = `Name: ${data.name}
Email: ${data.email}
League: ${data.league}
Teams: ${data.teams}`;
        htmlBody = `<h2>New Demo Request</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>League:</strong> ${data.league}</p>
<p><strong>Teams:</strong> ${data.teams}</p>`;
    } else if (type === 'widget') {
        subject = `Lead: ${data.role} interested in ${data.interest}`;
        textBody = `Name: ${data.name}
Email: ${data.email}
Role: ${data.role}
Interest: ${data.interest}
Current Setup: ${data.currentState}`;
        htmlBody = `<h2>New Lead from Widget</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Role:</strong> ${data.role}</p>
<p><strong>Interest:</strong> ${data.interest}</p>
<p><strong>Current Setup:</strong> ${data.currentState}</p>`;
    } else {
        return res.status(400).json({ error: 'Invalid form type' });
    }

    const fromEmail = process.env.POSTMARK_FROM_EMAIL || process.env.EMAIL_FROM || 'do-not-reply@simplehoops.app';
    const toEmail = 'farai@simplehoops.app';

    try {
        // Use Mailpit if USE_MAILPIT=true, otherwise Postmark
        console.log('USE_MAILPIT:', process.env.USE_MAILPIT);
        if (process.env.USE_MAILPIT === 'true') {
            const transporter = nodemailer.createTransport({
                host: process.env.MAILPIT_SMTP_HOST,
                port: parseInt(process.env.MAILPIT_SMTP_PORT) || 1025,
                secure: false
            });

            await transporter.sendMail({
                from: fromEmail,
                to: toEmail,
                replyTo: data.email,
                subject: subject,
                text: textBody,
                html: htmlBody
            });
        } else {
            const response = await fetch('https://api.postmarkapp.com/email', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Postmark-Server-Token': process.env.POSTMARK_API_TOKEN
                },
                body: JSON.stringify({
                    From: fromEmail,
                    To: toEmail,
                    ReplyTo: data.email,
                    Subject: subject,
                    TextBody: textBody,
                    HtmlBody: htmlBody
                })
            });

            if (!response.ok) {
                const error = await response.json();
                console.error('Postmark error:', error);
                return res.status(500).json({ error: 'Failed to send email' });
            }
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
