"use client";
import { motion } from "framer-motion";
import {
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiBootstrap,
  SiPhp,
  SiNextdotjs,
  SiCss3,
  SiFastapi,
  SiReact,
  SiWordpress,
} from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const projects = [
  {
    title: "SIWET",
    description: "Sistem Informasi Pengelolaan Data dan Informasi RW",
    tech: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D55" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "MySQL", icon: SiMysql, color: "#06B6D4" },
    ],
    image: "/projects/siwet.png",
  },
  {
    title: "Dimsum",
    description: "Sistem pemesanan dimsum online",
    tech: [
      { name: "PHP", icon: SiPhp, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#563d7c" },
      { name: "MySQL", icon: SiMysql, color: "#06B6D4" },
    ],
    image: "/projects/dimsum.png",
  },
  {
    title: "SIKAN",
    description: "Sistem Informasi Kantin",
    tech: [
      { name: "PHP", icon: SiPhp, color: "#06B6D4" },
      { name: "CSS", icon: SiCss3, color: "#563d7c" },
      { name: "MySQL", icon: SiMysql, color: "#06B6D4" },
    ],
    image: "/projects/sikan.png",
  },
  {
    title: "Daster Malang",
    description: "POS UMKM",
    tech: [{ name: "WordPress", icon: SiWordpress, color: "#06B6D4" }],
    image: "/projects/dastermalang.png",
  },
  {
    title: "Fintrack",
    description: "Sistem Manajemen Keuangan Sport Center",
    tech: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D55" },
      { name: "NextJS", icon: SiNextdotjs, color: "#06B6D4" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "MySQL", icon: SiMysql, color: "#06B6D4" },
    ],
    image: "/projects/fintrack.jpg",
  },
  {
    title: "Sky Watch",
    description: "Sistem Manajemen Keuangan Sport Center",
    tech: [
      { name: "FastAPI", icon: SiFastapi, color: "#06B6D4" },
      { name: "ReacttJS", icon: SiReact, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#563d7c" },
    ],
    image: "/projects/skywatch.png",
  },
];

import { useState } from "react";

// Skill data
const skills = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D55" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#563d7c" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000" },
  { name: "CSS3", icon: SiCss3, color: "#264de4" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
  { name: "WordPress", icon: SiWordpress, color: "#21759b" },
];

// Sertifikasi/Experience data
const certifications = [
  {
    title: "Dicoding - Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "2024",
    image: "/file.svg",
    link: "https://www.dicoding.com/certificates/XXXXXX",
  },
  {
    title: "Google - Digital Garage: Fundamentals of Digital Marketing",
    issuer: "Google",
    date: "2023",
    image: "/vercel.svg",
    link: "https://learndigital.withgoogle.com/digitalgarage",
  },
  {
    title: "Progate - Web Development Path",
    issuer: "Progate",
    date: "2022",
    image: "/next.svg",
    link: "https://progate.com/courses/web_development",
  },
];

export default function Main() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <>
      {/* ...existing code... (Selected Work section) */}
      <section className="py-32 relative id='work'" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
              Selected Work
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-primary
                    to-tertiary rounded-full"
            />
          </motion.div>
          {/* Project Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 relative z-10"
          >
            {projects.slice(0, visibleCount).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="group relative h-[500px] rounded-3xl overflow-hidden
                    bg-surface border border-white/10 cursor-pointer"
              >
                {/* Image Section*/}
                <motion.div
                  className="h-[250px] relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Content Section */}

                <motion.div
                  className="p-6 h-[25px] bg-surface"
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex justify-between items-start
                            mb-4 group/title"
                  >
                    <h3 className="text-2xl font-bold text-content">
                      {project.title}
                    </h3>
                    <ArrowUpRightIcon
                      className="h-6 w-6 text-content/50
                                        group-hover/title:text-primary transition-colors duration-300"
                    />
                  </div>
                  <p className="text-content/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-white/5 text-content/80
                                            text-sm border border-white/5
                                            hover:bg-surface transition-colors flex items-center
                                            gap-1.5 group/tech"
                      >
                        <tech.icon
                          style={{ color: tech.color }}
                          className="w-4 h-4 transition-colors"
                        />
                        <span className="group-hover/tech:text-content transition-colors">
                          {tech.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* View More Button */}
          {visibleCount < projects.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mt-20 relative z-[5]"
            >
              <button
                className="relative px-8 py-3 rounded-full bg-surface
                    border border-white/10 hover:border-primary/10 transition-all group"
                onClick={handleViewMore}
              >
                <span
                  className="text-content transition-colors
                        relative z-[1]"
                >
                  View All Projects
                </span>
                <div
                  className="absolute inset-0 rounded-full
                        bg-gradient-to-r from-primary/10 to-tertiary/10
                        opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
            </motion.div>
          )}
        </div>
      </section>
      {/* Skills Section */}
      <section
        className="py-24 bg-gradient-to-r from-primary/5 to-tertiary/5"
        id="skills"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
            <p className="text-content/70 mt-4 text-center max-w-2xl">
              Berikut adalah beberapa teknologi dan tools yang saya kuasai dan
              gunakan dalam pengembangan web modern.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center bg-surface rounded-2xl shadow-lg p-6 border border-white/10 transition-transform duration-300 cursor-pointer hover:shadow-xl"
              >
                <skill.icon
                  style={{ color: skill.color }}
                  className="w-12 h-12 mb-3"
                />
                <span className="font-semibold text-content text-lg text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Experience Section */}
      <section
        className="py-24 bg-gradient-to-r from-tertiary/5 to-primary/5"
        id="experience"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
              Experience & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tertiary to-primary rounded-full" />
            <p className="text-content/70 mt-4 text-center max-w-2xl">
              Berikut adalah beberapa sertifikasi dan pengalaman yang telah saya
              raih dalam bidang pengembangan web dan teknologi.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center bg-surface rounded-2xl shadow-lg p-8 border border-white/10 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={64}
                  height={64}
                  className="mb-4 object-contain"
                />
                <h3 className="font-bold text-xl text-content text-center mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <span className="text-content/70 text-sm mb-1">
                  {cert.issuer}
                </span>
                <span className="text-content/50 text-xs">{cert.date}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-tertiary/10" id="contact">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">Contact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mb-6" />
            <p className="text-content/80 text-lg text-center max-w-2xl mb-8">
              Tertarik untuk berkolaborasi, bertanya, atau sekadar menyapa? Silakan hubungi saya melalui form di bawah atau media sosial berikut!
            </p>
            <form className="w-full flex flex-col gap-4 items-center">
              <input type="text" placeholder="Nama" className="w-full max-w-md px-4 py-3 rounded-lg border border-white/20 bg-surface text-content focus:outline-primary" required />
              <input type="email" placeholder="Email" className="w-full max-w-md px-4 py-3 rounded-lg border border-white/20 bg-surface text-content focus:outline-primary" required />
              <textarea placeholder="Pesan" className="w-full max-w-md px-4 py-3 rounded-lg border border-white/20 bg-surface text-content focus:outline-primary resize-none" rows={4} required />
              <button type="submit" className="px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-tertiary transition-colors">Kirim Pesan</button>
            </form>
            <div className="flex gap-6 mt-8">
              <a href="mailto:riskiabdirahmawan@gmail.com" target="_blank" rel="noopener" className="text-primary hover:text-tertiary text-2xl font-bold">Email</a>
              <a href="https://www.linkedin.com/in/riskiabdirahmawan" target="_blank" rel="noopener" className="text-primary hover:text-tertiary text-2xl font-bold">LinkedIn</a>
              <a href="https://github.com/RiskiAbdiRahmawan" target="_blank" rel="noopener" className="text-primary hover:text-tertiary text-2xl font-bold">GitHub</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
