"use server";

import { sendMail, compileThankYouTemplate } from '@/utils/mail';

interface SendMailParams {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  message: string;
}

export async function sendMailAction({
  name,
  email,
  companyName,
  phone,
  message,
}: SendMailParams) {
  const body = compileThankYouTemplate(name, companyName, phone, email, message);
  
  await sendMail({ to: email, cc: "beso@beso-k.nl", name, subject: "Hi, I received your email", body });
}


//  Thank you for your inquiry
