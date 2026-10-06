import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import { submitContactForm } from "../../services/contactService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================
  // Handle Input
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove old error/success message
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  // =========================
  // Submit Form
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const data = await submitContactForm(formData);

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.1,
      }}
      className="p-7 sm:p-10 lg:p-14"
    >
      {/* Form Heading */}

      <div className="mb-7">
        <h3 className="text-2xl font-bold text-chakrin-heading sm:text-3xl">
          Send Your Message
        </h3>

        <p className="mt-2 text-sm text-chakrin-text">
          Get in touch with our team for your textile requirements.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Name + Email */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
              className="
                w-full
                rounded-xl
                border
                border-chakrin-border
                bg-chakrin-secondary-light/50
                px-4
                py-3
                text-sm
                text-chakrin-heading
                outline-none
                transition
                placeholder:text-chakrin-text/50
                focus:border-chakrin-primary
                focus:bg-white
                focus:ring-2
                focus:ring-chakrin-primary/10
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              maxLength={120}
              autoComplete="email"
              className="
                w-full
                rounded-xl
                border
                border-chakrin-border
                bg-chakrin-secondary-light/50
                px-4
                py-3
                text-sm
                text-chakrin-heading
                outline-none
                transition
                placeholder:text-chakrin-text/50
                focus:border-chakrin-primary
                focus:bg-white
                focus:ring-2
                focus:ring-chakrin-primary/10
              "
            />
          </div>

        </div>

        {/* Phone + Subject */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              maxLength={20}
              autoComplete="tel"
              className="
                w-full
                rounded-xl
                border
                border-chakrin-border
                bg-chakrin-secondary-light/50
                px-4
                py-3
                text-sm
                text-chakrin-heading
                outline-none
                transition
                placeholder:text-chakrin-text/50
                focus:border-chakrin-primary
                focus:bg-white
                focus:ring-2
                focus:ring-chakrin-primary/10
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              required
              maxLength={150}
              className="
                w-full
                rounded-xl
                border
                border-chakrin-border
                bg-chakrin-secondary-light/50
                px-4
                py-3
                text-sm
                text-chakrin-heading
                outline-none
                transition
                placeholder:text-chakrin-text/50
                focus:border-chakrin-primary
                focus:bg-white
                focus:ring-2
                focus:ring-chakrin-primary/10
              "
            />
          </div>

        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-xs font-semibold text-chakrin-heading">
            Message
          </label>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            minLength={5}
            maxLength={2000}
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-chakrin-border
              bg-chakrin-secondary-light/50
              px-4
              py-3
              text-sm
              text-chakrin-heading
              outline-none
              transition
              placeholder:text-chakrin-text/50
              focus:border-chakrin-primary
              focus:bg-white
              focus:ring-2
              focus:ring-chakrin-primary/10
            "
          />
        </div>

        {/* =========================
            Status Message
        ========================= */}

        {status.message && (
          <div
            className={`
              rounded-xl
              px-4
              py-3
              text-sm
              font-medium
              ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }
            `}
          >
            {status.message}
          </div>
        )}

        {/* =========================
            Submit Button
        ========================= */}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-chakrin-primary
            px-7
            py-3.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-chakrin-primary/20
            transition-all
            duration-300
            ${
              isSubmitting
                ? "cursor-not-allowed opacity-70"
                : "hover:bg-chakrin-primary-dark hover:scale-[1.03]"
            }
          `}
        >
          {isSubmitting ? "Sending..." : "Send Message"}

          {!isSubmitting && (
            <FiArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;