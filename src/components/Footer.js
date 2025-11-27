import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://github.com/oskari" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/oskari" target="_blank"><FaLinkedin /></a>
        <a href="https://twitter.com/oskari" target="_blank"><FaTwitter /></a>
      </div>
      <p>© {new Date().getFullYear()} Oskari — Moderni Portfolio</p>
    </footer>
  );
}
