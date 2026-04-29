const hackathons = [
  { title: 'SSIP Hackathon', desc: 'Built a smart wastage collection idea — tech-driven solution to optimize waste management and collection routes.' },
  { title: 'Statathon', desc: 'Developed an AI-enhanced application for automated data preparation, estimation, and report writing.' },
  { title: 'SIH — Smart India Hackathon', desc: 'Programmed to identify design principles behind Kolam art patterns and algorithmically recreate them.' },
  { title: 'Research Conclave', desc: 'Presented a Heat Alert System — early-warning platform to notify communities during extreme heat events.' },
  { title: 'AI Buildathon', desc: 'Showcased the Heat Alert System enhanced with AI-powered predictions for smarter thermal risk assessment.' },
  { title: 'GU Research Internship', desc: 'Winter Research Program — Sustainable AI for Eco-Friendly Indian Wedding Practices.' },
]

export default function Hackathons() {
  return (
    <section className="section" id="hackathons">
      <div className="section-header fade-in">
        <p className="section-tag">// Hackathons & Events</p>
        <h2 className="section-title">Where I've Competed</h2>
        <p className="section-subtitle">Building under pressure, learning through collaboration.</p>
      </div>
      <div className="hackathon-timeline">
        {hackathons.map((h, i) => (
          <div key={i} className="hackathon-item fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="hackathon-content">
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
