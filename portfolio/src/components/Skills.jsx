const skills = [
  {
    icon: '💻',
    title: 'Programming Languages',
    desc: 'Strong foundation in core programming concepts and problem-solving.',
    tags: ['C', 'C++', 'Java', 'Python'],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Building modern, responsive web applications from scratch.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  },
  {
    icon: '🗄️',
    title: 'Database & DBMS',
    desc: 'Designing efficient databases and writing optimized queries.',
    tags: ['MySQL', 'MongoDB', 'SQL', 'DBMS'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Exploring cloud services and infrastructure management.',
    tags: ['Azure', 'Linux', 'Networking', 'CCNA'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    desc: 'Day-to-day tools that power my development workflow.',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    icon: '🧠',
    title: 'Soft Skills',
    desc: 'Collaborative mindset with strong communication abilities.',
    tags: ['Teamwork', 'Leadership', 'Problem Solving', 'Quick Learner'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header fade-in">
        <p className="section-tag">// Skills</p>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-subtitle">Technologies, tools, and competencies I bring to the table.</p>
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="skill-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="skill-tags">
              {s.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
