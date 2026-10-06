import { env } from "../config/env.js";
import { contactWhatsAppTemplate } from "../templates/contactWhatsApp.js";

export const sendWhatsAppMessage = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {

  const text = contactWhatsAppTemplate({
    name,
    email,
    phone,
    subject,
    message,
  });

  const response = await fetch(
    `https://graph.facebook.com/vXX.X/${env.whatsappPhoneNumberId}/messages`,
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${env.whatsappAccessToken}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        messaging_product: "whatsapp",

        to: env.whatsappRecipientNumber,

        type: "text",

        text: {
          body: text,
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("WhatsApp API Error:", data);

    throw new Error(
      data?.error?.message || "WhatsApp message failed"
    );
  }

  return data;
};