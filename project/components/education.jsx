const Education = () => {
  const items = [
    {
      type: 'POSTGRAD',
      title: 'Postgraduate in Business Intelligence (Big Data emphasis)',
      org: 'Universidad Autónoma de Occidente',
      period: '2025 — Present',
      desc: 'Data analysis, BI tools, and big data management. Transforming data into strategic decisions.',
    },
    {
      type: 'DEGREE',
      title: 'Marketing & International Business',
      org: 'Universidad Autónoma de Occidente',
      period: '2019 — 2023',
      desc: 'Marketing strategy, market research, brand management, and international trade operations.',
    },
    {
      type: 'COURSE',
      title: 'Data Engineering',
      org: 'DataCamp',
      period: '2024 — Present',
      desc: 'Python, SQL pipelines, ETL, warehousing fundamentals.',
    },
    {
      type: 'BOOTCAMP',
      title: 'Software Engineer Bootcamp',
      org: '100Devs',
      period: '2022 — 2023',
      desc: 'JavaScript, HTML/CSS, Git, full-stack fundamentals.',
    },
  ];

  const certs = [
    'Google Analytics 4',
    'Google Search Console',
    'SEMrush SEO Toolkit',
    'Yoast SEO',
    'WordPress Development',
    'Power BI Fundamentals',
  ];

  return (
    <section id="education" style={{ padding: '80px 0' }}>
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="dot"></span> 06 / EDUCATION & CERTS
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48 }} className="edu-grid">
          <div>
            <Reveal delay={100}>
              <h2 className="display" style={{
                fontSize: 'clamp(32px, 4.4vw, 56px)',
                fontWeight: 400, lineHeight: 1.05, margin: '0 0 32px 0', letterSpacing: '-0.02em',
              }}>
                Built on <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>continuous learning.</em>
              </h2>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
              {items.map((it, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{
                    padding: '22px 24px',
                    display: 'grid',
                    gridTemplateColumns: '90px 1fr auto',
                    gap: 16,
                    alignItems: 'center',
                    borderBottom: i < items.length - 1 ? '1px solid var(--line)' : 'none',
                    background: 'var(--bg-card)',
                    transition: 'background 0.2s ease',
                  }}
                  className="edu-row"
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elev)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; }}
                  >
                    <span className="mono" style={{
                      fontSize: 10, padding: '4px 8px',
                      borderRadius: 4,
                      background: 'rgba(var(--accent-rgb),0.08)',
                      border: '1px solid rgba(var(--accent-rgb),0.2)',
                      color: 'var(--accent)',
                      letterSpacing: '0.08em',
                      textAlign: 'center',
                    }}>
                      {it.type}
                    </span>
                    <div>
                      <div className="display" style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
                        {it.title}
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>
                        {it.org} · <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{it.period}</span>
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.5 }}>
                        {it.desc}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200}>
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em', marginBottom: 16 }}>
                ▸ CERTIFICATIONS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {certs.map(c => (
                  <div key={c} style={{
                    padding: '12px 16px',
                    border: '1px solid var(--line)',
                    borderRadius: 10,
                    fontSize: 13,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'var(--bg-card)',
                  }}>
                    <span style={{ color: 'var(--accent)' }}>✓</span>
                    {c}
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 24,
                padding: 20,
                border: '1px dashed var(--line-2)',
                borderRadius: 12,
                background: 'rgba(var(--accent-rgb),0.03)',
              }}>
                <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 8 }}>
                  ◉ LANGUAGES
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7 }}>
                  Spanish <span className="mono" style={{ color: 'var(--ink-3)', fontSize: 11 }}>NATIVE</span><br/>
                  English <span className="mono" style={{ color: 'var(--ink-3)', fontSize: 11 }}>B2 — UPPER INTERMEDIATE</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .edu-grid { grid-template-columns: 1fr !important; }
          .edu-row { grid-template-columns: 80px 1fr !important; }
        }
      `}</style>
    </section>
  );
};

window.Education = Education;
