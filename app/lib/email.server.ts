import emailjs from "@emailjs/nodejs";

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID!;
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY!;

export async function sendEmail(data: Record<string, unknown>) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, {
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: PRIVATE_KEY,
  });
}