import { motion } from "framer-motion";

const ContactMap = () => {
  const address = "Chakrin Digital Textiles, VPO Palri, Tehsil Israna, Haryana 132145, India";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <section className="relative w-full overflow-hidden mt-16 sm:mt-20 lg:mt-24">

      {/* Map */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[320px] w-full sm:h-[400px] lg:h-[480px]"
      >

        <iframe
          src={mapUrl}
          title="Chakrin Digital Textiles Location"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </motion.div>

    </section>
  );
};

export default ContactMap;