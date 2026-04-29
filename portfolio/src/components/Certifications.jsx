const certs = [
  { icon: '🏅', title: 'Software Foundation with C Programming', issuer: 'IBM · Ganpat University SkillsNetwork', link: 'https://courses.guni.skillsnetwork.site/certificates/541390e307684b1cb88855401cfabc7b' },
  { icon: '🏅', title: 'Advanced Programming With C++', issuer: 'IBM · Ganpat University SkillsNetwork', link: 'https://courses.guni.skillsnetwork.site/certificates/2c84f0a537a1468f9688e88a8a2fe808' },
  { icon: '🎖️', title: 'CCNA: Introduction to Networks', issuer: 'Cisco · Credly Verified Badge', link: 'https://www.credly.com/badges/de30c766-3a8f-4b22-96d3-54dc26838320/public_url' },
  { icon: '🏅', title: 'Python 101 for Data Science', issuer: 'IBM · Ganpat University SkillsNetwork', link: 'https://courses.guni.skillsnetwork.site/certificates/17b89e3731084560b0070b40455a0951' },
  { icon: '🏅', title: 'Java Fundamentals', issuer: 'IBM · Ganpat University SkillsNetwork', link: 'https://courses.guni.skillsnetwork.site/certificates/733caab8d3c647cc94d54baa98f7c181' },
  { icon: '🎖️', title: 'Data Science Essentials with Python', issuer: 'Cisco · Credly Verified Badge', link: 'https://www.credly.com/badges/8fa8dedf-3a51-41b1-8884-0f6e78de0fff/public_url' },
]

export default function Certifications() {
  return (
    <section className="section" id="certs">
      <div className="section-header fade-in">
        <p className="section-tag">// Achievements</p>
        <h2 className="section-title">Certifications & Badges</h2>
        <p className="section-subtitle">Verified credentials from industry leaders.</p>
      </div>
      <div className="certs-grid">
        {certs.map((c, i) => (
          <div key={i} className="cert-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="cert-badge">{c.icon}</div>
            <div className="cert-info">
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
              <a href={c.link} target="_blank" rel="noreferrer" className="cert-link">View Certificate ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
