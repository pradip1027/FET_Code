export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-header fade-in">
        <p className="section-tag">// About Me</p>
        <h2 className="section-title">Who I Am</h2>
      </div>
      <div className="about-grid fade-in">
        <div className="about-image-wrapper">
          <div className="about-avatar">👨‍💻</div>
        </div>
        <div className="about-text">
          <h3>Hey! I'm Pradip Parmar</h3>
          <p>
            An enthusiastic aspiring software developer from Gujarat, India. Pursuing B.Tech in CSE at Institute of Computer Technology, Ganpat University, Mehsana.
          </p>
          <p>
            Hands-on experience with C, C++, Java, and Python, skilled in designing logical solutions, clean code, and DBMS. I love picking up new technologies quickly and collaborating in teams.
          </p>
          <p>
            Beyond code, I've contributed as a Community Impact &amp; Advocacy Intern at Jivanamasteya NGO — teaching underprivileged students. Also diving deep into Cloud Administration (AZ-104).
          </p>
          <div className="about-info">
            <a href="mailto:parmarpradip1211@gmail.com" className="about-info-item">
              <span className="icon">✉</span> parmarpradip1211@gmail.com
            </a>
            <a href="https://linkedin.com/in/pradip-p26" target="_blank" rel="noreferrer" className="about-info-item">
              <span className="icon">🔗</span> pradip-p26
            </a>
            <a href="https://github.com/pradip1027" target="_blank" rel="noreferrer" className="about-info-item">
              <span className="icon">⌨</span> pradip1027
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
