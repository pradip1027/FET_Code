export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          Open to Opportunities
        </div>
        <h1>
          <span className="gradient">Builder. Learner.</span>
          <br />Problem Solver.
        </h1>
        <p className="hero-desc">
          B.Tech CSE student at Institute of Computer Technology, Ganpat University with hands-on experience in C, C++, Java, Python &amp; Web Dev. Passionate about real-world solutions, hackathons, and cloud infrastructure.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/pradip1027" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">⌨</a>
          <a href="https://linkedin.com/in/pradip-p26" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">in</a>
          <a href="mailto:parmarpradip1211@gmail.com" className="social-icon" title="Email">✉</a>
        </div>
      </div>
    </section>
  )
}
