"use server";

import { sendMail, compileThankYouTemplate } from '@/utils/mail';

interface SendMailParams {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  postcode: string;
  houseNumber: string;
  message: string;
}

export async function sendMailAction({
  name,
  email,
  companyName,
  phone,
  postcode,
  houseNumber,
  message,
}: SendMailParams) {
  const body = compileThankYouTemplate(name, companyName, phone, email, postcode, houseNumber, message);
  
  await sendMail({ to: email, cc: "www.besok.nl@gmail.com", name, subject: "Hi, I received your email", body });
}


//  Thank you for your inquiry
