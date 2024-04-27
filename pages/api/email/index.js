// pages/api/send-email.js

import nodemailer from 'nodemailer';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, phone, date, time, subject } = req.body;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'wow.gurgaon@outlook.com',
                pass: 'xsmtpsib-2b577d93a8e64dc58f2260c731d2212d754dd96999fc376738a0da41e66d9550-IUM64aDRxdTS0PLJ',
            },
        });

        // Send mail
        try {
            const info = await transporter.sendMail({
                from: `"wow" < wow.gurgaon@outlook.com >`,
                to: 'prateek.sharma@bonwic.com',
                subject: `${subject}`,
                text: `
                New Query User Details - ${subject}
                Name: ${name}
                Phone: ${phone}
                Date: ${date}
                Time: ${time}
                `,
            });

            console.log('Message sent: %s', info.messageId);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
