import { SectionTabs } from './TopBar';
import katherinImg from '../assets/katherin.png';

export const About = () => (
  <section id="aboutme" style={{ paddingBottom: 12 }}>
    <div className="container">
      <SectionTabs active="About me" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 28, alignItems: 'start' }} className="about-row">
        {/* Left — photo card */}
        <div style={{
          borderRadius: 22,
          overflow: 'hidden',
          background: '#1a1a1a',
          position: 'relative',
          aspectRatio: '4 / 5',
          border: '1.5px solid var(--ink)',
        }}>
          <img src={katherinImg} alt="Katherin Lasso"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.05)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.7) 100%)',
          }} />
          <div style={{ position: 'absolute', top: 24, left: 24, right: 24, color: 'var(--paper)' }}>
            <div className="grotesk" style={{ fontSize: 16, fontWeight: 500, opacity: 0.9, marginBottom: 6 }}>Hello,</div>
            <div className="display" style={{ fontSize: 'clamp(36px, 4.4vw, 52px)', lineHeight: 0.95, color: 'var(--paper)' }}>
              My name<br />is Katherin
            </div>
          </div>
          <div style={{
            position: 'absolute', bottom: 20, left: 20, right: 20,
            padding: '12px 16px',
            borderTop: '1px solid rgba(255,255,255,0.3)',
            color: 'rgba(255,255,255,0.92)',
            fontSize: 11,
            textAlign: 'center',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.05em',
          }}>
            I OPTIMIZE WITH DATA — NOT GUESSES. 3+ YEARS<br />
            SHIPPING ORGANIC GROWTH AND DASHBOARDS.
          </div>
        </div>

        {/* Right — Introduction & Get In Touch */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h2 className="display" style={{ fontSize: 36, margin: 0 }}>Introduction</h2>
              <span className="chev">↓</span>
            </div>
            <div className="module" style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <div className="display" style={{ fontSize: 22, marginBottom: 8 }}>
                  SEO Analyst &amp; WordPress Specialist based in Cali, CO
                </div>
                <div className="grotesk" style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                  Marketing background, analyst's discipline. I run keyword research,
                  on-page &amp; technical SEO, manage and optimize WordPress sites,
                  and build the dashboards in GA4, Power BI &amp; Looker that prove the work moved numbers.
                </div>
              </div>
              <div style={{
                width: 100, height: 100,
                borderRadius: 14,
                background: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                color: 'var(--accent-fg)',
                fontFamily: 'Archivo Black',
                fontSize: 38,
                letterSpacing: '-0.05em',
              }}>↗</div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h2 className="display" style={{ fontSize: 36, margin: 0 }}>Get In Touch</h2>
              <span className="chev">↓</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="touch-grid">
              {[
                { t: 'Email', v: 'lassokatherin@gmail.com', bg: 'var(--ink)', fg: 'var(--paper)', icon: '✉', href: 'mailto:lassokatherin@gmail.com', target: '_self' },
                { t: 'LinkedIn', v: 'linkedin.com/in/katherinlasso', bg: 'var(--accent)', fg: 'var(--accent-fg)', icon: 'in', href: 'https://www.linkedin.com/in/katherinlasso/', target: '_blank' },
                { t: 'GitHub', v: 'github.com/Kaitobar', bg: 'var(--paper)', fg: 'var(--ink)', icon: 'gh', href: 'https://github.com/Kaitobar', target: '_blank' },
              ].map(c => (
                <a key={c.t} href={c.href} target={c.target || '_blank'} rel="noopener noreferrer" style={{
                  background: c.bg, color: c.fg,
                  border: '1.5px solid var(--ink)',
                  borderRadius: 16,
                  padding: '18px 16px',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 110,
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span className="display" style={{ fontSize: 28 }}>{c.icon}</span>
                  <div className="mono" style={{ fontSize: 11, opacity: 0.85, marginTop: 12, wordBreak: 'break-all' }}>
                    {c.v}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 860px) {
        .about-row { grid-template-columns: 1fr !important; }
        .touch-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);
