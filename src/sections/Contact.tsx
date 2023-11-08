import Button from "../components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">Sıradaki</h2>
      <h2 className="contact-sub-title">İletişime Geç</h2>
      <p className="contact-text">
        Şu anda yeni fırsatlar aramıyor olsam da gelen kutum her zaman açık.
        İster bir sorunuz olsun ister sadece merhaba demek isteyin, size geri
        dönmek için elimden geleni yapacağım!
      </p>
      <div className="contact-cta">
        <Button link="mailto:emirhan.ozturk@gmail.com" text="Tıkla" />
      </div>
    </motion.div>
  );
}

export default Contact;
