const projects = [
  {
    icon: '🔥',
    title: 'Heat Alert System',
    desc: 'Early-warning platform to notify communities during extreme heat events. Enhanced with AI-powered predictions for smarter thermal risk assessment.',
    tech: ['Python', 'AI/ML', 'APIs', 'Data Science'],
  },
  {
    icon: '♻️',
    title: 'Smart Waste Collection',
    desc: 'Tech-driven solution to optimize waste management and collection routes using smart algorithms.',
    tech: ['IoT', 'Algorithms', 'Python'],
  },
  {
    icon: '🎨',
    title: 'Kolam Art Pattern Generator',
    desc: 'Identified design principles behind Kolam art patterns and algorithmically recreated them.',
    tech: ['Python', 'Algorithm Design', 'Computer Vision'],
  },
  {
    icon: '📊',
    title: 'Automated Data Reporting',
    desc: 'AI-enhanced application for automated data preparation, estimation, and report writing.',
    tech: ['Python', 'Data Analysis', 'AI'],
  },
  {
    icon: '📝',
    title: 'NoteFlow App',
    desc: 'A modern note-taking application with authentication, CRUD operations, and responsive design.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
  },
  {
    icon: '🌿',
    title: 'Sustainable AI Research',
    desc: 'Research project on Sustainable AI for Eco-Friendly Indian Wedding Practices at Ganpat University.',
    tech: ['Research', 'AI', 'Sustainability'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header fade-in">
        <p className="section-tag">// Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <p className="section-subtitle">A showcase of projects from hackathons, internships, and personal exploration.</p>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="project-thumb">{p.icon}</div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
