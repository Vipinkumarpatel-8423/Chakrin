import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,

  clientUrl: process.env.CLIENT_URL,

  resendApiKey: process.env.RESEND_API_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
  emailFrom: process.env.EMAIL_FROM,

  whatsappAccessToken: process.env.WHATSAPP_ACCESS_TOKEN,
  whatsappPhoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
  whatsappRecipientNumber: process.env.WHATSAPP_RECIPIENT_NUMBER,
};