import { useState } from "react";
import "./App.css";

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
          <h2>About Me</h2>
          <p>
            Hi! I’m Uttam Sharma, a Computer Science student at Simon Fraser
            University with a strong passion for all things tech. I’m especially
            interested in software development and cybersecurity, and I’m always
            eager to learn more about how technology shapes the world around us.
            Whether it’s exploring new tools, diving into open-source code, or
            staying up-to-date with the latest in the tech world, I love being
            part of a field that’s constantly evolving. My goal is to build a
            career where I can create meaningful software and contribute to
            making technology more secure and accessible for everyone.
          </p>
        </div>
      </section>
    ),
  },
  {
    label: "Projects",
    content: (
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Personal Website</strong> – This site! Built with React and
            Vite.
          </li>
          <li>
            <strong>Project 2</strong> – Description of another project or
            coursework.
          </li>
          <li>
            <strong>Project 3</strong> – Description of another project or
            achievement.
          </li>
        </ul>
      </section>
    ),
  },
  {
    label: "Skills",
    content: (
      <section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React</li>
          <li>HTML &amp; CSS</li>
          <li>Node.js</li>
          <li>Git &amp; GitHub</li>
        </ul>
      </section>
    ),
  },
  {
    label: "Contact",
    content: (
      <section>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:contact@uttamsharma.com">contact@uttamsharma.com</a>
        </p>
      </section>
    ),
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
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
