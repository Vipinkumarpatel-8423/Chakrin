import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "917422000021";

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        group
        fixed
        bottom-5
        right-4
        z-[9999]

        flex
        items-center
        gap-2

        rounded-full

        /* Chakrin Logo Gradient */
        bg-gradient-to-r
        from-[#A63D82]
        via-[#C85A9B]
        to-[#E58BB8]

        px-4
        py-3

        text-white

        shadow-[0_8px_30px_rgba(166,61,130,0.35)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-105
        hover:shadow-[0_12px_40px_rgba(166,61,130,0.45)]

        sm:bottom-6
        sm:right-6
        sm:px-5
        sm:py-3.5

        cursor-pointer
      "
    >

      {/* =====================================================
          ANIMATED RING
          pointer-events-none = click ko block nahi karega
      ====================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          rounded-full
          bg-[#D86AA8]
          opacity-60
          animate-ping
        "
      />

      {/* =====================================================
          SOFT GLOW
      ====================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          -inset-1
          -z-20
          rounded-full
          bg-[#D86AA8]/30
          blur-md
        "
      />

      {/* WhatsApp Icon */}

      <FaWhatsapp
        className="
          relative
          z-10
          text-2xl
          transition-transform
          duration-300
          group-hover:rotate-6
          sm:text-3xl
        "
      />

      {/* Text */}

      <span
        className="
          relative
          z-10
          hidden
          text-sm
          font-semibold
          sm:block
        "
      >
        WhatsApp
      </span>

    </a>
  );
};

export default WhatsAppButton;