export const contactWhatsAppTemplate = ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  return `
🔔 *New Website Enquiry*

🏢 *Chakrin Digital Textiles*

👤 *Name:* ${name}

📧 *Email:* ${email}

📱 *Phone:* ${phone}

📌 *Subject:* ${subject || "Website Enquiry"}

💬 *Message:*
${message}

━━━━━━━━━━━━━━

🌐 Submitted through website
`;
};