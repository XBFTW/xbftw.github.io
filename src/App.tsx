import { useState } from "react";
import "./App.css";
import contactLinks from "./contactLinks";

const tabs = [
  {
    label: "About",
    content: (
      <section className="about-section">
        <div className="about-photo-container">
          <img
            src="/headshot.jpg"
            alt="Uttam Sharma headshot"
            className="about-photo"
          />
        </div>
        <div className="about-text">
          <h2>
            <span className="about-hi">Hello! 👋</span>
            <br />
            <span className="about-name">
              I'm <span className="about-name-gradient">Uttam Sharma</span>
            </span>
          </h2>
          <p className="about-summary">
            Computer Science student at{" "}
            <span className="about-highlight">Simon Fraser University</span>{" "}
            with a passion for{" "}
            <span className="about-highlight">software development</span> and{" "}
            <span className="about-highlight">cybersecurity</span>.
          </p>
          <p className="about-detail">
            I love exploring new tools, diving into open-source code, and
            staying up-to-date with the latest in tech. My goal is to create
            meaningful software and help make technology more secure and
            accessible for everyone.
          </p>
        </div>
      </section>
    ),
  },
  {
    label: "Projects",
    content: (
      <section className="tab-section">
        <h2 className="tab-title">Projects</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3 className="project-title">Personal Website</h3>
            <p className="project-desc">
              This website! Built with React and Vite, styled with custom CSS,
              and fully responsive. It serves as my portfolio and contact hub.
            </p>
            <a
              href="https://github.com/xbftw/xbftw.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Source
            </a>
          </div>
          <div className="project-card">
            <h3 className="project-title">XBFTW-BOT</h3>
            <p className="project-desc">
              A feature-rich Discord bot for moderation, fun, and utility
              commands. Built with Node.js and discord.js, used by multiple
              communities.
            </p>
            <a
              href="https://github.com/xbftw/XBFTW-BOT"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Source
            </a>
          </div>
        </div>
      </section>
    ),
  },
  {
    label: "Skills",
    content: (
      <section className="tab-section">
        <h2 className="tab-title">Skills</h2>
        <div className="skills-list">
          <div className="skill-group">
            <h4 className="skill-title">Languages</h4>
            <ul>
              <li>JavaScript / TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C / C++</li>
            </ul>
          </div>
          <div className="skill-group">
            <h4 className="skill-title">Frameworks & Libraries</h4>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>discord.js</li>
            </ul>
          </div>
          <div className="skill-group">
            <h4 className="skill-title">Tools & Other</h4>
            <ul>
              <li>Git & GitHub</li>
              <li>Linux</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>
    ),
  },
  {
    label: "Contact",
    content: (
      <section className="tab-section">
        <h2 className="tab-title">Contact</h2>
        <p className="contact-desc">
          Feel free to reach out to me through any of the platforms below!
        </p>
        <div className="contact-icons contact-icons-centered">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            {/* GitHub SVG */}
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
          <a
            href={contactLinks.email}
            className="icon-link"
            aria-label="Email"
          >
            {/* Email SVG */}
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z" />
            </svg>
          </a>
          <a
            href={contactLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="Discord"
          >
            {/* Discord SVG */}
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.067.067 0 0 0-.073-.035A19.736 19.736 0 0 0 3.677 4.369a.064.064 0 0 0-.03.027C.533 9.09-.32 13.579.099 18.021a.08.08 0 0 0 .028.056c2.052 1.507 4.042 2.422 5.993 3.029a.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 0 1-.008-.127c.126-.094.252-.192.371-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.245.198.372.292a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.891.076.076 0 0 0-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.607 3.951-1.522 6.003-3.029a.077.077 0 0 0 .028-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
            </svg>
          </a>
          <a
            href={contactLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="Instagram"
          >
            {/* Instagram SVG */}
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.241 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.241 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314C.414 19.771.131 18.504.072 17.223.013 15.943 0 15.554 0 12c0-3.204.012-3.584.07-4.85.059-1.281.342-2.394 1.314-3.374.98-.98 2.093-1.263 3.374-1.322C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.093-1.322 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.342 2.394 1.322 3.374.98.98 2.093 1.263 3.374 1.322C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.394-.342 3.374-1.322.98-.98 1.263-2.093 1.322-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.342-2.394-1.322-3.374-.98-.98-2.093-1.263-3.374-1.322C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
        </div>
      </section>
    ),
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {showLanding ? (
        <div className="landing-page" onClick={() => setShowLanding(false)}>
          <span className="landing-hi">hi my name is</span>
          <span className="landing-name">UTTAM SHARMA</span>
          <span className="landing-hint">(click anywhere to continue)</span>
        </div>
      ) : (
        <>
          <div className="topbar">
            <div className="site-title-gradient">
              <span className="site-title-text">Uttam Sharma</span>
            </div>
            <nav style={{ marginLeft: "auto" }}>
              <ul className="topbar-nav">
                {tabs.map((tab, idx) => (
                  <li key={tab.label}>
                    <button
                      className={activeTab === idx ? "active" : ""}
                      onClick={() => setActiveTab(idx)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <main className="main-content">{tabs[activeTab].content}</main>
          <footer
            style={{
              marginTop: "auto",
              marginBottom: "2.5rem",
              textAlign: "center",
              color: "#888",
            }}
          >
            &copy; {new Date().getFullYear()} Uttam Sharma. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
