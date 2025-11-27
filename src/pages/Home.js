import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="section home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Hei! Olen Oskari 👋</h2>
      <p>Moderni web-kehittäjä ja React-harrastaja. Rakennan tyylikkäitä, responsiivisia sovelluksia.</p>
    </motion.section>
  );
}
