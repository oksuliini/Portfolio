import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, link, image }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      {image && <img src={image} alt={title} className="project-img" />}
      <h3>{title}</h3>
      <p>{desc}</p>
      {link && <a href={link} target="_blank">Katso</a>}
    </motion.div>
  );
}
