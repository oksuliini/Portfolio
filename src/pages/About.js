import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Minusta</h2>
      <p>
        Olen kehittäjä, joka rakastaa Reactia ja moderneja web-teknologioita. 
        Opin jatkuvasti uutta ja teen projekteja oppiakseni lisää.
      </p>
    </motion.section>
  );
}
