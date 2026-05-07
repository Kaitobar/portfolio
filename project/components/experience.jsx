const ROLES = [
  {
    role: 'Digital & SEO Analyst',
    company: 'Contáctica',
    location: 'Puerto Rico (Remote)',
    period: 'Mar 2023 — Present',
    current: true,
    bullets: [
      'Built and automated reporting workflows using Excel, Power BI, and Python — cutting weekly reporting time by ~70%.',
      'Conducted keyword research and competitive analysis to lift organic search performance across multiple client portfolios.',
      'Monitored and analyzed website traffic with GA4 and Search Console; surfaced opportunities and tracked impact week-over-week.',
      'Developed and maintained interactive dashboards to track KPIs and support data-driven decisions for stakeholders.',
      'Ensured data quality, integrity, and consistency across multiple data sources.',
    ],
    tags: ['SEO', 'GA4', 'GSC', 'Power BI', 'SEMrush', 'WordPress', 'Python'],
  },
  {
    role: 'Data Intelligence Intern',
    company: 'Contáctica',
    location: 'Puerto Rico',
    period: 'Aug 2022 — Mar 2023',
    bullets: [
      'Assisted in collection, processing and analysis of large datasets supporting business intelligence initiatives.',
      'Developed data visualization dashboards to deliver actionable insights for decision-making.',
      'Supported senior analysts on cross-functional projects spanning marketing, ops and reporting.',
    ],
    tags: ['SQL', 'Looker', 'Excel', 'Data Viz'],
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '80px 0' }}>
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="dot"></span> 03 / EXPERIENCE
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }} className="exp-grid">
          <Reveal>
            <div>
              <h2 className="display" style={{
                fontSize: 'clamp(32px, 4.4vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.05,
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em',
              }}>
                Where I've<br/>
                <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>shipped impact.</em>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, fontWeight: 300, marginBottom: 24 }}>
                3+ years scaling organic channels and analytics infrastructure for an international agency client base.
              </p>
              <a className="btn" href="#contact">
                Full résumé →
              </a>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {ROLES.map((r, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card exp-card" style={{
                  padding: 28,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--line-2)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em', marginBottom: 6 }}>
                        {r.period}
                      </div>
                      <h3 className="display" style={{ fontSize: 26, fontWeight: 500, margin: '0 0 4px 0', letterSpacing: '-0.01em' }}>
                        {r.role}
                      </h3>
                      <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>
                        <span style={{ color: 'var(--accent)' }}>{r.company}</span> &nbsp;·&nbsp; {r.location}
                      </div>
                    </div>
                    {r.current && (
                      <span className="mono" style={{
                        fontSize: 10, padding: '4px 10px',
                        background: 'rgba(var(--accent-rgb),0.1)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(var(--accent-rgb),0.3)',
                        borderRadius: 999, letterSpacing: '0.08em',
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                      }}>
                        <LiveDot /> CURRENT
                      </span>
                    )}
                  </div>

                  <ul style={{ margin: '0 0 18px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {r.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                        <span className="mono" style={{ color: 'var(--accent)', flexShrink: 0, fontSize: 12, paddingTop: 2 }}>↳</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {r.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

window.Experience = Experience;
