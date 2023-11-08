import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Hakkımda</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            2022 Açıköğretim Lisesinden mezun oldum. Lise eğitimim boyunca bir
            çok yazılım kursuna katıldım ve kendimi her alanda geliştirmeye
            çalıştım. Frontend teknolojileri ile ilgili olan yaklaşık 1 sene
            süren eğitimlerimi tamamladıktan sonra, Taptoweb teknoloji
            şirketinde yapmış olduğum 6 ay süreli staj deneyimi, beni mobil
            uygulama geliştirme alanında daha da geliştirmiştir. 1 yıldır React
            Native, React JS, HTML ve CSS gibi frontend teknolojileri
            kullanıyorum ve bu teknolojileri kullanarak 2 adet mobil uygulama
            projesi geliştirdim. Projelerim sırasında kullanıcı deneyimini
            optimize etmek için gerekli özelleştirmeleri yaptım ve bu sayede
            projelerimin verimliliğini arttırdım.
          </p>
          <p className="about-grid-info-text">
            Şu anda Kalem Yazılım şirketinde, Jr. Frontend Developer olarak
            çalışıyorum. Burada, iç ve dış müşterilerin ihtiyaçlarına uygun
            olarak frontend teknolojilerini kullanarak çeşitli web ve mobil
            uygulama projelerinde görev alıyorum. Projelerimde, kullanıcı
            deneyimini öncelikli tutarak, UI/UX tasarımına uygun ve optimize
            edilmiş kodlar yazıyorum. Ayrıca, farklı disiplinlerdeki ekip
            arkadaşlarımla birlikte çalışarak takım çalışmasına önem veriyorum.
            Kendimi frontend teknolojileri alanında geliştirmek için de
            fırsatlar arayarak yaratıcı projelerde yer almayı hedefliyorum.{" "}
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Angular.js</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div style={{ width: 500, height: 500 }} className="overlay"></div>
          <div className="overlay-border"></div>
          <div
            style={{ width: 500, height: 500 }}
            className="about-grid-photo-container"
          >
            <Image src="/photo.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
