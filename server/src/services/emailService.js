import { Resend } from "resend";

import { env } from "../config/env.js";
import { contactEmailTemplate } from "../templates/contactEmail.js";

const resend = new Resend(env.resendApiKey);

export const sendContactEmail = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {

  const { data, error } = await resend.emails.send({
    from: env.emailFrom,
    to: [env.clientEmail],

    replyTo: email,

    subject: `New Website Enquiry - ${name}`,

    html: contactEmailTemplate({
      name,
      email,
      phone,
      subject,
      message,
    }),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};