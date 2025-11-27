import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Ota yhteyttä</h2>
      <p>Sähköposti: <strong>kokkoniemi.oskari@gmail.ocm</strong></p>
      <p>GitHub: <a href="https://github.com/oksuliini">github.com/oksuliini</a></p>
    </motion.section>
  );
}
