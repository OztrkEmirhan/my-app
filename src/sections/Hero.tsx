// Hero.js
import React from "react";
import { motion } from "framer-motion";
import Example from "../components/HeroTitle";

function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Merhaba Benim Adım
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        <span>
          <Example />
        </span>
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        <span style={{ fontWeight: "400" }}>Frontend Developer</span>
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        2022 Açıköğretim Lisesinden mezun oldum. Lise eğitimim boyunca bir çok
        yazılım kursuna katıldım ve kendimi her alanda geliştirmeye çalıştım.
        Frontend teknolojileri ile ilgili olan yaklaşık 1 sene süren
        eğitimlerimi tamamladıktan sonra, Taptoweb teknoloji şirketinde yapmış
        olduğum 6 ay süreli staj deneyimi, beni mobil uygulama geliştirme
        alanında daha da geliştirmiştir. 1 yıldır React Native, React JS, HTML
        ve CSS gibi frontend teknolojileri kullanıyorum ve bu teknolojileri
        kullanarak 2 adet mobil uygulama projesi geliştirdim. Projelerim
        sırasında kullanıcı deneyimini optimize etmek için gerekli
        özelleştirmeleri yaptım ve bu sayede projelerimin verimliliğini
        arttırdım.
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      ></motion.div>
    </div>
  );
}

export default Hero;
