const cloudSkills = [
  { icon: '☁️', title: 'Microsoft Azure', desc: 'Studying core Azure services — compute, storage, networking, identity & access management for AZ-104.' },
  { icon: '🐧', title: 'Linux Systems', desc: 'Hands-on with Linux CLI, file systems, process management, permissions, and shell scripting.' },
  { icon: '🌐', title: 'Networking (CCNA)', desc: 'Cisco CCNA certified — TCP/IP, subnetting, routing protocols, VLANs, and network security basics.' },
  { icon: '🔒', title: 'Cloud Security', desc: 'Learning IAM policies, network security groups, firewalls, and cloud compliance basics.' },
]

export default function Cloud() {
  return (
    <section className="section" id="cloud">
      <div className="section-header fade-in">
        <p className="section-tag">// Cloud & Infrastructure</p>
        <h2 className="section-title">Cloud Journey</h2>
        <p className="section-subtitle">Driven by curiosity about scalable systems, actively building expertise in cloud infrastructure.</p>
      </div>
      <div className="cloud-grid">
        {cloudSkills.map((c, i) => (
          <div key={i} className="cloud-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="cloud-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
