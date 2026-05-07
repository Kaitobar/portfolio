import { SectionTabs } from './TopBar';

const experience = [
  { period: '2023-Present', company: 'Contáctica · Puerto Rico', role: 'Digital & SEO Analyst', desc: 'Keyword research, on-page & technical SEO, automated reporting in Power BI & Python. GA4 + GSC weekly cycles.', start: 'Mar', end: 'Now' },
  { period: '2022-2023', company: 'Contáctica · Puerto Rico', role: 'Data Intelligence Intern', desc: 'Large-dataset processing, dashboards & reporting for BI initiatives across marketing & ops.', start: 'Aug', end: 'Mar' },
];

const education = [
  { period: '2025—Present', school: 'Universidad Autónoma de Occidente', degree: 'Postgraduate · Business Intelligence (Big Data)' },
  { period: '2019—2025', school: 'Universidad Autónoma de Occidente', degree: 'Marketing & International Business' },
  { period: '2024', school: 'DataCamp', degree: 'Data Engineering — Python, SQL, ETL' },
  { period: '2022—2023', school: '100Devs', degree: 'Software Engineer Bootcamp' },
];

const hardskills = ['SEO', 'GA4', 'GSC', 'SEMrush', 'Screaming Frog', 'WordPress', 'Yoast', 'Power BI', 'Looker', 'SQL', 'Python', 'Excel'];
const softskills = ['Ownership', 'Analytical', 'Communication', 'Bilingual', 'Self-managed', 'Curious'];

export const Resume = () => (
  <section id="resume" style={{ paddingBottom: 12 }}>
    <div className="container">
      <SectionTabs active="Resume" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, alignItems: 'start' }} className="resume-grid">

        {/* Column 1 — Experience */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h3 className="display" style={{ fontSize: 30, margin: 0 }}>Experience</h3>
            <span className="chev">↓</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {experience.map((e, i) => (
              <div key={i} className="module" style={{ padding: 18, borderRadius: 18, position: 'relative' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'var(--paper)',
                  border: '1.5px solid var(--ink)',
                  borderRadius: 999,
                  fontSize: 12, fontWeight: 600,
                  marginBottom: 10,
                }}>{e.period}</div>
                <span style={{
                  position: 'absolute', top: 14, right: 14,
                  width: 22, height: 22, borderRadius: '50%',
                  border: '1.5px solid var(--ink)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11,
                }}>✓</span>
                <div className="grotesk" style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 4 }}>
                  {e.company.split(' · ')[0]}
                </div>
                <div className="display" style={{ fontSize: 16, lineHeight: 1.2, marginBottom: 8 }}>
                  {e.role}
                </div>
                <div className="grotesk" style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45, marginBottom: 12 }}>
                  {e.desc}
                </div>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  paddingTop: 8, borderTop: '1px solid var(--line)',
                  fontSize: 11,
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'var(--ink-3)',
                }}>
                  <span>{e.start}</span>
                  <span>{e.end}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 — Expertise + Hardskill + Softskill */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h3 className="display" style={{ fontSize: 30, margin: 0 }}>Expertise</h3>
              <span className="chev">↓</span>
            </div>
            <div className="grotesk" style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              On-page &amp; Technical SEO, Keyword Research, Content Strategy,
              WordPress + Yoast, Schema Markup, Core Web Vitals, GA4/GSC Reporting,
              Power BI &amp; Looker Dashboards, SQL data pipelines.
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h3 className="display" style={{ fontSize: 30, margin: 0 }}>Hardskill</h3>
              <span className="chev">↓</span>
            </div>
            <div style={{
              position: 'relative',
              borderRadius: 18,
              overflow: 'hidden',
              aspectRatio: '4 / 3',
              background: '#e5e3da',
              border: '1.5px solid var(--ink)',
              padding: 18,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'repeating-linear-gradient(135deg, transparent 0, transparent 14px, rgba(0,0,0,0.04) 14px, rgba(0,0,0,0.04) 15px)',
              }} />
              <div style={{ position: 'relative', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {hardskills.slice(0, 6).map((s, i) => (
                  <span key={s} style={{
                    width: 38, height: 38,
                    borderRadius: '50%',
                    background: i % 2 ? 'var(--accent)' : 'var(--ink)',
                    color: i % 2 ? 'var(--accent-fg)' : 'var(--paper)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, fontWeight: 700,
                    fontFamily: 'JetBrains Mono, monospace',
                    border: '2px solid var(--paper)',
                    marginLeft: i === 0 ? 0 : -10,
                    letterSpacing: '-0.02em',
                  }}>{s.slice(0, s.length > 4 ? 3 : s.length).toUpperCase()}</span>
                ))}
              </div>
              <div style={{ position: 'relative', marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {hardskills.slice(6).map(s => (
                  <span key={s} className="hashtag" style={{ fontSize: 11, padding: '4px 10px' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h3 className="display" style={{ fontSize: 30, margin: 0 }}>Softskill</h3>
              <span className="chev">↓</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {softskills.map((s, i) => (
                <span key={s} style={{
                  padding: '7px 14px',
                  borderRadius: 999,
                  background: i % 2 ? 'var(--accent)' : 'transparent',
                  color: i % 2 ? 'var(--accent-fg)' : 'var(--ink)',
                  border: '1.5px solid var(--ink)',
                  fontSize: 13, fontWeight: 500,
                }}>#{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3 — Education */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h3 className="display" style={{ fontSize: 30, margin: 0 }}>Education</h3>
            <span className="chev">↓</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {education.map((e, i) => (
              <div key={i} style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                border: '1.5px solid var(--ink)',
                borderRadius: 18,
                padding: 18,
                position: 'relative',
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'var(--paper)',
                  color: 'var(--ink)',
                  borderRadius: 999,
                  fontSize: 12, fontWeight: 600,
                  marginBottom: 12,
                }}>{e.period}</div>
                <span style={{
                  position: 'absolute', top: 14, right: 14,
                  width: 22, height: 22, borderRadius: '50%',
                  border: '1.5px solid var(--paper)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11,
                }}>✓</span>
                <div className="grotesk" style={{ fontSize: 12, opacity: 0.7, marginBottom: 4 }}>
                  {e.school}
                </div>
                <div className="display" style={{ fontSize: 16, lineHeight: 1.2 }}>
                  {e.degree}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 1000px) {
        .resume-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 720px) {
        .resume-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);
