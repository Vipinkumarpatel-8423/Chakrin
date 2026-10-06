import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919084000006";

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-5
        right-4
        z-[9999]
        flex
        items-center
        gap-2
        rounded-full
        bg-[#25D366]
        px-4
        py-3
        text-white
        shadow-[0_8px_30px_rgba(37,211,102,0.35)]
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_10px_35px_rgba(37,211,102,0.45)]
        sm:bottom-6
        sm:right-6
        sm:px-5
        sm:py-3.5
      "
    >
      {/* Animated Ring */}
      <span
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-[#25D366]
          opacity-70
          animate-ping
        "
      />

      <FaWhatsapp className="text-2xl sm:text-3xl" />

      <span className="hidden text-sm font-semibold sm:block">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;