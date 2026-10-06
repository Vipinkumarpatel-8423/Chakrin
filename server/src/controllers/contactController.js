import { sendContactEmail } from "../services/emailService.js";
import { sendWhatsAppMessage } from "../services/whatsappService.js";

const cleanText = (value = "") => {
  return String(value).trim();
};

export const submitContactForm = async (req, res) => {
  try {
    let {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    // =========================
    // Clean Input
    // =========================

    name = cleanText(name);
    email = cleanText(email).toLowerCase();
    phone = cleanText(phone);
    subject = cleanText(subject);
    message = cleanText(message);


    // =========================
    // Required Fields
    // =========================

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }


    // =========================
    // Length Validation
    // =========================

    if (name.length > 80) {
      return res.status(400).json({
        success: false,
        message: "Name is too long.",
      });
    }

    if (email.length > 120) {
      return res.status(400).json({
        success: false,
        message: "Email is too long.",
      });
    }

    if (phone.length > 20) {
      return res.status(400).json({
        success: false,
        message: "Phone number is too long.",
      });
    }

    if (subject.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Subject is too long.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long.",
      });
    }


    // =========================
    // Email Validation
    // =========================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }


    // =========================
    // Prepare Data
    // =========================

    const formData = {
      name,
      email,
      phone,
      subject,
      message,
    };


    // =========================
    // Send Email + WhatsApp
    // =========================

    const results = await Promise.allSettled([
      sendContactEmail(formData),
      sendWhatsAppMessage(formData),
    ]);


    const emailResult = results[0];
    const whatsappResult = results[1];


    // =========================
    // Log Failures
    // =========================

    if (emailResult.status === "rejected") {
      console.error(
        "Email failed:",
        emailResult.reason
      );
    }

    if (whatsappResult.status === "rejected") {
      console.error(
        "WhatsApp failed:",
        whatsappResult.reason
      );
    }


    // =========================
    // Both Failed
    // =========================

    if (
      emailResult.status === "rejected" &&
      whatsappResult.status === "rejected"
    ) {
      return res.status(500).json({
        success: false,
        message:
          "Unable to send your enquiry. Please try again.",
      });
    }


    // =========================
    // Success
    // =========================

    return res.status(200).json({
      success: true,
      message:
        "Your enquiry has been submitted successfully.",
      emailSent:
        emailResult.status === "fulfilled",
      whatsappSent:
        whatsappResult.status === "fulfilled",
    });

  } catch (error) {

    console.error(
      "Contact Controller Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong. Please try again.",
    });
  }
};