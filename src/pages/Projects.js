import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectList = [
    // Tämä voi olla myöhemmin Kotkantiemaalaus tai Godot-projekti
    { title: "Tuleva projekti", desc: "Tähän tulee myöhemmin Kotkantiemaalaus tai Godot-peli.", link: "#" },
    
    { 
      title: "HelloKitty Verkkokauppa", 
      desc: "Verkkokauppa kouluprojekti.", 
      link: "https://github.com/oksuliini/Verkkokauppa" 
    },

    { 
      title: "Portfolio", 
      desc: "Nykyinen Portfolio.", 
      link: "https://github.com/oksuliini/Portfolio" // voisit linkata deploy-versioon, esim. Vercel/Netlify
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projektit</h2>
      <div className="projects">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Linkki GitHubiin lopuille projekteille */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>
          Katso kaikki projektit{" "}
          <a href="https://github.com/oksuliini" target="_blank" rel="noopener noreferrer">
            GitHubista
          </a>
        </p>
      </div>
    </section>
  );
}
