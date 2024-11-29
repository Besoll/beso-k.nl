import nodemailer from 'nodemailer'
import * as handlebars from "handlebars"
import { thankYouTemplate } from './templates/thankYou';

export async function sendMail({ to, cc, name, subject, body }: { to: string; cc: string, name: string; subject: string; body: string; }) {
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  
    if (!SMTP_EMAIL || !SMTP_PASSWORD) {      
      throw new Error('SMTP credentials are not set in environment variables');
    }
  
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });
  
    try {
      const testResult = await transport.verify();
      
    } catch (error) {
      console.error('SMTP verification failed:', error);
      throw error;
    }
  
    try {
      const sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
        to,
        cc,
        subject,
        html: body,
      });      
      return sendResult;
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }


export function compileThankYouTemplate(name: string, companyName: string, phone: string, email: string, postcode: string, houseNumber: string, message: string) {   

    const template = handlebars.compile(thankYouTemplate);
    const htmlBody = template({
        name: name,
        companyName: companyName,
        phone: phone,
        email: email,
        postcode: postcode,
        houseNumber: houseNumber,
        message: message,
    });

    return htmlBody;
}
