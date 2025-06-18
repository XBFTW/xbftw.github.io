import { useState } from 'react'
import './App.css'

const tabs = [
  { label: 'About', content: (
      <section>
        <h2>About Me</h2>
        <p>
          Hi! I'm Uttam Sharma, a passionate software developer and student. I enjoy building web applications, exploring new technologies, and solving real-world problems with code.
        </p>
      </section>
    )
  },
  { label: 'Projects', content: (
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Personal Website</strong> – This site! Built with React and Vite.
          </li>
          <li>
            <strong>Project 2</strong> – Description of another project or coursework.
          </li>
          <li>
            <strong>Project 3</strong> – Description of another project or achievement.
          </li>
        </ul>
      </section>
    )
  },
  { label: 'Skills', content: (
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
    )
  },
  { label: 'Contact', content: (
      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:uttam@example.com">uttam@example.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/xbftw" target="_blank" rel="noopener noreferrer">xbftw</a>
        </p>
      </section>
    )
  }
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
              <span className="site-title-icon">🟣</span>
              <span className="site-title-text">Uttam Sharma</span>
            </div>
            <nav style={{ marginLeft: 'auto' }}>
              <ul className="topbar-nav">
                {tabs.map((tab, idx) => (
                  <li key={tab.label}>
                    <button
                      className={activeTab === idx ? 'active' : ''}
                      onClick={() => setActiveTab(idx)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <main className="main-content" style={{ flex: 1 }}>
            {tabs[activeTab].content}
          </main>
          <footer style={{ marginTop: 'auto', marginBottom: '2.5rem', textAlign: 'center', color: '#888' }}>
            &copy; {new Date().getFullYear()} Uttam Sharma. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}

export default App
